import React from 'react';
import { AccordionItem, Text } from '@components';
import { useSearchParams } from 'react-router-dom';
import { createCheckboxState, getActiveFilters, isOpenOnInit } from '@components/Filters/utils';
import { colors, sizes, stocks } from '@components/Filters/consts';
import CheckboxRegister from '@components/Filters/components/CheckboxRegister';
import { FilterBtnType, FiltersType } from '@components/Filters/types';
import { isEmpty } from '@utils/isEmpty';
import FiltersButton from '@components/Filters/components/FiltersButton';
import UsedFilters from '@components/Filters/components/UsedFilters';

const Filters = ({ className, isMobile, setIsOpen }: FiltersType & React.HTMLAttributes<HTMLDivElement>) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getFilterState = createCheckboxState(searchParams);

  const sizesState = getFilterState(sizes);
  const stockState = getFilterState(stocks);
  const colorsState = getFilterState(colors);

  const appliedFilters = getActiveFilters({ ...sizesState, ...stockState, ...colorsState }) as FilterBtnType[];

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

  const clearSearchParams = (name?: string, value?: string) => {
    if (!name || !value) {
      setSearchParams(new URLSearchParams());
      return;
    }

    searchParams.delete(name, value);
    setSearchParams(searchParams);
  };

  const filters = [
    { title: 'Sort By', state: stockState, filter: stocks },
    { title: 'Color', state: colorsState, filter: colors },
    { title: 'Size', state: sizesState, filter: sizes },
  ];

  const filtersElements = filters.map((f, idx) => (
    <AccordionItem key={`${f.title}_${idx}`} title={f.title} initialState={isOpenOnInit(f.state)}>
      <CheckboxRegister filter={f.filter} initialValue={f.state} />
    </AccordionItem>
  ));

  return (
    <form className={className} onChange={handleFilterChange} method="dialog">
      {!isMobile ? (
        <>
          <Text variant="h3" className="mb-4 hidden md:inline-block">
            Filters
          </Text>

          {!isEmpty(appliedFilters) && (
            <UsedFilters appliedFilters={appliedFilters} clearSearchParams={clearSearchParams} />
          )}

          <div className="hidden flex-col gap-4 md:flex">{filtersElements}</div>
        </>
      ) : (
        <>
          {filtersElements}
          <FiltersButton
            title="Close Modal"
            className="flex justify-between md:hidden"
            onClear={clearSearchParams}
            onClose={setIsOpen.of}
          />
        </>
      )}
    </form>
  );
};

export default Filters;
