import React from "react";
import BookList from "./components/BookList";
import { books } from "./utils/mockData";
import { useState } from "react";


const App = () => {
  const [search, setSearch] = useState("")
  const [filteredBooks, setfilteredBooks] = useState(books)


  function handleSearch(){
    console.log(search)
    const finalBooks = books.filter((book)=>book.title.toLowerCase().includes(search.toLowerCase()))
    console.log(finalBooks)
    setfilteredBooks(finalBooks)

  }
  return (
    <>
    <div className="bg-black">
    <div className="flex items-center justify-center  gap-11 bg-blue-300 h-20">
        <h2>Search Books</h2>
        <input type="text" name="" placeholder="Search..." className="h-1/2 font-thin text-black text-xl p-1 bg-gray-400 rounded-md shadow-md shadow-black"
        onChange={(e)=>setSearch(e.target.value)}
        
        />

        <button className="bg-green-400 p-2 border border-black rounded-md text-black font-bold hover:shadow-md hover:shadow-black"
        onClick={handleSearch}
         
        
        >
          Search
        </button>
      </div>
      <div className="">
        <BookList booksData={filteredBooks} />
      </div>

    </div>
 
    </>
  );
};

export default App;
