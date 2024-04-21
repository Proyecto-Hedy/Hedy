import firebase_app from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthResponse } from "@/interfaces/data.interfaces";
import { RESPONSE_STATUS } from "@/interfaces/enums";
import ErrorHandler from "@/helper/errorHandler.helper";

const auth = getAuth(firebase_app);

const signUp = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    return { response, status: RESPONSE_STATUS.CREATED, message: "Member profile created successfully" }
  } catch (error: any) {
    const errorMessage  = error.message
    const errorCode = error.code;

    const message = ErrorHandler(errorCode, errorMessage)

    return { message , status: RESPONSE_STATUS.BAD_REQUEST }
  }
}

export default signUp