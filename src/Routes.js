import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BookList from "./components/book/BookList";
import App from "./App";
import AddBook from "./components/book/AddBook";
import EditBookPage from "./components/book/EditBookPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <BookList />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/edit/:bookId",
        element: <EditBookPage />,
      },
    ],
  },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]);

export default Routes;
