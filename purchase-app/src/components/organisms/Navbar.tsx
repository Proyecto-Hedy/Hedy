"use client"
import Link from 'next/link';
import TextInput from '../molecules/TextInput';

const Navbar = () => {
  const handleChangeInput = (value: string) => {
    console.log("🚀 ~ handleChangeInput ~ value:", value)
  }

  return (
    <nav id='navbar' className="w-full bg-white text-black shadow-md">
      <div id='navbar-container' className="mx-auto py-4 px-6 flex justify-between items-center">
        <Link href="/">
            <button className='text-3xl font-bold focus:outline-none'>
                Ecoomerce
            </button>
        </Link>
        <TextInput onChange={handleChangeInput} />
        <div className="flex items-center space-x-4">
          <Link href="/pages/account">
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
