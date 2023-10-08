import { createBrowserRouter } from 'react-router-dom'
import * as Layouts from '@src/Layouts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts.PageLayout />,
    children: [
      {
        index: true,
        element: <div>Elloo</div>,
      },
    ],
  },
])

export default router
