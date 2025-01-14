import { ChangeEvent, FormEvent, useState } from "react";
import { Props, UserData } from "./types";

const Form: React.FC<Props> = ({ type, onSubmit }) => {
  const [userData, setUserData] = useState<any>({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(userData);
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        className="w-full max-w-md space-y-6 p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:text-gray-100"
        onSubmit={handleSubmit}
      >
        <div className="space-y-1">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email.."
            onChange={handleChange}
          />
        </div>
        {type === "register" && (
          <div className="space-y-1">
            <label htmlFor="username" className="font-medium">
              UserName
            </label>
            <input
              className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
              type="password"
              id="username"
              name="username"
              placeholder="Enter your username.."
              onChange={handleChange}
            />
          </div>
        )}
        <div className="space-y-1">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password.."
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
        >
          {type === "register" ? "Sign up" : "sign in"}
        </button>
      </form>
    </div>
  );
};

export default Form;
