"use client";
import React from "react";
import { Metadata } from "next";
import { useDataContext } from "@/context/data.context";

const Profile: React.FC = () => {
  const { user } = useDataContext();

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-lg bg-white p-8 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        <div className="text-lg mb-4">
          {user ? (
            <p>Welcome, {user.email}</p>
          ) : (
            <p>Please sign in to view your profile.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
