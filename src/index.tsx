import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App'
// import StartPage from './pages/startPage'
import IntroPage from './pages/IntroPage'
import './index.css'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      // errorElement: <ErrorPage />,
      // children: [
      //   {
      //     path: 'unsigned',
      //     element: <SignDocument />,
      //   },
      // ],
    },
    {
      path: 'intro',
      element: <IntroPage />,
    },
    // {
    //   path: '/start',
    //   element: <StartPage />,
    //   // errorElement: <ErrorPage />,
    // },
  ],
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
