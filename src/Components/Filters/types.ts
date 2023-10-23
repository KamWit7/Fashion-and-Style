import { getActiveFilters } from './utils';

export type CheckboxValueType = { value: string; label: string }[];
export type CheckboxProps = Record<string, CheckboxValueType>;
export type FilterBtnType = Exclude<ReturnType<typeof getActiveFilters>[0], false | undefined>;

export type UsedFiltersProps = {
  appliedFilters: FilterBtnType[];
  clearSearchParams: (name?: string, value?: string) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
