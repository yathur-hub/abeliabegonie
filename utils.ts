
export const formatCHF = (amount: number | null): string => {
  if (amount === null) return 'Auf Anfrage';
  return new Intl.NumberFormat('de-CH', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace(/,/g, "'") + ' CHF';
};

export const getStatusColor = (status: string | null) => {
  if (status === null) return 'bg-blue-50 text-blue-600 border-blue-200'; // Badge „Status offen“
  switch (status) {
    case 'verkauft': return 'bg-gray-100 text-gray-400 border-gray-200 opacity-60';
    case 'reserviert': return 'bg-amber-50 text-amber-700 border-amber-200';
    case 'auf Anfrage': return 'bg-walnut text-white border-walnut font-bold'; // Hervorgehoben
    default: return 'bg-gray-50 text-gray-600 border-gray-200';
  }
};

export const getStatusLabel = (status: string | null) => {
  if (status === null) return 'Status offen';
  return status;
};
