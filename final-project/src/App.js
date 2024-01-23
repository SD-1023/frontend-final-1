import { Layout } from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { SearchProvider } from "./contexts/SearchContext";
import { CategoriesPage } from "./pages/categories/CategoriesPage";

function App() {
  return (
    <BrowserRouter basename='/frontend-final-1'>
      <SearchProvider>
        <Layout>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/search' element={<CategoriesPage />} />
          </Routes>
        </Layout>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
