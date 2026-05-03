'use client';

import React, { useState } from 'react';
import { Link, Button } from '@heroui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const isLoggedIn = !!session;
  const user = session?.user;

  const handleProfile = () => {
    if (!session) {
      toast.error("Please login first!");
      router.push("/login");
      return;
    }

    router.push("/profile");
  };

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-linear-to-r from-blue-900 via-indigo-900 to-purple-900 backdrop-blur-lg justify-between items-center">
      <header className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* Left Side */}
        <div className="flex items-center gap-4">

          <button
            className="text-2xl text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <Link href="/" className="text-lg font-bold text-white mt-4">
             <img
             width={240}
             height={240}
              src='/logo.png'>

             </img>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <Link href="/" className="text-white">Home</Link>
          </li>

          <li>
            <Link href="/all-book" className="text-white">All Books</Link>
          </li>

          <li>
            <button onClick={handleProfile} className="text-white cursor-pointer">
              Profile
            </button>
          </li>
        </ul>

        {/* Auth */}
        <div className="hidden items-center gap-3 md:flex">
          {!isLoggedIn ? (
            <Link href="/login" className="text-white">
              Login
            </Link>
          ) : (
            <>
              <span className="text-white font-medium">
                {user?.name}
              </span>

              <Button
               className={'text-white'}
                size="sm"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </header>

      {/* Mobile Menu (FIXED) */}
      {isMenuOpen && (
        <div className="bg-indigo-950 md:hidden">
          <ul className="flex flex-col gap-4 p-4">

            <li>
              <Link href="/" className="text-white">Home</Link>
            </li>

            <li>
              <Link href="/all-book" className="text-white">All Books</Link>
            </li>

            <li>
              <button onClick={handleProfile} className="text-white cursor-pointer">
                My Profile
              </button>
            </li>

            <li className="border-t border-white/20 pt-4">
              {!isLoggedIn ? (
                <Link href="/login" className="text-white">
                  Login
                </Link>
              ) : (
                <div className="flex flex-col gap-2">
                  <span className="text-white">
                    {user?.name}
                  </span>

                  <Button
                    className={'text-white'}
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