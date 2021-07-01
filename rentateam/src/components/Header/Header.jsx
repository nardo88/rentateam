import React from 'react';
import basketImage from '../../assets/img/basket.svg'
import logo from '../../assets/img/logo.png'
import { connect } from 'react-redux';
import {sendCart} from '../../store/reducers/reducerCart'



const Header = ({cart, sendCart, delivery}) => {
    

    const send = () => {
        if (cart.products.length){
            sendCart(cart, delivery)
        } else {
            alert('Выберите продукты')
        }
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <button className="header__burger"><span></span></button>
                    <div className="header__basket basket" onClick={send}>
                        <span className="basket__total">{cart.total} ₽</span>
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

const mapStateToProps = state => {
    return {
        cart: state.cart,
        delivery: state.data.isDeliveri
    }
}

const HeaderContainer = connect(mapStateToProps, {sendCart})(Header)

export default HeaderContainer;