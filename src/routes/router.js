import React from "react";

import {
    BrowserRouter,
    Routes,
    Route,


} from "react-router-dom";
import App from "../App";
import Footer from "../components/footer";
import NavBar from "../components/navBar";


const Router =()=>{

return (   
<BrowserRouter>
<NavBar />
    <Routes>
    <Route exact path="/" element={<App />} />
    </Routes>
    <Footer />
    </BrowserRouter>)
}
export default Router;