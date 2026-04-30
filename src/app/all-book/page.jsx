import BookCard from "@/Component/BookCard";
import React from "react";

const AllBookPage = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const books = await res.json();

  return (
    <div className="flex flex-col min-h-screen  justify-center bg-gray-100">
      
      <div className="text-center w-full max-w-2xl px-4 flex flex-col justify-center mx-auto my-5">

        <h1 className="text-4xl font-bold my-5 text-gray-800">
         Search By Book Title
        </h1>

        <div className="flex items-center gap-2">
          
          <input
            type="text"
            placeholder="Type book name..."
            className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-semibold "
          />

          <button className="rounded-xl bg-blue-600 px-6 py-4 text-white font-semibold hover:bg-blue-700 transition">
            Search
          </button>

        </div>

      </div>
            <div className="grid grid-cols-4 gap-4 conatiner mx-auto">
                {
                    books.map(book=> <BookCard book={book} key={book.id}></BookCard>)
                }
            </div>
    </div>
  );
};

export default AllBookPage;