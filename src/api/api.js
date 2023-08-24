import axios from "axios";

const baseURL = "http://localhost/book-app-api/api"; // Replace with your actual API URL

const instance = axios.create({
  baseURL,
});

export const fetchBooks = () => instance.get("/get_books.php");
export const createBook = (newBookData) =>
  instance.post("/add_book.php", newBookData);
// export const updateBook = (bookId, updatedBookData) =>
//   instance.put(`/books/${bookId}`, updatedBookData);
// export const deleteBook = (bookId) => instance.delete(`/books/${bookId}`);
