import { useEffect } from "react";
import { register, resetStatus } from "../../../store/authSlice";
import { useAppdispatch, useAppSelector } from "../../../store/hooks";
import Form from "../Form";
import { UserData } from "../types";
import { Status } from "../../../globals/types/globalType";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppdispatch();
  const navigate = useNavigate();
  const handleRegister = (data: UserData) => {
    dispatch(register(data));
  };
  useEffect(() => {
    if (status === Status.Success) {
      dispatch(resetStatus());
      navigate("/login");
    }
  }, [status, navigate, dispatch]);
  return (
    <>
      <Form type="register" onSubmit={handleRegister} />
    </>
  );
};

export default Register;
