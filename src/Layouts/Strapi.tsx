import { Outlet } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { API } from '@api';
import { useState, useEffect } from 'react';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_STRIPE_KEY);

const Strapi = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const getSession = async () => {
      const data = await API.payments.get();
      setClientSecret(data.clientSecret);
    };
    getSession();
  }, []);

  if (!clientSecret) return <div>Loading...</div>;

  const options = {
    clientSecret,
    // Fully customizable with appearance API.
    appearance: {
      theme: 'stripe',
    } as const,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <Outlet />
    </Elements>
  );
};

export default Strapi;
