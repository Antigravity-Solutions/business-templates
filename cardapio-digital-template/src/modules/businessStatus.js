/**
 * Módulo de Status do Estabelecimento (Aberto / Fechado)
 * 
 * Calcula dinamicamente se o estabelecimento está aberto ou fechado
 * com base na hora atual no fuso horário do estabelecimento (siteConfig.business.timezone)
 * e oferece suporte nativo a horários de funcionamento que atravessam a meia-noite (ex: 18:00 às 02:00).
 */

/**
 * Converte horário "HH:mm" em minutos desde a meia-noite.
 * Exemplo: "18:30" -> 1110
 * 
 * @param {string} timeStr 
 * @returns {number} Minutos
 */
export function timeToMinutes(timeStr) {
  if (!timeStr || typeof timeStr !== 'string') return 0;
  const [hours, minutes] = timeStr.split(':').map(Number);
  return (hours || 0) * 60 + (minutes || 0);
}

/**
 * Obtém os dados de tempo e dia da semana no fuso horário do estabelecimento.
 * 
 * @param {string} timezone - Fuso IANA (ex: "America/Sao_Paulo")
 * @returns {{ day: number, currentMinutes: number, formattedTime: string }}
 */
export function getZonedTime(timezone = "America/Sao_Paulo") {
  const now = new Date();
  
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    });

    const parts = formatter.formatToParts(now);
    let weekdayStr = '';
    let hour = 0;
    let minute = 0;

    for (const part of parts) {
      if (part.type === 'weekday') weekdayStr = part.value;
      if (part.type === 'hour') hour = parseInt(part.value, 10);
      if (part.type === 'minute') minute = parseInt(part.value, 10);
    }

    if (hour === 24) hour = 0;

    const dayMap = { 'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6 };
    const day = dayMap[weekdayStr] !== undefined ? dayMap[weekdayStr] : now.getDay();
    const currentMinutes = hour * 60 + minute;
    const formattedTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;

    return { day, currentMinutes, formattedTime };
  } catch (error) {
    console.warn(`[businessStatus] Fuso horário inválido '${timezone}', usando horário local.`, error);
    const day = now.getDay();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const formattedTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    return { day, currentMinutes, formattedTime };
  }
}

/**
 * Avalia se o estabelecimento está aberto no momento atual para uma lista de horários.
 * 
 * @param {Array} hoursList - Lista de horários de siteConfig.business.hours
 * @param {string} timezone - Fuso IANA
 * @returns {{ isOpen: boolean, statusText: string, detailText: string, currentDayConfig: Object }}
 */
export function evaluateBusinessStatus(hoursList = [], timezone = "America/Sao_Paulo") {
  if (!Array.isArray(hoursList) || hoursList.length === 0) {
    return {
      isOpen: false,
      statusText: "Fechado",
      detailText: "Horários não configurados",
      currentDayConfig: null
    };
  }

  const { day: currentDay, currentMinutes, formattedTime } = getZonedTime(timezone);

  // Encontra configuração do dia atual
  const todayConfig = hoursList.find(h => h.day === currentDay);
  
  // Encontra configuração do dia anterior (para verificar turnos que atravessaram a meia-noite)
  const previousDay = (currentDay + 6) % 7;
  const prevConfig = hoursList.find(h => h.day === previousDay);

  let isOpen = false;
  let activeScheduleStr = "";

  // 1. Verifica se estamos no período de um turno do DIA ANTERIOR que atravessou a meia-noite
  if (prevConfig && !prevConfig.closed) {
    const openMins = timeToMinutes(prevConfig.open);
    const closeMins = timeToMinutes(prevConfig.close);

    // Se o horário de fechar for menor que o de abrir, o turno atravessou a meia-noite (ex: 18:00 às 02:00)
    if (openMins > closeMins && currentMinutes < closeMins) {
      isOpen = true;
      activeScheduleStr = `${prevConfig.open} às ${prevConfig.close}`;
    }
  }

  // 2. Se ainda não foi identificado como aberto, verifica o turno do DIA ATUAL
  if (!isOpen && todayConfig && !todayConfig.closed) {
    const openMins = timeToMinutes(todayConfig.open);
    const closeMins = timeToMinutes(todayConfig.close);

    if (openMins < closeMins) {
      // Turno no mesmo dia (ex: 11:00 às 22:00)
      if (currentMinutes >= openMins && currentMinutes < closeMins) {
        isOpen = true;
        activeScheduleStr = `${todayConfig.open} às ${todayConfig.close}`;
      }
    } else if (openMins > closeMins) {
      // Turno que iniciou hoje e vai além da meia-noite (ex: iniciou 18:00 e agora são 23:00)
      if (currentMinutes >= openMins) {
        isOpen = true;
        activeScheduleStr = `${todayConfig.open} às ${todayConfig.close}`;
      }
    }
  }

  // Monta os textos informativos para a UI
  if (isOpen) {
    return {
      isOpen: true,
      statusText: "Aberto agora",
      detailText: `Hoje: ${activeScheduleStr}`,
      currentDayConfig: todayConfig
    };
  } else {
    let nextDetail = "Fechado hoje";
    if (todayConfig && !todayConfig.closed) {
      const openMins = timeToMinutes(todayConfig.open);
      if (currentMinutes < openMins) {
        nextDetail = `Abre hoje às ${todayConfig.open}`;
      } else {
        nextDetail = `Hoje funcionou até ${todayConfig.close}`;
      }
    }

    return {
      isOpen: false,
      statusText: "Fechado no momento",
      detailText: nextDetail,
      currentDayConfig: todayConfig
    };
  }
}
