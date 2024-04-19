import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <Link href="/">
            <button className='text-3xl font-bold focus:outline-none'>
                Ecoomerce
            </button>
        </Link>
        <form action="/pages/search" method="GET" className="flex-grow flex items-center justify-center">
          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 p-2 rounded-full w-full max-w-md"
            name="q"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded-full ml-2">
            Search
          </button>
        </form>
        <div className="flex items-center space-x-4">
          <Link href="/pages/account/login" passHref>
            <button className="btn btn-success">Account</button>
          </Link>
          <Link href="/pages/cart" passHref>
            <button className="btn btn-success">Cart</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
