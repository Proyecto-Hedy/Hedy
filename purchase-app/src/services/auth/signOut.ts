import firebase_app from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import { AuthResponse } from "@/interfaces/data.interfaces";
import { RESPONSE_STATUS } from "@/interfaces/enums";
import ErrorHandler from "@/helper/errorHandler.helper";

const auth = getAuth(firebase_app);

const logOut = async (): Promise<AuthResponse> => {
    try {
      await signOut(auth)
      return { status: RESPONSE_STATUS.OK, message: "Sign out successfully" }
    } catch (error: any) {
      const errorMessage  = error.message
      const errorCode = error.code;

      const message = ErrorHandler(errorCode, errorMessage)
      return { message , status: RESPONSE_STATUS.BAD_REQUEST }
    }
}

export default logOut