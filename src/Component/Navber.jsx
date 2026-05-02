'use client';

import React, { useState } from 'react';
import { Link, Button } from '@heroui/react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const user = { name: 'Rakib Hasan' };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-linear-to-r from-blue-900 via-indigo-900 to-purple-900 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* Left Side */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Button */}
          <button
            className="text-2xl text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Logo */}
          <Link href="/" className="text-lg font-bold text-white">
            Book Shop
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <Link href="/" className="text-white">
              Home
            </Link>
          </li>

          <li>
            <Link href="/all-book" className="text-white">
              All Books
            </Link>
          </li>
        </ul>

        {/* Desktop Auth */}
        <div className="hidden items-center gap-3 md:flex">
          {!isLoggedIn ? (
            <Link href="/login" className="text-white">
              Login
            </Link>
          ) : (
            <>
              <span className="font-medium text-white">
                {user.name}
              </span>

              <Button color="danger" size="sm" onClick={handleLogout}>
                Logout
              </Button>
              <Link href="/profile">
                <div className="cursor-pointer">
                  <img
                    src='/profile.jpg'
                    alt="Profile"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-amber-100"
                  />
                </div>
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-indigo-950 md:hidden">
          <ul className="flex flex-col gap-4 p-4">

            <li>
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>

            <li>
              <Link href="/all-book" className="text-white">
                All Books
              </Link>
            </li>

            <li>
              <Link href="/profile" className="text-white">
                My Profile
              </Link>
            </li>

            <li className="border-t border-white/20 pt-4">
              {!isLoggedIn ? (
                <Link href="/login" className="text-white">
                  Login
                </Link>
              ) : (
                <div className="flex flex-col gap-2">
                  <span className="text-white">
                    {user.name}
                  </span>

                  <Button
                    color="danger"
                    size="sm"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;