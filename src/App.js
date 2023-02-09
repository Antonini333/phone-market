
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductProvider from "./context/ProductContext"
import ProductDetailsPage from "./views/ProductDetailsPage";
import ProductListPage from "./views/ProductListPage";
import { Header } from "./components/Header/Header"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductProvider>
          <Header />
          <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
