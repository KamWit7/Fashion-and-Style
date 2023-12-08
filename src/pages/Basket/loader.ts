import { API } from '@api';

import { LoaderFunction, defer } from 'react-router-dom';

export default (() => {
  const cart = API.cart.get();

  return defer({ cart }) as unknown as { cart: Promise<API.CardType> | null };
}) satisfies LoaderFunction;
