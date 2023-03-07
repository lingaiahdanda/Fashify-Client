import Home from "./pages/Home";
import "./App.css"
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart"
import Success from "./pages/Success"
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"

const App = ()=>{
  const user = false;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route
          path="/login" 
          element={ 
            user ? (
              <Navigate replace to={"/"} />
            ):(<Login/>)}
        />
        <Route path="/register" element={<Register/>}></Route> 
        <Route path="/products/:category" element={<ProductList/>}></Route>
        <Route path="/product/:id" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/success" element={<Success/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
