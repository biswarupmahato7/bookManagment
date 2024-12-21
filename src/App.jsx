import React, { useState } from "react";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";
import { books } from "./utils/mockData";
import BookList from "./components/BookList";

const App = () => {
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  const location = useLocation(); // Get current route

  const handleSearch = () => {
    const finalBooks = books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredBooks(finalBooks);
  };

  return (
    <>
      <Header />
      {/* Conditionally render search bar for specific routes */}
      {(location.pathname === "/" || location.pathname === "/about") && (
        <div className="flex items-center justify-center gap-11 bg-blue-300 h-20">
          <h2>Search Books</h2>
          <input
            type="text"
            placeholder="Search..."
            className="h-1/2 font-thin text-black text-xl p-1 bg-gray-400 rounded-md shadow-md shadow-black"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-green-400 p-2 border border-black rounded-md text-black font-bold hover:shadow-md hover:shadow-black"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      )}
      {/* BookList rendered only for the root route */}
      {location.pathname === "/" && <BookList booksData={filteredBooks} />}
      <Outlet />
    </>
  );
};

export default App;
