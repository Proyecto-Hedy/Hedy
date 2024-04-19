"use client"

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import TextInput from '../molecules/TextInput';

const Navbar = () => {
  const [isHover, setIsHover] = useState<boolean>(false)

  const handleChangeInput = (value: string) => {
    console.log("🚀 ~ handleChangeInput ~ value:", value)
  }

  return (
    <nav id='navbar' className="w-full bg-white text-black shadow-md">
      <div id='navbar-container' className="mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <Image 
            src='/logo.png'
            width={125}
            height={125}
            alt='logo'
          />
        </Link>
        <TextInput onChange={handleChangeInput} />
        <div className="flex items-center w-1/6">
          <div
            className='relative'
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <button 
              className="p-4 hover:text-gray-bg-light hover:underline hover:decoration-gray-bg-light"
            >
              Account
            </button>
            {isHover && (
              <div className='absolute left-[15%] flex flex-col justify-center bg-gray-bg text-sm'>
                <Link className='p-2 hover:bg-gray-bg-light hover:text-white rounded-lg' href="/pages/account/login" passHref>
                  Log in
                </Link>
                <Link className='p-2 hover:bg-gray-bg-light hover:text-white rounded-lg' href="/pages/account/login" passHref>
                  Log out
                </Link>
              </div>)
            }
          </div>
          <Link href="/pages/cart" passHref>
            <button className="p-3 border rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart hover:translate-y-px hover:translate-x-px"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
