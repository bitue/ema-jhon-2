import React from 'react';
import List from '../List/List';
import { arrayToObject } from '../localbd/localdb';

const Cart = (props) => {
    const reducer =(previous , current)=>{
        return previous + current.price

    }
    let cartKeys = props.cart.map(cart => cart.key)
    console.log(cartKeys)
    let newObj = arrayToObject(cartKeys)

    let cloneNewObj = {...newObj}

   let totalPrice = props.cart.reduce(reducer,0)
   let total = +totalPrice.toFixed(2)
   let vat = +(total*.15).toFixed(2)
   let totalIssue = +(total+vat).toFixed(2)
   console.log(total)
    
    return (
        <div className='pl-5  bg-gray-200 rounded-2xl py-5 w-full '>
             <h4 className='text-2xl font-bold'>Order story</h4>
             <p className='text-1xl font-bold'>Cart length : {props.cart.length}</p>
             <p className='text-1xl font-bold'>Total vat : {vat} </p>
             <p className='text-1xl font-bold'>Total price:{total}</p>
             <p className='text-1xl font-bold'>Total issue:{totalIssue}</p>

             <List obj={cloneNewObj} ></List>

            
        </div>
    );
};

export default Cart;