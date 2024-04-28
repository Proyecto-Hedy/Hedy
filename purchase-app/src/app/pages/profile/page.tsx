"use client"
import React, { useState } from "react";
import { toast } from "react-toastify";

import { useDataContext } from "@/context/data.context";

import Line from "@/components/atoms/Line";

import logOut from "@/services/auth/signOut";
import { navigate } from "@/services/actions";

import Orders from "./Orders";
import isAuth from "@/hoc/isAuth";

const Profile: React.FC = () => {
  const { user } = useDataContext()

  const handleLogOut = async () => {
    const { message } = await logOut();
    toast.success(message, { toastId: "log out" });
    navigate("/")
  };

  return (
    <div className="mt-8 mb-0 flex justify-center items-start p-8 m-16 gap-12 relative">
      <div className="flex w-full max-w-screen-lg">
        <div className="flex flex-col gap-3 mr-8" style={{ height: "500px", width: "500px" }}>
          <div className="bg-white p-8 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-8 flex-grow flex flex-col justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold mb-4">Account</h1>
              <Line />
              <ul className="flex flex-col gap-4 items-center">
                <li>
                  <button className="text-blue-500 hover:underline ">
                    Orders
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <button 
              onClick={handleLogOut} 
              className="text-blue-500 hover:underline">
                Log out
              </button>
            </div>
          </div>
        </div>
        <div className="border-l border-gray-300 h-full gap-3" />
        <div className="flex flex-col w-full">
          <Orders email={user?.email!} />
        </div>
      </div>
    </div>
  );
};

export default isAuth(Profile);