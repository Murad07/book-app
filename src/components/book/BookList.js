import React from "react";
import { useSelector } from "react-redux";

const BookList = () => {
  const books = useSelector((state) => state.books.books); // Get books from Redux store

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {books?.map((book) => (
        <div key={book?.id} className="bg-white rounded-lg shadow-md p-4">
          <img
            src={book?.thumbnail}
            alt={book?.name}
            className="w-full h-auto mb-2"
          />
          <h2 className="text-lg font-semibold">{book?.name}</h2>
          <p className="text-gray-500">{book?.author}</p>
          {/* Display other book details */}
        </div>
      ))}
    </div>
  );
};

export default BookList;
