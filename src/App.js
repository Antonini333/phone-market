
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetailsPage from "./views/ProductDetailsPage";
import ProductListPage from "./views/ProductListPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
