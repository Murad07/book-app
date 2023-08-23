import React from "react";
import { useParams } from "react-router-dom";
import EditBookForm from "./EditBookForm";
import { useSelector } from "react-redux";

const EditBookPage = () => {
  const { bookId } = useParams(); // Get the bookId from URL params
  const book = useSelector((state) =>
    state.books.books.find((book) => book.id === parseInt(bookId))
  );

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <div>
      <h2>Edit Book</h2>
      <EditBookForm book={book} />
    </div>
  );
};

export default EditBookPage;
