import useToggle from '@utils/useToggle';
import { getActiveFilters } from '@components/Filters/utils';

export type CheckboxValueType = { value: string; label: string }[];
export type CheckboxProps = Record<string, CheckboxValueType>;
export type FilterBtnType = Exclude<ReturnType<typeof getActiveFilters>[0], false | undefined>;

export type UsedFiltersProps = {
  appliedFilters: FilterBtnType[];
  clearSearchParams: (name?: string, value?: string) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type FiltersType =
  | {
      isMobile: boolean;
      setIsOpen: ReturnType<typeof useToggle> extends readonly [boolean, infer Last] ? Last : never;
    }
  | {
      isMobile?: never;
      setIsOpen?: never;
    };
