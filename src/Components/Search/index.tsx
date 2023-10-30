import { cn } from '@utils/cn';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';

const Search = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('query') ?? '');

  const handleChangeQuery = (search: string) => {
    searchParams.set('query', search);

    setSearchParams(searchParams);
  };

  const handleClear = () => {
    if (!searchParams.has('query') && !search) {
      console.log('here');

      return;
    }

    setSearch('');
    searchParams.delete('query');
    setSearchParams(searchParams);
  };

  const validate = (fn: (search: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;

    setSearch(search);

    if (!search) {
      return handleClear();
    }

    if (search.length < 3) {
      return;
    }

    return fn(search);
  };

  const register = (name: string) => {
    return { name, value: search };
  };

  return (
    <div className="relative mt-6 cursor-pointer gap-2 text-gray">
      <input
        type="input"
        className={cn('w-full px-8 py-2 outline-none transition-colors valid:text-black', 'peer')}
        placeholder="Search"
        minLength={3}
        required
        onChange={validate(handleChangeQuery)}
        {...register('query')}
        {...props}
      />
      {JSON.stringify(search)}
      <BsSearch
        size={24}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-gray transition-colors peer-valid:text-black"
      />
      <AiOutlinePlus
        size={24}
        name="delete"
        onClick={handleClear}
        className={cn(
          'absolute right-0 top-1/2 -translate-y-1/2  transition-colors peer-valid:text-black',
          'rotate-45'
        )}
      />
      <div className="absolute inset-x-0 bottom-0 h-1 w-full border-b transition-colors peer-valid:border-black" />
    </div>
  );
};

export default Search;
