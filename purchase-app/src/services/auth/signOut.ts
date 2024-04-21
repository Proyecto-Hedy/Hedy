import firebase_app from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import { AuthResponse } from "@/interfaces/data.interfaces";
import { RESPONSE_STATUS } from "@/interfaces/enums";

const auth = getAuth(firebase_app);

const logOut = async (): Promise<AuthResponse> => {
    try {
      await signOut(auth)
      return { status: RESPONSE_STATUS.OK }
    } catch (error: any) {
      const errorMessage  = error.message
      return { errorMessage , status: RESPONSE_STATUS.BAD_REQUEST }
    }
}

export default logOut