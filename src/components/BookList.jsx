import React from "react";
import Book from "./Book";
import { Link } from "react-router-dom";

const BookList = (props) => {
  console.log(props);
  return (
    <>
      <div className="flex h-auto flex-wrap gap-11 justify-center items-center bg-black">
        {props.booksData.map((data, idx) => (
          <Link to={`/book/${data.id}`} key={idx}>
            <Book bookDetails={data} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default BookList;
