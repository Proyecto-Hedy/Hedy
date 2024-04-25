"use client";
import React, { useContext } from "react";
import { Metadata } from "next";
import { useDataContext } from "@/context/data.context";



const Profile: React.FC = () => {
    const { user} = useDataContext();

    return (
        <div>
            <h1>Profile</h1>
            {user ? (
                <p>Welcome, {user.email}</p> 
            ) : (
                <p>Please sign in to view your profile.</p>
            )}
        </div>
    );
};

export default Profile;
