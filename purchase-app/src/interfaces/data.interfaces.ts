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