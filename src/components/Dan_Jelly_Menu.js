import { useEffect, useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../redux/actions/cart";
import restaurant from './restaurant.json';
import makeStyles from "@material-ui/core/styles/makeStyles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';



const useStyles = makeStyles({
  backImage: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: 1000,
    height: 500
  },

  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginRight: 30,
    marginLeft: 30
  },

  box: {
    marginRight: 50
  },

  card: {
    width: 400,
    height: 650,
  },

  media: {
    height: 350,
    width: 400
  },

  action: {
    display: 'flex',
    justifyContent: 'space-around'
  }
})

export default function Dan_Jelly_Menu() {

  const cart = useSelector((state) => state.addToCart);
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <div className={classes.container}>

      {restaurant[1].menus.map((product, i) =>

        <div className="card" key={product.menu_id}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={product.menu_image}
                title={product.menu_name}
              />

              <CardContent>
                <Typography gutterBottom variant="h6" component="h6">
                  {product.menu_name}
                </Typography>
              </CardContent>

            </CardActionArea>

            <CardActions className={classes.action}>
              <Button
                onClick={() => dispatch({ type: "ADD", payload: product })}
              >
                {" "}
                <AddShoppingCartIcon /> Add To Cart
              </Button>

              <Typography gutterBottom variant="h6" component="h6">
                Rs. {product.menu_price}
              </Typography>
            </CardActions>
          </Card>
        </div>
      )}


    </div>
  );
}