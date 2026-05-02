'use client'
import BookCard from "@/Component/BookCard";
import React, { useEffect, useState } from "react";

const AllBookPage = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/data.json" , {cache:'no-store'});
      const data = await res.json();

      setBooks(data);
      setFilter(data);
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const result = books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase()));
    setFilter(result)
  }

  return (
    <div className="container mx-auto flex flex-col min-h-screen  justify-center ">

      <div className="text-center w-full max-w-2xl px-4 flex flex-col justify-center mx-auto my-5">

        <h1 className="text-4xl font-bold my-5 text-gray-800">
          Search By Book Title
        </h1>

        <div className="flex items-center gap-2">

          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Type book name..."
            className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-semibold "
          />

          <button
            onClick={handleSearch}
            className="rounded-xl bg-blue-600 px-6 py-4 text-white font-semibold hover:bg-blue-700 transition">
            Search
          </button>

        </div>

      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 conatiner mx-auto">
        {
          filter.length > 0 ? (
            filter.map((book) => (
              <BookCard book={book} key={book.id} />
            ))
          ) : (
            <p className="text-center mt-10 col-span-full text-red-500 font-bold text-xl">
              No data found
            </p>
          )
        }
      </div>

    </div>
  );
};

export default AllBookPage;