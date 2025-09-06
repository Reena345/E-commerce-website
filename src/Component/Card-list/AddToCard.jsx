import { Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";

const AddToCard = (props) => {
  const { open, toggleDrawer } = props;

  const [cartItems, setCartItem] = useState([]);

  // Cart ko localStorage se load karna
  useEffect(() => {
    const carItemArr = localStorage.getItem("cartList");
    if (carItemArr) {
      const parseCart = JSON.parse(carItemArr);
      setCartItem(parseCart);
    } else {
      setCartItem([]);
    }
  }, [open]); // har bar drawer open hone par update ho jaye

  // Add Item (example product for demo)
  const handleAdd = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItem(updatedCart);
    localStorage.setItem("cartList", JSON.stringify(updatedCart));
  };

  // Remove Item
  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItem(updatedCart);
    localStorage.setItem("cartList", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 450 }} role="presentation">
          {/* Header */}
          <Typography
            sx={{
               bgcolor: 'secondary.main',
              color: "white",
              padding: "10px 0px",
              textAlign: "center",
            }}
            variant="h4"
          >
            Cart List
          </Typography>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <Typography sx={{ textAlign: "center", mt: 3 }}>
              No items in cart
            </Typography>
          ) : (
            cartItems.map((item) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #ddd",
                    p: 2,
                  }}
                  key={item.id}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "5px",
                        objectFit: "cover",
                      }}
                    />
                    <Box>
                      <h5>{item.name}</h5>
                      <h6>{item.price}</h6>
                      <span>{item.title}</span>
                    </Box>
                  </Box>

                  {/* Buttons */}
                  <Box    sx={{ display: "flex",flexDirection: "column", gap: 1, }}>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => handleAdd(item)}
                      sx={{  bgcolor: 'secondary.main'}}
                    >
                      Add
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              );
            })
          )}
        </Box>
      </Drawer>
    </div>
  );
};

export default AddToCard;
