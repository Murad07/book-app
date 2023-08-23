import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../../redux/booksSlice";
import { useNavigate } from "react-router-dom";

const EditBookForm = ({ book }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(book);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert string values to numbers
    const numericPrice = parseFloat(formData.price);
    const numericRating = parseInt(formData.rating);

    // Dispatch the action with numeric values
    dispatch(
      updateBook({
        ...formData,
        price: numericPrice,
        rating: numericRating,
      })
    );

    navigate("/");
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
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
            className="w-full px-4 py-2 rounded-md border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
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
            className="w-full px-4 py-2 rounded-md border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
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
            className="w-full px-4 py-2 rounded-md border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
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
            className="w-full px-4 py-2 rounded-md border-blue-300"
            step="0.01"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
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
            className="w-full px-4 py-2 rounded-md border-blue-300"
            min="1"
            max="5"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-1"
          >
            Featured
          </label>
          <input
            type="text"
            id="featured"
            value={formData.featured}
            onChange={(e) =>
              setFormData({ ...formData, featured: e.target.value })
            }
            className="w-full px-4 py-2 rounded-md border-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBookForm;
