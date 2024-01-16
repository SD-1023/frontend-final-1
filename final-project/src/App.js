import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DummyHeader } from './component/DummyHeader';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <BrowserRouter basename='/frontend-final-1'>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
