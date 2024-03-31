import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ProductsPage from "./pages/ProductsPage.jsx";
import Layout from "./components/Layout.jsx";
import BasketPage from "./pages/BasketPage.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='products' element={<ProductsPage/>}/>
                    <Route path='basket' element={<BasketPage/>}/>
                    <Route path='*' element={<h4>Ошибка 404: Такой страницы не существует</h4>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
