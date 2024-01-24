import { Layout } from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";

import { SignIn } from "./pages/login/SignIn";
import { SignUp } from "./pages/login/SignUp";


function App() {
  return (
    <BrowserRouter basename='/frontend-final-1'>
   
        
        <Routes>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path = '/signup' element={<SignUp/>}/>
          <Route path='/' element={<HomePage />} />
          <Route path='/product' element={<ProductPage />} />
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;
