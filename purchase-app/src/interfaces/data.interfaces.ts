import { UserCredential } from "firebase/auth";

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
}

export interface AuthResponse {
  response?: UserCredential;
  status: number;
  errorMessage?: string;
}