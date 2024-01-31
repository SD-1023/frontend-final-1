import { Layout } from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { SearchProvider } from "./contexts/SearchContext";
import { CategoriesPage } from "./pages/categories/CategoriesPage";
import { ProductPage } from "./pages/product/ProductPage";
import { SignIn } from "./pages/login/SignIn";
import { SignUp } from "./pages/login/SignUp";
import { HomePageProvider } from "./contexts/HomePageContext";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { CartPage } from "./pages/cart/CartPage";


function App() {
  return (
    <BrowserRouter basename='/frontend-final-1'>

      <SearchProvider>
        <HomePageProvider>
          <Layout>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/products' element={<CategoriesPage />} />
              <Route path='/products/:id' element={<CategoriesPage />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />

              <Route path='/profile' element={<ProfilePage />} />

               <Route path='/product/:id' element={<ProductPage />} />
               <Route path = '/cart' element={<CartPage/>}/>

            </Routes>
          </Layout>
        </HomePageProvider>
      </SearchProvider>

    </BrowserRouter>
  );
}

export default App;
