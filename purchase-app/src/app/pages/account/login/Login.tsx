"use client"
import { useEffect, useState } from "react";

import Button from "@/components/atoms/Button";
import signIn from "@/services/auth/signIn";
import { LOGIN_VIEW } from "@/interfaces/enums";
import { useDataContext } from "@/context/data.context";
import { navigate } from "@/services/actions";
import { toast } from "react-toastify";
import signInWithGoogle from "@/services/auth/signInWithGoogle";
import Image from "next/image";

interface ILoginProps {
  setCurrentView: (view: LOGIN_VIEW) => void;
}

const Login = ({ setCurrentView }: ILoginProps) => {
  const { setUser } = useDataContext()
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitLoading(true)

    const { response, status, message } = await signIn(userEmail, userPassword)

    if (status === 400 && message) {
      toast.error(message, { toastId: "fail" })
    }
    else {
      setUser(response!.email)
      toast.success(message, { toastId: "success" })
      navigate("/")
    }
    setIsSubmitLoading(false)
  };

  const handleSubmitWithGoogle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { response, status, message } = await signInWithGoogle()

    if (status === 400 && message) {
      toast.error(message, { toastId: "fail" })
    }
    else {
      setUser(response!.email)
      toast.success(message, { toastId: "success" })
      navigate("/")
    }
  }

  useEffect(() => {
    if (userEmail && userPassword) {
      setIsSubmitDisabled(false)
    }
    else {
      setIsSubmitDisabled(true)
    }
  }, [userEmail, userPassword])

  return (
    <div id="login-pages" className="w-2/4 mb-16 mt-16">
      <div id="onboarding-card" className="min-w-full m-auto bg-gray-bg">
        <div 
          id="onboarding-form" 
          className="p-8 rounded-xl bg-gray-bg flex flex-col justify-center w-full text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        >
          <h2 className="text-xl font-bold	">
          WELCOME BACK
          </h2>
          <p className="text-base">Sign in to access an enhanced shopping experience.</p>
          <form className="relative" onSubmit={handleSubmitWithGoogle}>
            <Image 
            className="absolute bottom-[40%] left-[5%]"
              src={`data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 48 48'%3E%3Cdefs%3E%3Cpath id='a' d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'/%3E%3C/defs%3E%3CclipPath id='b'%3E%3Cuse xlink:href='%23a' overflow='visible'/%3E%3C/clipPath%3E%3Cpath clip-path='url(%23b)' fill='%23FBBC05' d='M0 37V11l17 13z'/%3E%3Cpath clip-path='url(%23b)' fill='%23EA4335' d='M0 11l17 13 7-6.1L48 14V0H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%2334A853' d='M0 37l30-23 7.9 1L48 0v48H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%234285F4' d='M48 48L17 24l-4-3 35-10z'/%3E%3C/svg%3E`}
              width={40}
              height={40}
              alt="google"
            />
            <Button name="Continue with google" className="hover:font-bold" />
          </form>
          <div className="w-full flex items-center before:content-[''] before:border-b-2 before:h-1.5 before:flex-1 after:border-b-2 after:h-1.5 after:flex-1">
            <span className="p-4">Or</span>
          </div>
          <form className="mt-8" onSubmit={handleSubmit}>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                title="Enter your email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="border m-2 text-xl bg-white p-2 w-full rounded-lg font-extralight"
                required
              />
            </div>
            <div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                title="Enter your password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                className="border m-2 text-xl bg-white p-2 w-full rounded-lg font-extralight"
                required
              />
            </div>
            <Button name="Sign in" isDisabled={isSubmitDisabled} isLoading={isSubmitLoading} />
          </form>
          <div>
            <button 
              onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)} 
              className="hover:underline"
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;