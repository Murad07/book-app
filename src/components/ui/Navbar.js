import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/booksSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = () => {
    dispatch(setSearchQuery(search));
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-semibold">
          <span className="text-2xl">Bookstore</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {/* Normal Nav Links */}
          <button className="text-white">Home</button>
          <button className="text-white">Add Book</button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-2 py-1 rounded-md"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
            >
              Search
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2">
          <button className="block text-white mb-2">Home</button>
          <button className="block text-white mb-2">Add Book</button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-2 py-1 rounded-md"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
