import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>soon will be home page</h1>} />
            <Route
              path="/register"
              element={<h1>soon will be register page</h1>}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
