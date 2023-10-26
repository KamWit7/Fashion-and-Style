import { Accordion, Button, Center, ProductsSlider, Section, Text } from '@components';
import { useParams } from 'react-router-dom';

type PropertyType = { title: string; about: string };

type DescriptionType = { title: string; property: PropertyType[] }[];

const productDescriptions: DescriptionType = [
  {
    title: 'Fitting',
    property: [{ title: 'Fitting', about: 'Waiting...' }],
  },
  {
    title: 'Fabric & Care',
    property: [
      { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
      {
        title: 'Care',
        about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
      },
    ],
  },
  {
    title: 'Product Detail',
    property: [{ title: 'Details', about: 'Waiting...' }],
  },
  {
    title: 'Shipping And Return',
    property: [
      { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
      {
        title: 'Returns',
        about:
          'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
      },
    ],
  },
];

export const Product = () => {
  const { id } = useParams();

  return (
    <Center>
      Products:{id}
      <div className="flex gap-6">
        <div className="flex-1">
          <div>ImageWIthScorll</div>
          {productDescriptions.map((des) => (
            <Accordion key={des.title} variant="outline" title={des.title} className="border-b-0">
              <ul>
                {des.property.map((p) => (
                  <li key={p.title}>
                    <Text variant="b1">{p.title}:</Text>
                    <Text variant="b1">{p.about}</Text>
                  </li>
                ))}
              </ul>
            </Accordion>
          ))}
        </div>

        <Section title="Wrap Top" className="mt-0 flex-1">
          <Text variant="b1" className="mt-8">
            Versatile and universally flattering, our wrap blouse can be tied, draped, snapped and wrapped multiple
            ways.
          </Text>

          <div className="mt-6">
            <Text variant="b1">Colors</Text>
            <div>O O</div>
          </div>

          <Button type="button" className="mt-6 w-full">
            Add To Cart
          </Button>

          <div className="mt-8">
            <div>
              <Text variant="b1">Easy Return</Text>
            </div>
            <div>
              <Text variant="b1">Add To Wish List</Text>
              
            </div>
          </div>
        </Section>
      </div>
      <Section title="You May Also Like">
        <ProductsSlider
          products={{
            models: [],
            modelName: '',
          }}
          pagination={{
            totalCount: 0,
            pageSize: 0,
            currentPage: 0,
          }}
        />
      </Section>
    </Center>
  );
};

export default Product;
