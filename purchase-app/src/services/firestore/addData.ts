import { collection, addDoc } from "firebase/firestore"; 
import firebase from "../firebase";

import { AuthResponse, IProductData } from "@/interfaces/data.interfaces";
import { RESPONSE_STATUS } from "@/interfaces/enums";
import { User } from "firebase/auth";

const db = firebase.database

const addData = async (body: IProductData[], email: string): Promise<AuthResponse<User>> => {
  try {
    await Promise.all(body.map((product: IProductData) => addDoc(collection(db, "order"), {
      ...product,
      email
    })))
    return { status: RESPONSE_STATUS.CREATED, message: "Record successfully inserted in the database" }
  } catch (error: any) {
    return { message: error.message , status: RESPONSE_STATUS.BAD_REQUEST }
  }
}

export default addData