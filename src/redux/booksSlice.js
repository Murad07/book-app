import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBooks, createBook, updateBook, deleteBook } from "../api/api";

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

export const updateBookAsync = createAsyncThunk(
  "/updateBook",
  async (updatedBookData) => {
    const response = await updateBook(updatedBookData);
    return response.data;
  }
);

export const deleteBookAsync = createAsyncThunk(
  "/deleteBook",
  async (bookId) => {
    await deleteBook(bookId);
    return bookId;
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
      })
      .addCase(updateBookAsync.fulfilled, (state, action) => {
        const { bookId, updatedBook } = action.payload;
        const index = state.books.findIndex((book) => book.id === bookId);
        if (index !== -1) {
          state.books[index] = updatedBook;
        }
      })
      .addCase(deleteBookAsync.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
      });
  },

  name: "books",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = booksSlice.actions;
export default booksSlice.reducer;
