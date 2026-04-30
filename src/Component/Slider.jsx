"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const books = [
  {
    title: "The Alchemist",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200",
  },
  {
    title: "Atomic Habits",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200",
  },
  {
    title: "Rich Dad Poor Dad",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  // AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === books.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? books.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === books.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-6 overflow-hidden rounded-2xl shadow-2xl">
      {/* Image */}
      <div className="relative h-105 w-full">
        <Image
          src={books[index].image}
          alt={books[index].title}
          fill
          unoptimized
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
          <h2 className="text-white text-2xl md:text-4xl font-bold">
            {books[index].title}
          </h2>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black px-3 py-2 rounded-full"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black px-3 py-2 rounded-full"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {books.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full cursor-pointer transition-all ${
              i === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;