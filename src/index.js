import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from "./App"
import { PostsPage } from './pages/posts/index.jsx';
import { Root } from './components/root/index.jsx';
import { DetailPostPage } from './pages/posts/detail/index.jsx';
import { EditPostPage } from './pages/posts/edit/index.jsx';
import { AddPostPage } from './pages/posts/add/index.jsx';
import { AuthPage } from './pages/auth/index.jsx';
import { RegistrationPage } from './pages/registration/index.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import "./index.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "posts",
        element: <PostsPage />
      },
      {
        path: 'posts/:id',
        element: <DetailPostPage />
      },
      {
        path: 'posts/:id/edit',
        element: <EditPostPage />,
      },
      {
        path: 'posts/add',
        element: <AddPostPage />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
      },
      {
        path: 'registration',
        element: <RegistrationPage />,
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