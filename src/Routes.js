import { createBrowserRouter } from 'react-router-dom';
import './index.css';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/error-page';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);
export default router;
