"use client"
import { useState } from "react";
import Login from "./login/Login";
import Register from "./register/Register";

export enum LOGIN_VIEW {
    SIGN_IN = "sign-in",
    REGISTER = "register",
}

export default function Account() {
    const [currentView, setCurrentView] = useState(LOGIN_VIEW.SIGN_IN)

    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            {currentView === LOGIN_VIEW.SIGN_IN ? (
                <Login setCurrentView={setCurrentView} />
            ) : (
                <Register setCurrentView={setCurrentView} />
            )}
        </div>
    )
}