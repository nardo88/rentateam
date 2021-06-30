import React from 'react';
import Product from './Product'


const Category = ({data, isDeliveri}) => {
    

    return (
        <section id={data.name} className="category">
            <div className="container">
                <div className="category__wrapper">
                    <h2 className="category__title">{data.title}</h2>
                    <div className="category__items">
                        {
                            isDeliveri ? data.products.filter(elem => elem.delivery).map(item => <Product key={item.id} item={item} />)
                            : data.products.map(item => <Product key={item.id} item={item} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
} 


export default Category