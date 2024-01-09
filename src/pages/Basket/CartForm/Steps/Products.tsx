import { Await, useLoaderData } from 'react-router-dom';
import { LoaderData } from '@src/types/loader';
import { Suspense } from 'react';
import { useCart } from '@src/context/CardContext/useCart';
import { isEmpty } from '@utils/isEmpty';

import { HandleStepsType } from '..';
import { BasketLoader } from '@pages/index';
import ProductDetails from '@pages/Basket/components/ProductDetails';
import Button from '@components/Button';

const Products = ({ handleSteps }: HandleStepsType) => {
  const [handleNextStep, handlePreviousStep] = handleSteps;
  const loaderCart = useLoaderData() as LoaderData<typeof BasketLoader>;
  const { cart } = useCart();

  return (
    <div className="container mx-auto">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">Order Summary</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <Suspense fallback={<tr>Products...</tr>}>
            <Await resolve={loaderCart.cart}>
              {(loaderCart: API.CardType | null) => {
                const c = isEmpty(cart) && loaderCart ? loaderCart.items : cart;

                return c.map((item, idx) => (
                  <tr className="border-b bg-gray-100 text-center" key={idx}>
                    <ProductDetails {...item} />
                  </tr>
                ));
              }}
            </Await>
          </Suspense>
        </tbody>
      </table>
      <div>
        <Button onClick={handleNextStep} className="mt-8">
          Next
        </Button>

        <Button onClick={handlePreviousStep} className="mt-8">
          Previous
        </Button>
      </div>
    </div>
  );
};

export default Products;
