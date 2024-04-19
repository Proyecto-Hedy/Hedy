
import { Metadata } from "next";
import LoginTemplate from "@/modules/account/login-template";

export const metadata: Metadata = {
    title: "Login",
    description: "Login page",
    };

export default function Login() {
    return <LoginTemplate />;
}