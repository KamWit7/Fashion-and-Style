import { API } from '@api';
import { ActionFunction } from 'react-router-dom';

export default (async ({ request }) => {
  const formData = await request.formData();

  return await API.login({
    email: formData.get('email'),
    password: formData.get('password'),
  });
}) satisfies ActionFunction;
