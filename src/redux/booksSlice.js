import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBooks, createBook } from "../api/api";

// Get books from backend
export const fetchBooksAsync = createAsyncThunk("/fetchBooks", async () => {
  const response = await fetchBooks();
  return response.data;
});

// Add new book throw backend api to db
export const addBookAsync = createAsyncThunk(
  "/createBook",
  async (bookData) => {
    const response = await createBook(bookData);
    return response.data;
  }
);

const initialState = {
  books: [], // Populate with book data
  searchQuery: "", // For search functionality
};

const booksSlice = createSlice({
  extraReducers: (builder) => {
    // ... other reducers ...

    builder
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        state.books = action.payload;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.books.push(action.payload);
      });
  },

  name: "books",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
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

export const { setSearchQuery, updateBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
