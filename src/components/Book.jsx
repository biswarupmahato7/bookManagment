import React from "react";

const Book = (props) => {
  return (
    <>
      <div className="flex justify-evenly items-center border-2 rounded-lg border-gray-500 m-3 w-96 h-96 transition-transform hover:-translate-y-1.5 hover:shadow-xl
        hover:shadow-blue-400 "
      >
        <img
          src={props.bookDetails.coverImage}
          alt=""
          width="200px"
          height="200px"
          className=""
        />
        <div className="p-2 m-1">
          <h2 className="font-bold text-white"><span className="text-red-700">Author: </span>{props.bookDetails.author}</h2>
          <p className="font-thin text-white"> <span className="text-green-700">Title: </span>{props.bookDetails.title}</p>
          <p className="m-1 text-green-400"><span className="text-yellow-300">Desc: </span>{props.bookDetails.description}</p>
          <p className="text-white m-1"><span className="text-yellow-300">Date:</span>{props.bookDetails.publishDate}</p>
        </div>
      </div>
    </>
  );
};

export default Book;