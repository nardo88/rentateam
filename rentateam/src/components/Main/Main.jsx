import React from 'react';
import { connect } from 'react-redux';
import { isDeliveriAC } from '../../store/reducers/reducerGetDate';
import {changeStreet, changeHouse , filterCart} from '../../store/reducers/reducerCart'


const Main = ({isDeliveri, isDeliveriAC, street, house, changeStreet, changeHouse, hasAdress, filterCart}) => {

    const tabDelivery = () => {
        isDeliveriAC(true)
        filterCart()
    }

    return (
        <div className="main">
            <div className="container">
                <div className="main__wrapper">
                    <div className="main__head">
                        <h1 className="main__title">Доставка г. Москва</h1>
                        <div className="delivery">
                            <button className={`delivery__type ${isDeliveri && 'delivery__type--active'}`} onClick={tabDelivery}>Доставка</button>
                            <button className={`delivery__type ${!isDeliveri && 'delivery__type--active'}`} onClick={() => {isDeliveriAC(false)}}>Самовывоз</button>
                        </div>
                    </div>
                    {
                        isDeliveri &&  <div className="adress">
                                            <div className="form">
                                                <div className="form__item ">
                                                    <label htmlFor="street" className="form__label">Улица</label>
                                                    <input id="street" type="text" className="form__input " value={street} onChange={e => changeStreet(e.target.value)} />
                                                    {
                                                        hasAdress && <span className="req">Нужно заполнить для оформления доставки</span>
                                                    }
                                                    
                                                </div>
                                                <div className="form__item">
                                                    <label htmlFor="house" className="form__label">Дом</label>
                                                    <input id="house" type="text" className="form__input" value={house} onChange={e => changeHouse(e.target.value)}/>
                                                </div>
                                            </div>
                                        </div>
                    }
                   
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isDeliveri: state.data.isDeliveri,
        street: state.cart.adress.street,
        house: state.cart.adress.house,
        hasAdress: state.cart.hasAdress
    }
}

const MainContainer = connect(mapStateToProps, { isDeliveriAC, changeStreet, changeHouse, filterCart })(Main)

export default MainContainer;