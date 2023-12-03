import { API } from '@api';
import { ActionFunction, redirect } from 'react-router-dom';

export default (async ({ request }) => {
  const formData = await request.formData();

  await API.login({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  return redirect('/');
}) satisfies ActionFunction;
