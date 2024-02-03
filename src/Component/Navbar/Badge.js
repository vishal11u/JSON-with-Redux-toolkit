import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function SimpleBadge() {
    const  cart = useSelector((state) => state.cart);
    return (
        <Link to='/shoppingcart'>
            <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon color="action" />
            </Badge>
        </Link>
    );
}