import firebase_app from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthResponse } from "@/interfaces/data.interfaces";
import { RESPONSE_STATUS } from "@/interfaces/enums";

const auth = getAuth(firebase_app);

const signUp = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    return { response, status: RESPONSE_STATUS.CREATED }
  } catch (error: any) {
    const errorMessage  = error.message
    return { errorMessage , status: RESPONSE_STATUS.BAD_REQUEST }
  }
}

export default signUp