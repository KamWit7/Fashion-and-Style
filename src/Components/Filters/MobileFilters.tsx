import { Button, Drawer, Filters, Text } from '@components';
import { MdTune } from 'react-icons/md';
import useToggle from '@utils/useToggle';

const MobileFilters = () => {
  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <>
      <Drawer isOpen={isOpen} onClose={setIsOpen.of} title="Filters" className="p-4">
        <Filters className="mb-12 flex flex-grow flex-col gap-4 md:basis-1/3" setIsOpen={setIsOpen} isMobile />
      </Drawer>

      <Button
        type="button"
        variant="text"
        iconBefore={<MdTune size={16} />}
        className="mx-auto my-4 min-w-[100px] text-black md:hidden"
        onClick={setIsOpen.toggle}
      >
        <Text variant="b1">Filter</Text>
      </Button>
    </>
  );
};

export default MobileFilters;
