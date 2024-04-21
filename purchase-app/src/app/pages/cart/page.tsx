"use client"
import { useDataContext } from "@/context/data.context";
import { navigate } from "@/services/actions";
import { useEffect } from "react";

export default function Cart() {
    const { user } = useDataContext()

    useEffect(() => {
        if (!user) {
            navigate("/pages/account")
        }
    }, [user])

    return !user ? <p>Loading...</p> : (
        <div>
            <h1>Cart</h1>
        </div>
    );
}