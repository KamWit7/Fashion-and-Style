import { CheckboxProps } from '@components/Filters/types';

export const sizes: CheckboxProps = {
  sizes: [
    { value: 'xs', label: 'XS' },
    { value: 's', label: 'S' },
    { value: 'm', label: 'M' },
    { value: 'l', label: 'L' },
    { value: 'xl', label: 'XL' },
  ],
};

export const stocks: CheckboxProps = {
  inStock: [
    { value: 'true', label: 'In Stock' },
    { value: 'false', label: 'Out of Stock' },
  ],
};
export const colors: CheckboxProps = {
  colors: [
    { value: '#0C0C0C', label: 'Black' },
    { value: '#748C70', label: 'Green' },
    { value: '#909225', label: 'Olive' },
    { value: '#D0A5EA', label: 'Pink' },
    { value: '#19418E', label: 'Blue' },
    { value: '#DEB222', label: 'Orange' },
  ],
};
