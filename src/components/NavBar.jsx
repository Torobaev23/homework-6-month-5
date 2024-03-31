import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const isActiveMenu = ({ isActive }) => (isActive ? "active-menu-link" : "");

const NavBar = () => {
    const { productsCount } = useSelector(state => state.basketSlice);

    return (
        <nav>
            <ul>
                <li>
                    <NavLink className={isActiveMenu} to="/products">Все товары</NavLink>
                </li>
                <li>
                    <NavLink className={isActiveMenu} to="/basket">Корзина: {productsCount}</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
