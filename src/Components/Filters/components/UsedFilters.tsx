import { Button } from '@components';
import { AiOutlinePlus } from 'react-icons/ai';
import { UsedFiltersProps } from '@components/Filters/types';
import FiltersButton from '@components/Filters/components/FiltersButton';

const UsedFilters = ({ appliedFilters, clearSearchParams, ...rest }: UsedFiltersProps) => {
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {appliedFilters.map((btn) => {
          return (
            <Button
              key={`${btn.groupKey}_${btn.value}`}
              type="button"
              className="min-w-[calc(50%-4px)] bg-primary-100 text-black hover:text-white"
              onClick={() => clearSearchParams(btn.groupKey, btn.value)}
              iconAfter={<AiOutlinePlus className="rotate-45" size={16} />}
              {...rest}
            >
              {btn.label}
            </Button>
          );
        })}
      </div>

      <FiltersButton className="mt-2 hidden md:flex" onClear={() => clearSearchParams()} title="Applied Filters" />
    </div>
  );
};

export default UsedFilters;
