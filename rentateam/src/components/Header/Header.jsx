import React from 'react';
import basketImage from '../../assets/img/basket.svg'
import logo from '../../assets/img/logo.png'


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <button className="header__burger"><span></span></button>
                    <div className="header__basket basket">
                        <span className="basket__total">327 ₽</span>
                        <img src={basketImage} alt="basket" className="basket__image" />
                    </div>
                    <div className="header__logo">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;