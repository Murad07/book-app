import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BookList from "./components/book/BookList";
import App from "./App";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <BookList />,
      },
    ],
  },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]);

export default Routes;
