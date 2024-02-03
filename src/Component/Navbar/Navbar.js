import React from 'react';
import Badge from './Badge';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className='bg-blue-500 py-3 w-full flex justify-around items-center'>
            <div className='text-2xl text-white font-semibold'>
                <h1>ShopKart.in</h1>
            </div>
            <div className='flex space-x-4 items-center text-white'>
                <Link to='/' className='hidden sm:block'>Products</Link>
                <Link to='/login' className='hidden sm:block'>Login</Link>
                <Badge />
            </div>
        </div>
    )
}

export default Navbar;