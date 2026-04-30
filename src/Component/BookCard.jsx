'use client'
import { Card } from "@heroui/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const BookCard = ({ book }) => {
  const router = useRouter();

  // demo login state (real app e auth thakbe)
  const [isLoggedIn] = useState(false);

  const handleBorrow = () => {
    if (!isLoggedIn) {
      router.push("/login"); 
    } else {
      router.push(`/all-book/${book.id}`); 
    }
  };

  return (
    <Card className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="h-72 overflow-hidden">
        <img
          src={book.image_url}
          alt={book.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <h1 className="text-xl font-bold text-gray-800">
          {book.title}
        </h1>

        <p className="text-sm text-gray-500">
          by {book.author || "Unknown Author"}
        </p>

        {/* Button */}
        <button
          onClick={handleBorrow}
          className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-2 font-medium text-white transition hover:from-indigo-700 hover:to-purple-700"
        >
          View Details
        </button>

      </div>
    </Card>
  );
};

export default BookCard;