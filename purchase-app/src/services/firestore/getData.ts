import { collection, getDocs, query, where } from "firebase/firestore"; 
import firebase from "../firebase";

import { AuthResponse, IProductData } from "@/interfaces/data.interfaces";
import { RESPONSE_STATUS } from "@/interfaces/enums";

const db = firebase.database

const getData = async (email: string): Promise<AuthResponse<any>> => {
  try {
    const q = query(collection(db, "order"), where("email", "==", email));
    const orders = await getDocs(q);

    const ordersCompleted: any = []

    orders.forEach((doc) => ordersCompleted.push(doc.data()))

    return { response: ordersCompleted, status: RESPONSE_STATUS.CREATED, message: "Record successfully inserted in the database" }
  } catch (error: any) {
    return { message: error.message , status: RESPONSE_STATUS.BAD_REQUEST }
  }
}

export default getData