import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      name: "The Last Thing He Told Me: A Novel",
      author: "Laura",
      thumbnail:
        "https://m.media-amazon.com/images/P/1501171348.01._SCLZZZZZZZ_SX500_.jpg",
      price: 13.99,
      rating: 2,
      featured: true,
      id: 1,
    },
    {
      name: "The Body Keeps the Score: Brain, Mind, and Body",
      author: "Parker",
      thumbnail:
        "https://m.media-amazon.com/images/I/41T-XHe8-EL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      price: 10.2,
      rating: 4,
      featured: true,
      id: 2,
    },
    {
      name: "Workbook for The Body Keeps The Score",
      author: "Genie Reads",
      thumbnail:
        "https://m.media-amazon.com/images/I/4172OieY0hS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      price: 15.33,
      rating: 3,
      featured: false,
      id: 3,
    },
    {
      name: "The Last Thing He Told Me: A Novel",
      author: "Laura",
      thumbnail:
        "https://m.media-amazon.com/images/P/1501171348.01._SCLZZZZZZZ_SX500_.jpg",
      price: 14.99,
      rating: 5,
      featured: false,
      id: 4,
    },
    {
      name: "The Body Keeps the Score: Brain, Mind, and Body",
      author: "Parker",
      thumbnail:
        "https://m.media-amazon.com/images/I/41T-XHe8-EL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      price: 10.2,
      rating: 4,
      featured: true,
      id: 5,
    },
    {
      name: "Workbook for Keeps The Score",
      author: "Reads",
      thumbnail:
        "https://m.media-amazon.com/images/I/4172OieY0hS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      price: 15.33,
      rating: 3,
      featured: false,
      id: 6,
    },
  ], // Populate with book data
  searchQuery: "", // For search functionality
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    addBook: (state, action) => {
      // Generate a unique ID for the new book
      const newId =
        state.books.length > 0 ? state.books[state.books.length - 1].id + 1 : 1;
      const newBook = { ...action.payload, id: newId };
      state.books.push(newBook);
    },
    updateBook: (state, action) => {
      const updatedBook = action.payload;
      const index = state.books.findIndex((book) => book.id === updatedBook.id);
      if (index !== -1) {
        state.books[index] = updatedBook;
      }
    },
    deleteBook: (state, action) => {
      const bookIdToDelete = action.payload;
      state.books = state.books.filter((book) => book.id !== bookIdToDelete);
    },
  },
});

export const { setSearchQuery, addBook, updateBook, deleteBook } =
  booksSlice.actions;
export default booksSlice.reducer;
