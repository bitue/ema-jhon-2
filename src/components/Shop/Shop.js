import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import Products from '../Products/Products';


const Shop = () => {
    // products data load here 
    let [products, setProducts] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    //cart useState 

    let [cart, setCart] = useState([])

    const addToCart = (product) => {
        let newCart = [...cart, product]
        setCart(newCart)
        console.log(newCart)
    }



    return (
        <div className='grid grid-cols-4'>
            <div className="products col-span-3  ml-20 border-r-2 border-gray-600">
                {/* products goes here  */}
                {/* pass data to the child products */}
                {
                    products.map(product => <Products key={product.key} bit={product} addFun={addToCart} ></Products>)
                }
            </div>
            <div className="order">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;