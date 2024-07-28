import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import { store } from "./store";
import './index.css';

const router = createBrowserRouter([
  { path: "/", element: ( <App />) },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
)
