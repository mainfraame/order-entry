export const formatThousandsPlace = (value) => (
    `${value || 0}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
);

export const formatPrecision = (value, precision) => (
    `${(value || 0).toFixed(precision)}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
);

export const parseNumber = (value) => (
    Number(value.replace(/[^\d.]/g, ''))
);