import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Messages from './components/Admin/Messages';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/admin/messages',
      element: <Messages />,
    }
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    },
  }
); 