'use client';

import Link from 'next/link';
import React from 'react';

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
              <Link href="/books" className="hover:text-white">
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