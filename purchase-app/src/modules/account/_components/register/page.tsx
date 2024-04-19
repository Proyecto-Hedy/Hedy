import { useState } from "react";
import { LOGIN_VIEW } from "@/modules/account/login-template";

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void;
};

const Register = ({ setCurrentView }: Props) => {
  const handleRegister = () => {
    // implementar la lógica para el registro del usuario
    console.log("Registrando usuario...");
  };

  return (
    <div className="max-w-md w-full bg-white rounded-lg overflow-hidden mx-auto mt-20 relative z-10 shadow-md">
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold text-center">Become a Member</h1>
        <p className="text-gray-600 text-center mb-6">Create your account and get access to an enhanced shopping experience.</p>
        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label htmlFor="first_name" className="block text-gray-700">First Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="Enter your first name"
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block text-gray-700">Last Name</label>
            <input
              id="last_name"
              type="text"
              name="last_name"
              placeholder="Enter your last name"
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700">Phone</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Join</button>
        </form>
        <p className="text-center mt-4 text-gray-600">Already a member? <button onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)} className="underline">Sign in</button></p>
      </div>
    </div>
  );
};

export default Register;
