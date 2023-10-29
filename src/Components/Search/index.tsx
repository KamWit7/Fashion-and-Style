import { cn } from '@utils/cn';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

const Search = ({
  handleClear,
  value,
  ...rest
}: { handleClear: () => void } & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="relative mt-6 cursor-pointer gap-2 text-gray">
      <input
        type="input"
        className={cn('w-full px-8 py-2 outline-none transition-colors valid:text-black', 'peer')}
        placeholder="Search"
        minLength={3}
        required
        value={value}
        name="name"
        {...rest}
      />
      <BsSearch
        size={24}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-gray transition-colors peer-valid:text-black"
      />
      <AiOutlinePlus
        size={24}
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
