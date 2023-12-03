import { API } from '@api';
import { ActionFunction } from 'react-router-dom';

export default (async ({ request }) => {
  const formData = await request.formData();

  const data = await API.signup({
    name: formData.get('name'),
    surname: formData.get('surname'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  return data;
}) satisfies ActionFunction;
