import React, { Fragment } from 'react';
import { AccordionItem, Button, Checkbox, Text } from '@components';
import { useSearchParams } from 'react-router-dom';

interface FiltersProps {}
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

  return initialValue as Record<string, boolean>;
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

const isOpenOnInit = (initialValue: Record<string, boolean>) => Object.values(initialValue).includes(true);

const Filters = ({ className }: FiltersProps & React.HTMLAttributes<HTMLDivElement>) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getInitialSearchParams = createInitialValueFn(searchParams);

  const sizesIV = getInitialSearchParams(sizes);
  const stocksIV = getInitialSearchParams(stocks);
  const colorsIV = getInitialSearchParams(colors);

  console.log(
    Object.entries(colorsIV)
      .filter(([, isOn]) => isOn)
      .map(([filterValue]) => colors.colors.find((color) => color.value === filterValue))
  );

  function handleFilterChange(e: React.FormEvent<HTMLFormElement>) {
    const { name, checked, value } = e.target as HTMLInputElement;

    if (checked) {
      searchParams.append(name, value);
    }

    if (!checked && searchParams.has(name, value)) {
      searchParams.delete(name, value);
    }

    setSearchParams(searchParams);
  }

  const clearSearchParams = () => {
    setSearchParams(new URLSearchParams());
  };

  return (
    <form className={className} onChange={handleFilterChange}>
      <Text variant="h3" className="mb-4">
        Filters
      </Text>

      <div className="flex justify-between">
        <Button type="button" variant="text" onClick={clearSearchParams}>
          Clear Filter
        </Button>
        <Button>Applied Filters</Button>
      </div>

      <AccordionItem title="Sort By" initialState={isOpenOnInit(stocksIV)}>
        <CheckboxRegister filter={stocks} initialValue={stocksIV} />
      </AccordionItem>

      <AccordionItem title="Color" initialState={isOpenOnInit(colorsIV)}>
        <CheckboxRegister filter={colors} initialValue={colorsIV} />
      </AccordionItem>

      <AccordionItem title="Size" initialState={isOpenOnInit(sizesIV)}>
        <CheckboxRegister filter={sizes} initialValue={sizesIV} />
      </AccordionItem>
    </form>
  );
};

export default Filters;
