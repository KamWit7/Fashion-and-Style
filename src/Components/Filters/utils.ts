import { colors, sizes, stocks } from './consts';
import { CheckboxProps } from './types';

export const isOpenOnInit = (initialValue: Record<string, boolean>) => Object.values(initialValue).includes(true);

export const getActiveFilters = (filterState: Record<string, boolean>) =>
  Object.entries(filterState)
    .filter(([, isOn]) => isOn)
    .map(([filterName]) =>
      Object.entries({ ...sizes, ...stocks, ...colors })
        .map(([groupKey, v]) => {
          const activeFilter = v.find((label) => {
            return label.value === filterName;
          });

          return activeFilter !== undefined && { ...activeFilter, groupKey };
        })
        .filter((v) => v)
        .pop()
    );

export const createCheckboxState = (searchParams: URLSearchParams) => (filter: CheckboxProps) => {
  let initialValue = {};

  Object.entries(filter).forEach(([filterName, filterArr]) => {
    filterArr.forEach((f) => {
      initialValue = { ...initialValue, [f.value]: searchParams.has(filterName, f.value) };
    });
  });

  return initialValue as Record<string, boolean>;
};
