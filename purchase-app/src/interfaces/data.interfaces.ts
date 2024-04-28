import { User } from "firebase/auth";

export interface IDataResponse {
  products: IProductData[]
  total: number;
  skip: number;
  limit: number;
}

export interface IProductData {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  total?: number
  quantity?: number
}

export interface AuthResponse {
  response?: User;
  status: number;
  message?: string;
}

export interface FormInputProps {
  id?: number
  onChange: (e: any) => void
  placeholder: string
  required: boolean
  title: string
  inputState?: string
}

export interface UserAddress {
  address: string
  city: string
  first_name: string
  last_name: string
  phone: string
  state: string
  shipping: IShipping
}

export interface IOrderPlaced {
  shippingAddress: UserAddress
  products: IProductData[]
  payment: string
  subtotal: number
  total: number
  orderData: string
}

export interface IShipping {
  price: number
  name: string
}