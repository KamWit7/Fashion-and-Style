import { createBrowserRouter } from 'react-router-dom';
import * as Layouts from '@layouts/index';
import * as Pages from '@pages';
import { AuthProvider } from '@src/context/AuthContext';

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
        <Layouts.Main />
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        element: <Pages.Landing />,
        loader: Pages.LandingLoader,
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

      {
        //ten
        element: <Layouts.SignIn />,
        children: [
          { index: true, path: 'login', element: <Pages.Login />, action: Pages.LoginAction },
          { path: 'register', element: <Pages.Register />, action: Pages.RegisterAction },
        ],
      },
      { ...protectedRoutes }, // i ten powinny działać przeciwstawinie 
      { path: '*', element: <Pages.NotFound /> },
    ],
  },
]);

export default router;
