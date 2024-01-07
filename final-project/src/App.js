import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DummyHeader } from './component/DummyHeader';

function App() {
  return (
    <BrowserRouter basename='/SD-1023/frontend-final-1'>
      <Routes>
        <Route path='/' element={<DummyHeader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
