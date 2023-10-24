import { Fragment } from 'react';
import { Checkbox } from '@components';
import { CheckboxProps } from '@components/Filters/types';

// TODO: better typing for initialValue
const CheckboxRegister = ({
  filter,
  initialValue,
}: {
  filter: CheckboxProps;
  initialValue: Record<string, boolean>;
}) => {
  const register = (name: string, value?: string) => {
    const checked = typeof value !== 'undefined' ? initialValue?.[value as keyof typeof initialValue] : false;

    return { name, value, checked, onChange: () => {} };
  };

  return Object.entries(filter).map(([filterName, filterArr]) => {
    return (
      <Fragment key={filterName}>
        {filterArr.map((f) => (
          <Checkbox key={`${filterName}_${f.label}`} {...register(filterName, f.value)} label={f.label} />
        ))}
      </Fragment>
    );
  });
};

export default CheckboxRegister;
