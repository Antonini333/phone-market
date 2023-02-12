
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductProvider from "./context/ProductContext"
import ProductDetailsPage from "./views/ProductDetailsPage";
import MainPage from "./views/MainPage";
import { Header } from "./components/Header/Header"
import './styles/components/app.scss';
import ErrorPage from './views/ErrorPage';

function AppRouter() {
  return (
    <div className="l-app">
      <BrowserRouter>
        <ProductProvider>
          <Header />
          <Routes>
          <Route path="*" element={<Navigate to="/products" />} />
            <Route path="/products" element={<MainPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/products/error" element={<ErrorPage/>}/>
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
