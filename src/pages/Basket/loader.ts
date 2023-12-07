import { API } from '@api';

import { LoaderFunction, defer } from 'react-router-dom';

export default (() => {
  return defer({ cart: API.cart.get() }) as unknown as { cart: Promise<API.CardType> };
}) satisfies LoaderFunction;
