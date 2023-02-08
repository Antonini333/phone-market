
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductProvider from "./context/ProductContext"
import ProductDetailsPage from "./views/ProductDetailsPage";
import ProductListPage from "./views/ProductListPage";
import { Header } from "./components/Header/Header"
import './App.css';

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </div>
  );
}

export default App;
