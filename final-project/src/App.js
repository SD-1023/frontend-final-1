import { Layout } from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter basename='/frontend-final-1'>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
