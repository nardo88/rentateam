import React from 'react';
import { connect } from 'react-redux';
import { addProduct, plus, minus } from '../../store/reducers/reducerCart'
import { isInCart } from '../../components/Functions/functions';


const Product = ({item, addProduct, cart, plus, minus }) => {

    
    const {id, name, img, price, delivery} = item

    const addItem = () => {
        addProduct(id, price, delivery)
    }

    return (
        <div className="product">
            <div className="product__image">
                <img src={img} alt="product" />
                <div className="product__basket">
                    {
                        isInCart(cart.products, id) ? 
                            <div className="add-remove">
                                <button className="add-remove__btn" onClick={() => minus(id, price)}>-</button>
                                <span className="add-remove__value">{isInCart(cart.products, id)}</span>
                                <button className="add-remove__btn" onClick={() => plus(id, price)}>+</button>
                            </div>
                            : <button className="product__add" onClick={addItem}>+</button>
                    }
                    
                </div>
            </div>
            <div className="product__name">{name}</div>
            <div className="product__price">{price} ₽</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}




const ProductContainer = connect(mapStateToProps, {addProduct, plus, minus})(Product)

export default ProductContainer;