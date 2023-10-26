import { API } from '@api';

import { LoaderFunction, defer } from 'react-router-dom';

export default (() => {
  const productsData = API.getProducts({ bestseller: true });
  const modiweeksData = API.getModiweek();

  const loaderData = { productsData: productsData, modiweeks: modiweeksData };

  return defer(loaderData) as unknown as typeof loaderData;
}) satisfies LoaderFunction;
