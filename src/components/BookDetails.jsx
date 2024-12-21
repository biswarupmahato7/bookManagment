import React from "react";
import { useParams } from "react-router-dom";
import { books } from "../utils/mockData";

const BookDetails = () => {
  const params = useParams();
  const book = books.filter((book) => book.id == params.id);
  console.log(book);

  return (
    <>
      <h2 className="text-white bg-gray-900">{`Book Details for Book with id ${params.id}`}</h2>
      <div className="bg-gray-900 h-auto w-screen flex justify-center items-center ">
        {book.map((book) => {
          return (
            <div className="p-2 m-1">
              <img src={book.coverImage} width="200px" height="200px"></img>
              <h2 className="font-bold text-white">
                <span className="text-red-700">Author: </span>
                {book.author}
              </h2>
              <p className="font-thin text-white">
                {" "}
                <span className="text-green-700">Title: </span>
                {book.title}
              </p>
              <p className="m-1 text-green-400">
                <span className="text-yellow-300">Desc: </span>
                {book.description}
              </p>
              <p className="text-white m-1">
                <span className="text-yellow-300">Date:</span>
                {book.publishDate}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BookDetails;
