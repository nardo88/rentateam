import React from 'react';

const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="main__wrapper">
                    <div className="main__head">
                        <h1 className="main__title">Доставка г. Москва</h1>
                        <div className="delivery">
                            <button className="delivery__type delivery__type--active">Доставка</button>
                            <button className="delivery__type">Самовывоз</button>
                        </div>
                    </div>
                    <div className="adress">
                        <form className="form">
                            <div className="form__item">
                                <label htmlFor="street" className="form__label">Улица</label>
                                <input id="street" type="text" className="form__input" />
                            </div>
                            <div className="form__item">
                                <label htmlFor="house" className="form__label">Дом</label>
                                <input id="house" type="text" className="form__input" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;