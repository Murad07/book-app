import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/booksSlice"; // Create this action

const Navbar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state

  const handleSearch = () => {
    dispatch(setSearchQuery(search));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-semibold">
          <span className="text-2xl">Bookstore</span>
        </div>
        <div className="flex items-center space-x-4 md:hidden">
          {" "}
          {/* Hide on medium and larger screens */}
          <button className="text-white" onClick={toggleMobileMenu}>
            ☰ {/* Mobile menu icon */}
          </button>
        </div>
        <div
          className={`flex items-center space-x-4 md:space-x-0 md:flex md:items-center ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          {" "}
          {/* Show on medium and larger screens */}
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
      </div>
    </nav>
  );
};

export default Navbar;
