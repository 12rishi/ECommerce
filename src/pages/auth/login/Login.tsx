import { useEffect } from "react";
import { login, resetStatus } from "../../../store/authSlice";
import { useAppdispatch, useAppSelector } from "../../../store/hooks";
import Form from "../Form";
import { loginData } from "../types";
import { Status } from "../../../globals/types/globalType";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppdispatch();
  const navigate = useNavigate();
  const { status } = useAppSelector((state) => state.auth);
  const handleLogin = (data: loginData) => {
    dispatch(login(data));
  };
  useEffect(() => {
    if (status === Status.Success) {
      dispatch(resetStatus());
      navigate("/");
    }
  }, [status, dispatch, navigate]);
  return (
    <>
      <Form type="login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;
