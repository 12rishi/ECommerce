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
