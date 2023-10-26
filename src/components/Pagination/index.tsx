import usePagination, { DOTS } from './usePagination';
import { PaginationProps } from './types';
import { useSearchParams } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import { BsChevronDoubleLeft } from 'react-icons/bs';
import { cn } from '@utils/cn';

const Pagination = (props: PaginationProps) => {
  const { paginationRange, totalPageCount } = usePagination(props);

  const [searchParams, setSearchParams] = useSearchParams();

  const nextPage = () => {
    const currentPage = searchParams.get('page');

    const outOfRightRange = !currentPage || JSON.parse(currentPage) > totalPageCount;

    if (outOfRightRange) {
      searchParams.set('page', JSON.stringify(totalPageCount));
    } else {
      searchParams.set('page', JSON.stringify(Number(currentPage) + 1));
    }

    setSearchParams(searchParams);
  };

  const previousPage = () => {
    const currentPage = searchParams.get('page');

    const outOfLeftRange = !currentPage || JSON.parse(currentPage) - 1 < 1;

    if (outOfLeftRange) {
      searchParams.set('page', JSON.stringify(1));
    } else {
      searchParams.set('page', JSON.stringify(Number(currentPage) - 1));
    }

    setSearchParams(searchParams);
  };

  const toPage = (page: string | number) => {
    if (typeof page === 'string') {
      return;
    }

    searchParams.set('page', JSON.stringify(page));
    setSearchParams(searchParams);
  };

  const toLastPage = () => toPage(totalPageCount);
  const toFirstPage = () => toPage(1);

  return (
    <ul className="mx-auto mb-10 flex max-w-[300px] flex-row items-center justify-between">
      <li className="flex cursor-pointer flex-row">
        <BsChevronDoubleLeft size={24} onClick={toFirstPage} />
        <AiOutlineLeft size={24} onClick={previousPage} />
      </li>

      {paginationRange?.map((page) => {
        return (
          <li
            key={page}
            className={cn(
              page === props.currentPage ? 'bg-slate-400' : 'bg-transparent',
              page === DOTS ? 'cursor-default' : 'cursor-pointer'
            )}
            onClick={() => toPage(page)}
          >
            {page}
          </li>
        );
      })}

      <li className="flex cursor-pointer flex-row">
        <AiOutlineLeft className="rotate-180" size={24} onClick={nextPage} />
        <BsChevronDoubleLeft className="rotate-180" size={24} onClick={toLastPage} />
      </li>
    </ul>
  );
};

export default Pagination;
