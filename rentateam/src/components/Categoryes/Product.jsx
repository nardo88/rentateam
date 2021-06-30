import React from 'react';

const Product = ({item}) => {

    const {name, img, price} = item
    return (
        <div className="product">
            <div className="product__image">
                <img src={img} alt="product" />
                <div className="product__basket">
                    <button className="product__add">+</button>
                </div>
            </div>
            <div className="product__name">{name}</div>
            <div className="product__price">{price} ₽</div>
        </div>
    )
}

export default Product;