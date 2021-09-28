import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />

const Products = (props) => {
  //  console.log(props)



    return (
        <div className='border-b-2 grid grid-cols-3 py-2 px-1'>
            <div className='' >
                <img src={props.bit.img} alt="" />
            </div>
            <div className='col-span-2'>
                <h3 className='font-bold text-1xl'>{props.bit.name}</h3>
                <p>by {props.bit.seller}</p>
                <div className="grid grid-cols-2">
                    <div className='space-y-2'>
                        <h4>Price:${props.bit.price}</h4>
                        <p>Only {props.bit.stock} is left ! Order soon</p>
                        <button onClick={()=>props.addFun(props.bit)} className='bg-yellow-400 px-3 py-1 font-bold rounded-2xl hover:bg-yellow-500 '> {shoppingCart}Add to Cart</button>
                    </div>
                    <div>
                        <div className='stars'>
                            <h1>{props.bit.star}</h1>
                        </div>
                        <div>
                            <h3 className='font-bold text-1xl text-yellow-500'>Features</h3>
                            <ul>
                                {
                                    props.bit.features.map(feature => <li className=''>*{feature.description}</li>)
                                }
                            </ul>

                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Products;