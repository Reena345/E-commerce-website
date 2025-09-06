import React, { useEffect, useState } from "react";
import Product1 from "../assest/app-1.jpg";
import Product2 from "../assest/app-2.jpg";
import Product3 from "../assest/app-3.jpg";
import Product4 from "../assest/books-1.jpg";
import Product5 from "../assest/books-2.jpg";
import Product6 from "../assest/books-3.jpg";
import Product7 from "../assest/branding-1.jpg";
import Product8 from "../assest/branding-2.jpg";
import Product9 from "../assest/branding-3.jpg";
import Product10 from "../assest/product-1.jpg";
import Product11 from "../assest/product-2.jpg";
import Product12 from "../assest/product-3.jpg";
import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  Snackbar,
  SnackbarContent,
  Typography,
} from "@mui/material";
import "./Product.css";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

const copyProduct = [
  {
    id: 1,
    img: Product1,
    name: "App-1",
    title: "Lorem ipsum, dolor sit amet consectetur",
    price: 5000,
  },
  {
    id: 2,
    img: Product10,
    name: "Branding-1",
    title: "Lorem ipsum, dolor sit amet consectetur",
    price: 35000,
  },
  {
    id: 3,
    img: Product3,
    name: "App-2",
    title: "Lorem ipsum, dolor sit amet consectetur",
    price: 3000,
  },
  {
    id: 4,
    img: Product4,
    name: "Books-1",
    title: "Lorem ipsum, dolor sit amet consectetur",
    price: 45000,
  },
  {
    id: 5,
    img: Product5,
    name: "Books-2",
    title: "Lorem ipsum, dolor sit amet consectetur",
    price: 39000,
  },
  {
    id: 6,
    img: Product6,
    name: "Books-3",
    title: "Lorem ipsum, dolor sit amet consectetur",
    price: 31000,
  },
  {
    id: 7,
    img: Product2,
    name: "App-3",
    title: "Lorem ipsum, dolor sit amet consectetur",
    price: 35000,
  },
  {
    id: 8,
    img: Product7,
    name: "Product-1",
    title: "Lorem ipsum, dolor sit amet consectetur",
    price: 65000,
  },
  {
    id: 9,
    img: Product12,
    name: "Product-2",
    title: "Lorem ipsum, dolor sit amet consectetur",
    price: 28000,
  },
  {
    id: 10,
    img: Product8,
    name: "Branding-2",
    title: "Lorem ipsum, dolor sit amet consectetur",
    price: 85000,
  },
  {
    id: 11,
    img: Product9,
    name: "Branding-3",
    title: "Lorem ipsum, dolor sit amet consectetur",
    price: 5000,
  },
  {
    id: 12,
    img: Product11,
    name: "Product-3",
    title: "Lorem ipsum, dolor sit amet consectetur",
    price: 3000,
  },
];

function Products() {
  const [cartList, setcartList] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  console.log(cartList);

  const cartHandler = (product) => {
    const isExist = cartList.find((cart) => cart.id === product.id);

    if (!isExist) {
      setcartList((prev) => [...prev, product]);
    } else {
      setOpenAlert(true);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  useEffect(() => {
    let localItem = localStorage.getItem("cartList");

    if (cartList.length > 0) {
      let strCartList = JSON.stringify(cartList);
      localStorage.setItem("cartList", strCartList);
    }
  }, [cartList]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <SnackbarContent
          style={{ backgroundColor: "red" }}
          message={
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <Box sx={{ paddingRight: "60px" }}>
                <span id="client-snackbar">Product already in cart list</span>
              </Box>
              <Box>
                <CloseIcon onClick={handleClose} />
              </Box>
            </Box>
          }
        ></SnackbarContent>
      </Snackbar>
      <Box className="mx-5 px-3">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {copyProduct?.map((product, index) => {
            return (
              <Card
                key={index}
                className="card-container my-3"
                sx={{
                  padding: "8px",
                  width: { xs: "100%", sm: "280px", md: "350px" }, 
                  maxWidth: "100%",
                }}
              >
                <Box sx={{ cursor: "pointer", margin: "10px" }}>
                  <img
                    className="product-img mb-3"
                    src={product.img}
                    alt={product.name}
                    style={{
                      width: "100%", 
                      height: "auto",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />

                  <Typography variant="h6" sx={{ color: "secondary.main" }}>
                    {product.name}
                  </Typography>
                  <Typography
                    className="my-1"
                    variant="body2"
                    sx={{ color: "secondary.main" }}
                  >
                    {product.title}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "secondary.main" }}>
                    {product.price}
                  </Typography>

                  <Divider
                    sx={{ borderColor: "black", my: 1 }}
                    variant="fullWidth"
                  />

                  <Box
                    className="d-flex justify-content-between"
                    sx={{
                      color: "secondary.main",
                      display: "flex",
                      justifyContent: "space-between",
                      px: 2,
                    }}
                  >
                    <ShareIcon className="my-2" fontSize="medium" />
                    <FavoriteIcon className="my-2" fontSize="medium" />
                    <AddShoppingCartIcon
                      className="my-2"
                      fontSize="medium"
                      onClick={() => cartHandler(product)}
                    />
                  </Box>
                </Box>
              </Card>
            );
          })}
          ;
        </Box>
      </Box>
    </>
  );
}

export default Products;
