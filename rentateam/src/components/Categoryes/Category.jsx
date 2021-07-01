import React from 'react';
import Product from './Product'
import {getCard} from '../../components/Functions/functions'


const Category = ({data, isDeliveri, products}) => {

    const base = getCard(data.products, products)
    
    return (
        <section id={data.id} className="category">
            <div className="container">
                <div className="category__wrapper">
                    <h2 className="category__title">{data.name}</h2>
                    <div className="category__items">
                        {
                            isDeliveri ? base.filter(elem => elem.delivery).map(item => <Product key={item.id} item={item} />)
                            : base.map(item => <Product key={item.id} item={item} />)

                            
                        }
                    </div>
                </div>
            </div>
        </section>
    )
} 


export default Category