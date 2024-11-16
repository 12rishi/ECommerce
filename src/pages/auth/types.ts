import { Status } from "../../globals/types/globalType";

export interface Props {
  type: string;
  onSubmit: (data: UserData) => void;
}
export interface UserData {
  username: string;
  email: string;
  password: string;
}
export interface loginData {
  email: string;
  password: string;
}
//productTypes
interface ProductUser {
  id: string;
  username: string;
  email: string;
}
interface ProductCategory {
  id: string;
  categoryName: string;
}
export interface ProductType {
  id: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productQty: number;
  productImageUrl: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  categoryId: string;
  User: ProductUser;
  Category: ProductCategory;
}
export interface ProductState {
  product: ProductType[];
  status: Status;
  singleProductData: ProductType | null;
}
//cartType
export interface CartItem {
  product: ProductType;
  quantity: number;
}
export interface CartState {
  items: CartItem[];
  status: Status;
}
