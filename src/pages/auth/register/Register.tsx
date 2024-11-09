import Form from "../Form";
import { UserData } from "../types";

const Register = () => {
  const handleRegister = (data: UserData) => {
    console.log(data);
  };
  return (
    <>
      <Form type="register" onSubmit={handleRegister} />
    </>
  );
};

export default Register;
