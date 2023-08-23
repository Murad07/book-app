import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BookList = () => {
  const books = useSelector((state) => state.books.books); // Get books from Redux store
  const searchQuery = useSelector((state) => state.books.searchQuery); // Get books from Redux store

  const [filter, setFilter] = useState("all"); // 'all' or 'featured'

  // Filter books based on the selected filter and search query
  const filteredBooks = books.filter((book) => {
    if (filter === "featured" && !book.featured) {
      return false;
    }
    if (
      searchQuery &&
      !book.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      <div className="col-span-full flex justify-end space-x-2 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full ${
            filter === "all" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("featured")}
          className={`px-4 py-2 rounded-full ${
            filter === "featured" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Featured
        </button>
      </div>
      {filteredBooks?.map((book) => (
        <div key={book?.id} className="bg-white rounded-lg shadow-md p-4">
          <img
            src={book?.thumbnail}
            alt={book?.name}
            className="w-full h-auto mb-2"
          />
          <h2 className="text-lg font-semibold">{book?.name}</h2>
          <p className="text-gray-400">
            by <span className="text-gray-500">{book?.author}</span> (Author)
          </p>

          <div className="flex items-center mt-2">
            <div className="flex">
              {/* Star Rating */}

              {[...Array(book.rating)].map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0l2.39 7.34h7.36L13.77 11.4l2.39 7.34L10 14.26l-6.16 4.48 2.39-7.34L0 7.34h7.36z" />
                </svg>
              ))}
            </div>
            {book.featured && (
              <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                Featured
              </span>
            )}
          </div>

          <p className="mt-2 text-gray-700">${book.price.toFixed(2)}</p>

          <Link to={`/edit/${book.id}`}>Edit</Link>
          {/* Display other book details */}
        </div>
      ))}
    </div>
  );
};

export default BookList;
