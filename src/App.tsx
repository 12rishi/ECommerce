import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/home/Home";
import Register from "./pages/auth/register/Register";
import "./index.css";
import Login from "./pages/auth/login/Login";
import SinglePage from "./pages/singlePage/SinglePage";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<SinglePage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
