import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className='text-center mt-5' >
            <div className='text-center flex justify-center items-center'>
                <img src={logo} alt="" className='' style={{ height: '100px', textAlign: 'center' }} />

            </div>


            <nav className='bg-black text-white space-x-5  '>
                <a className='hover:bg-gray-900 inline-block py-2 px-2  ' href="./shop">Shop</a>
                <a className='hover:bg-gray-900 inline-block py-2 px-2  ' href="./order">Order Review</a>
                <a className='hover:bg-gray-900 inline-block py-2 px-2  ' href="./manage">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;