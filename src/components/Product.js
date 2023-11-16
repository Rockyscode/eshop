import React from 'react';
import './Product.css'
import { phone } from "../accets/Images"

function Product() {
    return (
        <>  
            <div className="product">
                <div className="produt__info">
                    <p>Title</p>
                    <p className='product__price'>
                        <small>$</small>
                        <strong>30</strong>
                    </p>
                    <div className="product__rating">⭐⭐⭐⭐</div>
                    <img src={phone} alt="" />
                    <button>Add to Basket</button>
                </div>
            </div>
        </>
    )
}

export default Product
