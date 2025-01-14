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
export enum OrderStatus {
  Pending = "pending",
  Delivered = "delivered",
  Ontheway = "ontheway",
  Cancel = "cancelled",
  Preparation = "preparation",
  All = "all",
}
//cartType
export interface CartItem {
  Product: ProductType;
  quantity: number;
}
export interface CartState {
  items: CartItem[];
  status: Status;
}
export enum PaymentMethod {
  COD = "cod",
  Khalti = "khalti",
}
export enum PaymentStatus {
  Paid = "paid",
  Unpaid = "unpaid",
  Pending = "pending",
}
export interface Payment {
  paymentMethod: PaymentMethod;
}
export interface OrderPaymentData extends Payment {
  paymentStatus: PaymentStatus;
}
export interface ItemDetails {
  productId: string;
  quantity: number;
}
export interface OrderData {
  phoneNumber: string;
  shippingAddress: string;
  totalAmount: number;
  paymentDetails: Payment;
  items: ItemDetails[];
}
export interface UserData {
  userName: string;
  email: string;
}
export interface OrderResponseItem extends ItemDetails {
  orderId: string;
}
export interface OrderResponse {
  items: OrderResponseItem[];
  status: Status;
  khaltiUrl: string | null;
  myOrders: MyOrdersData[];
  orderDetails: OrderDetails[];
}
export interface MyOrdersData {
  id: string;
  phoneNumber: string;
  shippingAddress: string;
  totalAmount: number;
  orderStatus: OrderStatus;
  createdAt: string;

  paymentId: string;
  userId: UserData;
  User: UserData;
  Payment: OrderPaymentData;
}
export interface OrderDetails {
  id: string;
  quantity: number;
  orderId: string;
  Product: ProductType;
  Order: MyOrdersData;
}
