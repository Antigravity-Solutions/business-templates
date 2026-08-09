/**
 * Formata um valor numérico para o padrão de moeda brasileira (BRL).
 * Exemplo: 28.9 -> "R$ 28,90"
 * 
 * @param {number} value - O valor numérico a ser formatado.
 * @returns {string} Valor formatado em BRL.
 */
export function formatBRL(value) {
  if (typeof value !== 'number' || isNaN(value)) {
    return 'R$ 0,00';
  }
  
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}
