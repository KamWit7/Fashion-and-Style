import AccordionItem from '@components/Accordion/AccordionItem';
import { Center, Checkbox } from '@components/index';

const Products = () => {
  return (
    <Center>
      <div>Search</div>
      fitry - zmieniają mi Paramsy w
      <div className="flex gap-6">
        <div className="basis-1/3">
          <AccordionItem title="Sort By">
            <Checkbox label="In Stock" />
            <Checkbox label="Out of Stock" />
          </AccordionItem>

          <AccordionItem title="Collection">
            <Checkbox label="In Stock" />
            <Checkbox label="Out of Stock" />
          </AccordionItem>

          <AccordionItem title="Size">
            <Checkbox label="XS" />
            <Checkbox label="S" />
            <Checkbox label="M" />
            <Checkbox label="L" />
            <Checkbox label="XL" />
          </AccordionItem>
        </div>
        <div className="basis-2/3">
          <div>item counter: 10</div>

          <div className="flex flex-wrap items-stretch justify-center gap-6">
            <div className="flex-1">a</div>
            <div className="flex-1">b</div>
          </div>
        </div>
      </div>
    </Center>
  );
};

export default Products;
