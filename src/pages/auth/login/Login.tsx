import Form from "../Form";
import { UserData } from "../types";

const Login = () => {
  const handleLogin = (data: UserData) => {
    console.log(data);
  };
  return (
    <>
      <Form type="login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;
