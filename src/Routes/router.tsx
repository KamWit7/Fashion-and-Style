import { createBrowserRouter } from 'react-router-dom';
import * as Layouts from '@layouts/index';
import * as Pages from '@pages';
import { AuthProvider } from '@src/context/AuthContext';
import { CartProvider } from '@src/context/CardContext';

// import './../server';

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
    element: (
      <AuthProvider>
        <CartProvider>
          <Layouts.Main />
        </CartProvider>
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        element: <Pages.Landing />,
        loader: Pages.LandingLoader,
      },

      { path: 'basket', element: <Pages.Basket />, loader: Pages.BasketLoader },
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
      {
        element: <Layouts.SignIn />,
        children: [
          { path: 'login', element: <Pages.Login />, action: Pages.LoginAction },
          { path: 'register', element: <Pages.Register />, action: Pages.RegisterAction },
        ],
      },
      { path: '*', element: <Pages.NotFound /> },
    ],
  },
]);

export default router;
