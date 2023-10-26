import { LoaderFunction, defer } from 'react-router-dom';
import { API } from '@api';

export default (({ request }) => {
  const searchParams = new URLSearchParams(new URL(request.url).search);

  const data = API.getProducts(searchParams);

  const loaderData = { productsData: data };

  return defer(loaderData) as unknown as typeof loaderData;
}) satisfies LoaderFunction;
