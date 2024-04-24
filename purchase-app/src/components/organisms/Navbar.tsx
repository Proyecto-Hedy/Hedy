/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import TextInput from '../molecules/TextInput';
import { useDataContext } from '@/context/data.context';
import logOut from '@/services/auth/signOut';
import { toast } from 'react-toastify';
import GoogleAccount from '../molecules/GoogleAccount';
import useApi from '@/hooks/useApi';
import { IDataResponse } from '@/interfaces/data.interfaces';

const Navbar = () => {
  const { user, setFilteredProducts } = useDataContext()
  const { fetchData, data } = useApi<IDataResponse>()

  const [isHover, setIsHover] = useState<boolean>(false)

  const handleChangeInput = async (value: string) => {
    await fetchData(`/search?q=${value}`)
  }

  const handleLogOut = async () => {
    const { message } = await logOut()
    toast.success(message, { toastId: "log out" })
  }

  useEffect(() => {
    if (data) {
      if (data?.products.length) {
        setFilteredProducts(data.products)
      }
      else {
        toast.warning("Item not found", { toastId: "not_found" })
      }
    }
  }, [data])

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
        <div className="flex items-center">
          <div
            className='relative'
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {user ? 
              <GoogleAccount user={user!} /> 
              : (
                <Link href="/pages/account">
                  <button className="p-4 hover:text-gray-bg-light hover:underline hover:decoration-gray-bg-light">
                    Account
                  </button>
                </Link>)
            }
            {isHover && (
              <div className='z-50 absolute top-[85%] border rounded-lg border-gray-bg-light left-[5%] flex flex-col justify-center bg-gray-bg text-sm'>
                {!user ? (
                  <Link className='p-2 hover:bg-gray-bg-light hover:text-white rounded-lg' href="/pages/account">
                    Sign in
                  </Link>
                )
                : (
                  <button 
                    className='p-2 hover:bg-gray-bg-light hover:text-white rounded-lg'
                    onClick={handleLogOut}
                  >
                    Sign out
                  </button>
                )
                }
              </div>)
            }
          </div>
          <Link href="/pages/cart" passHref>
            <button className="p-3 border rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart hover:translate-y-px hover:translate-x-px"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
