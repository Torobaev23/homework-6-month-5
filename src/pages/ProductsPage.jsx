import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBasket } from "../store/basketSlice";
import axios from "axios";

const ProductsPage = () => {
    const [productsData, setProductsData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get(
                "https://dummyjson.com/products?limit=15"
            );
            setProductsData(response.data.products);
        };
        getProducts();
    }, []);

    const addToBasket = (product) => {
        dispatch(addBasket(product));
    };

    return (
        <div>
            <div className="cards">
                {productsData.map((product, index) => (
                    <div key={index} className="card">
                        <img src={product.thumbnail} alt="photo"/>
                        <h2>{product.title}</h2>
                        <p>цена: {product.price}$</p>
                        <p>brand: {product.brand}</p>
                        <p>категория: {product.category}</p>
                        <button onClick={() => addToBasket(product)}>Купить</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
