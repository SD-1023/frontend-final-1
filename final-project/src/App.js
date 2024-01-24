import { Layout } from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { SearchProvider } from "./contexts/SearchContext";
import { CategoriesPage } from "./pages/categories/CategoriesPage";
import { ProductPage } from "./pages/product/ProductPage";
import { SignIn } from "./pages/login/SignIn";
import { SignUp } from "./pages/login/SignUp";

function App() {
  return (
    <BrowserRouter basename='/frontend-final-1'>
      <SearchProvider>
        <Layout>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/search' element={<CategoriesPage />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/product' element={<ProductPage />} />
          </Routes>
        </Layout>
      </SearchProvider>

    </BrowserRouter>
  );
}

export default App;
