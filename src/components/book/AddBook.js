import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, addBookAsync } from "../../redux/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: 0,
    rating: 0,
    featured: 0,
  });

  const handleCheckboxChange = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      featured: parseInt(prevFormData.featured) == 0 ? 1 : 0,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert string values to numbers
    const numericPrice = parseFloat(formData.price);
    const numericRating = parseInt(formData.rating);
    const numericFeatured = parseInt(formData.featured);

    // Dispatch the action with numeric values
    dispatch(
      addBookAsync({
        ...formData,
        price: numericPrice,
        rating: numericRating,
        featured: numericFeatured,
      })
    );

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded border shadow-md w-full sm:w-96"
      >
        <h2 className="text-2xl font-semibold mb-4">Add Book</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 font-semibold mb-1"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="thumbnail"
            className="block text-gray-700 font-semibold mb-1"
          >
            Thumbnail
          </label>
          <input
            type="text"
            id="thumbnail"
            value={formData.thumbnail}
            onChange={(e) =>
              setFormData({ ...formData, thumbnail: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex mb-4">
          <div className="w-1/3 mr-2">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-1"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              step="0.01"
              required
            />
          </div>

          <div className="w-1/3 mr-2">
            <label
              htmlFor="rating"
              className="block text-gray-700 font-semibold mb-1"
            >
              Rating
            </label>
            <input
              type="number"
              id="rating"
              value={formData.rating}
              onChange={(e) =>
                setFormData({ ...formData, rating: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              min="1"
              max="5"
              required
            />
          </div>

          <div className="w-1/3 mr-2">
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="featured">Featured</label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
