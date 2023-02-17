import { Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./screens/Cart";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
