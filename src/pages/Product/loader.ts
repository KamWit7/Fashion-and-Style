import { LoaderFunction, defer } from 'react-router-dom';
import { API } from '@api';

export default (({ request, params }) => {
  console.log(params, request);

  const { id = '' } = params;

  const data = API.getProductById(id);

  const loaderData = { productData: data };

  return defer(loaderData) as unknown as typeof loaderData;
}) satisfies LoaderFunction;
