import React from 'react';
import logo from "../../img/images/logo.png";
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo"/>
            <nav>
                <a href="/shop">Shop</a><a href="/order">Order Review</a><a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;