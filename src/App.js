import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  //note <Home />//component not {Home}//ow error:
  //Functions are not valid as a React child.
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
