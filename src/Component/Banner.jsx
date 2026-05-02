'use client';

import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <section
      className=" relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* gray overlay */}
      <div className="absolute inset-0 bg-gray-900/60"></div>

      <div className="relative z-10 max-w-3xl text-center">

        <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
          Find Your Next Read
        </h1>

        <p className="mb-8 text-lg text-gray-200 md:text-xl">
          Discover thousands of books from your favorite authors and explore your next adventure.
        </p>

        <marquee behavior="scroll" direction="left">
          📚 New Arrivals: Rich Dad Poor Dad | Atomic Habits | Harry Potter
          | 🎉 Membership-এ বিশেষ ছাড় চলছে!
        </marquee>

        <marquee behavior="scroll" direction="left">
          📚 নতুন বই এসেছে: রিচ ড্যাড পুওর ড্যাড | অ্যাটমিক হ্যাবিটস | হ্যারি পটার
          | 🎉 মেম্বারশিপে বিশেষ ছাড় চলছে!
        </marquee>

        <Link href="/all-books">
          <br />
          <button className="my-5 rounded-full bg-white px-8 py-3 text-lg font-semibold text-indigo-900 transition hover:bg-gray-200">
            Browse Now
          </button>
        </Link>

      </div>

    </section>
  );
};

export default Banner;