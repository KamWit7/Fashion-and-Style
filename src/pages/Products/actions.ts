import { LoaderFunction } from 'react-router-dom';
import { API } from '@api';

export default (async ({ params, request }) => {
  console.log('here', { params, request });

  const searchParams = new URLSearchParams(await request.text());

  const data = await API.getProducts(searchParams);

  console.log('data', data);

  return data;
}) satisfies LoaderFunction;
