import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Posts } from './pages/posts/index.jsx';
import { Root } from './components/root';
import { DetailPost } from './pages/posts/detail/index.jsx';
import { EditPost } from './pages/posts/edit/index.jsx';
import { AddPost } from './pages/posts/add/index.jsx';
import { Auth } from './pages/auth/index.jsx';
import { Registration } from './pages/registration/index.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    childrens: [
      {
        path: "posts",
        element: <Posts />
      },
      {
        path: 'posts/:id',
        element: <DetailPost />
      },
      {
        path: 'posts/:id/edit',
        element: <EditPost />,
      },
      {
        path: 'posts/add',
        element: <AddPost />,
      },
      {
        path: 'auth',
        element: <Auth />,
      },
      {
        path: 'registration',
        element: <Registration />,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();