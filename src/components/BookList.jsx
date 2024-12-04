import React from "react";
import Book from "./Book";

const BookList = (props) => {
  console.log(props);
  return (
    <>
      <div className="flex h-auto  flex-wrap gap-11 justify-center items-center">
        {props.booksData.map((data,idx) => (
          <Book key={idx} bookDetails={data} />
        ))}
      </div>
    </>
  );
};

export default BookList;
