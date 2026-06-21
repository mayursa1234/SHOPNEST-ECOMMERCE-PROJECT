import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                 <Route path="/register" element={<Register/>}/>
                 <Route path="/dashboard" element={<Dashboard/>}/>
                 <Route path="/products" element={<Products/>}/>
                 <Route path="/orders" element={<Orders/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;