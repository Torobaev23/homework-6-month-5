import React from "react";
import { useSelector } from "react-redux";

const BasketPage = () => {
    const products = useSelector((state) => state.basket.products);

    return (
        <div>
            <div className="cards">
                {products.map((product, index) => (
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

export default BasketPage;
