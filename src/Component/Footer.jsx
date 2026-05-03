'use client';

import Link from 'next/link';
import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 bg-linear-to-r from-blue-950 via-indigo-950 to-purple-950 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">Book Shop</h2>

          <p className="mt-3 text-sm text-gray-300">
            Discover your next favorite book. Read, explore, and enjoy endless stories.
          </p>

          {/* Social Icons */}
          <div className="mt-5 flex items-center gap-4">

            <Link
              href="https://facebook.com"
              target="_blank"
              className="rounded-full bg-white/10 p-3 transition hover:bg-blue-600"
            >
              <FaFacebookF size={18} />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              className="rounded-full bg-white/10 p-3 transition hover:bg-pink-500"
            >
              <FaInstagram size={18} />
            </Link>

            <Link
              href="https://twitter.com"
              target="_blank"
              className="rounded-full bg-white/10 p-3 transition hover:bg-sky-500"
            >
              <FaTwitter size={18} />
            </Link>

            <Link
              href="https://github.com"
              target="_blank"
              className="rounded-full bg-white/10 p-3 transition hover:bg-gray-700"
            >
              <FaGithub size={18} />
            </Link>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link href="/all-book" className="hover:text-white">
                All Books
              </Link>
            </li>

            <li>
              <Link href="/profile" className="hover:text-white">
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact</h3>

          <p className="text-sm text-gray-300">
            Email: support@bookshop.com
          </p>

          <p className="text-sm text-gray-300">
            Phone: +880 1234 567 890
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Book Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;