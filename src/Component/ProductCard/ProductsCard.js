import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import productsData from '../../db.json';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/Slice';

export default function RecipeReviewCard() {
  const dispatch = useDispatch();

  const handleAdd =(product)=>{
    dispatch(addItem(product))
    console.log(product);
  }

  return (
    <div className='justify-center grid grid-cols-1  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-2 sm:px-4'>
      {productsData.products.map((product) => (
        <Card key={product.id} sx={{ maxWidth: 250, margin: '10px' }}>
          <CardMedia
            component="img"
            sx={{ height: "25vh" }}
            image={product.image}
            alt={product.title} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {product.title}
            </Typography>
            <Typography sx={{ padding: "5px 0px" }}>
              ₹{product.amount}
            </Typography>
            <Typography sx={{ backgroundColor: "#03C03C", width: "2.5vw", padding: "0px 7px", color: "white", borderRadius: "5px" }}>
              {product.rating}
            </Typography>
          </CardContent>
          <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share" onClick={()=>handleAdd(product)}>
              <ShoppingCartIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
