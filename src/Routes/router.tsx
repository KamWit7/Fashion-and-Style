import { createBrowserRouter } from 'react-router-dom';
import * as Layouts from '@layouts';
import * as Pages from '@pages';

import './../server';

const protectedRoutes = {
  element: <Layouts.Auth />,
  children: [
    {
      path: 'profile',
      element: <Layouts.Profile />,
      children: [
        {
          element: <div>account</div>,
          path: 'account',
          children: [
            { index: true, element: <>shipping data</> },
            { path: 'shipping', element: <>shipping data</> },
          ],
        },
        {
          path: 'favorite',
          element: <Pages.Favorite />,
        },
        { path: 'saved', element: <div>Saved items</div> },
        { path: '', element: <div>Saved items</div> },
      ],
    },
  ],
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts.Main />,
    children: [
      {
        index: true,
        element: <Pages.Landing />,
        loader: Pages.LandingLoader,
      },

      {
        element: <Layouts.SignIn />,
        children: [
          { index: true, path: 'login', element: <Pages.Login /> },
          { path: 'register', element: <>a</> },
        ],
      },
      { path: 'basket', element: <Pages.Basket /> },
      {
        path: 'products',
        element: <Pages.Products />,
        loader: Pages.ProductsLoader,
      },
      {
        path: 'products/:id',
        element: <Pages.Product />,
        loader: Pages.ProductLoader,
      },
      { ...protectedRoutes },
      { path: '*', element: <Pages.NotFound /> },
    ],
  },
]);

export default router;
