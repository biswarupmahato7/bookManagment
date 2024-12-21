import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    onSearch(search); // Pass the search query to the parent component
  };

  return (
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
  );
};

export default Search;
