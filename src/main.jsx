import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from 'react-router-dom';
import NotFound from './components/Auth/NotFound.jsx';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import SnapPage from './components/MainContent/SnapPage.jsx';
import ScanningImage from './components/MainContent/ScanningImage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/account/signin',
    element: <Login />,
  },
  {
    path: '/account/create',
    element: <Register />,
  },
  {
    path: '/snap',
    element: <SnapPage />,
  },
  {
    path: '/scanning',
    element: <ScanningImage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
