import React, { Fragment } from 'react';
import { AccordionItem, Checkbox } from '@components';
import { FetcherWithComponents, useLocation, useSearchParams } from 'react-router-dom';

interface FiltersProps {
  fetcher: FetcherWithComponents<API.ProductType[]>;
}
type CheckboxValueType = { value: string; label: string }[];
type CheckboxProps = Record<string, CheckboxValueType>;

const sizes: CheckboxProps = {
  sizes: [
    { value: 'xs', label: 'XS' },
    { value: 's', label: 'S' },
    { value: 'm', label: 'M' },
    { value: 'l', label: 'L' },
    { value: 'xl', label: 'XL' },
  ],
};

const stocks: CheckboxProps = {
  inStock: [
    { value: 'true', label: 'In Stock' },
    { value: 'false', label: 'Out of Stock' },
  ],
};
const colors: CheckboxProps = {
  colors: [
    { value: '#0C0C0C', label: 'Black' },
    { value: '#748C70', label: 'Green' },
    { value: '#909225', label: 'Olive' },
    { value: '#D0A5EA', label: 'Pink' },
    { value: '#19418E', label: 'Blue' },
    { value: '#DEB222', label: 'Orange' },
  ],
};

const createInitialValueFn = (searchParams: URLSearchParams) => (filter: CheckboxProps) => {
  let initialValue = {};

  Object.entries(filter).forEach(([filterName, filterArr]) => {
    filterArr.forEach((f) => {
      initialValue = { ...initialValue, [f.value]: searchParams.has(filterName, f.value) };
    });
  });

  return initialValue;
};

// TODO: better typing for initialValue
const CheckboxRegister = ({
  filter,
  initialValue,
}: {
  filter: CheckboxProps;
  initialValue: Record<string, boolean>;
}) => {
  const register = (name: string, value?: string) => {
    const defaultChecked = Boolean(value && initialValue?.[value as keyof typeof initialValue]);

    return { name, defaultChecked, value };
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

const Filters = ({ fetcher }: FiltersProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const getInitialSearchParams = createInitialValueFn(searchParams);

  const sizesIV = getInitialSearchParams(sizes);
  const stocksIV = getInitialSearchParams(stocks);
  const colorsIV = getInitialSearchParams(colors);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const { name, checked, value } = e.target as HTMLInputElement;

    if (checked) {
      searchParams.append(name, value);
    }

    if (!checked && searchParams.has(name, value)) {
      searchParams.delete(name, value);
    }

    setSearchParams(searchParams);

    fetcher.submit(searchParams, { method: 'PATCH', action: location.pathname });
  }

  return (
    <fetcher.Form
      onChange={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="flex-grow basis-1/3">
        <AccordionItem title="Sort By">
          <CheckboxRegister filter={stocks} initialValue={stocksIV} />
        </AccordionItem>

        <AccordionItem title="Color">
          <CheckboxRegister filter={colors} initialValue={colorsIV} />
        </AccordionItem>

        <AccordionItem title="Size">
          <CheckboxRegister filter={sizes} initialValue={sizesIV} />
        </AccordionItem>
      </div>
    </fetcher.Form>
  );
};

export default Filters;
