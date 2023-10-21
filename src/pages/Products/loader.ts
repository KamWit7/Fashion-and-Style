import { LoaderFunction } from 'react-router-dom';
import { API } from '@api';

export default (async ({ request }) => {
  const searchParams = new URLSearchParams(new URL(request.url).search);

  const data = await API.getProducts(searchParams);

  return data;
}) satisfies LoaderFunction;
