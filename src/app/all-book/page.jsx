'use client'

import BookCard from "@/Component/BookCard";
import React, { useEffect, useState } from "react";

const categories = ["All", "Story", "Tech", "Science"];

const AllBookPage = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://online-book-borrowing-platform-three.vercel.app/data.json",
        { cache: "no-store" }
      );

      const data = await res.json();

      setBooks(data);
      setFilter(data);
    };

    fetchData();
  }, []);

  const handleFilter = (category, searchText = search) => {
  let result = books;


  if (category !== "All") {
    result = result.filter(
      (book) =>
        book.category.toLowerCase() ===
        category.toLowerCase()
    );
  }

  if (searchText) {
    result = result.filter((book) =>
      book.title
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
  }

  setFilter(result);
};
  const handleSearch = () => {
    handleFilter(selectedCategory, search);
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);
    handleFilter(category);
  };

  return (
    <div className="container mx-auto min-h-screen px-4 py-6">

      <div className="flex flex-col gap-6 lg:flex-row">

        <div className="w-full rounded-3xl bg-white p-6 shadow-xl lg:w-72 h-fit">

          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            Categories
          </h2>

          <div className="space-y-3">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategory(category)}
                className={`w-full rounded-xl px-4 py-3 text-left font-medium transition ${
                  selectedCategory === category
                    ? "bg-linear-to-r from-indigo-500 to-purple-600 text-white"
                    : "bg-slate-100 text-gray-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}

          </div>
        </div>

        <div className="flex-1">

          <div className="mx-auto mb-8 w-full max-w-2xl">

            <h1 className="mb-5 text-center text-4xl font-bold text-gray-800">
              Search By Book Title
            </h1>

            <div className="flex items-center gap-2">

              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Type book name..."
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg font-semibold text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={handleSearch}
                className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Search
              </button>

            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">

            {filter.length > 0 ? (
              filter.map((book) => (
                <BookCard
                  book={book}
                  key={book.id}
                />
              ))
            ) : (
              <p className="col-span-full mt-10 text-center text-xl font-bold text-red-500">
                No data found
              </p>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBookPage;