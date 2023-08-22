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
      id: 2,
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
  },
});

export const { setSearchQuery } = booksSlice.actions;
export default booksSlice.reducer;
