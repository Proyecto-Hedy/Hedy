import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase_app from "../firebase";

import ErrorHandler from "@/helper/errorHandler.helper";

import { AuthResponse } from "@/interfaces/data.interfaces";
import { RESPONSE_STATUS } from "@/interfaces/enums";

const auth = getAuth(firebase_app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async (): Promise<AuthResponse> => {
  try {
    const { user } = await signInWithPopup(auth, provider)
    return { response: user, status: RESPONSE_STATUS.CREATED, message: "Sign in successfully" }
  } catch (error: any) {
    const errorMessage  = error.message
    const errorCode = error.code;

    const message = ErrorHandler(errorCode, errorMessage)

    return { message , status: RESPONSE_STATUS.BAD_REQUEST }
  }
}

export default signInWithGoogle