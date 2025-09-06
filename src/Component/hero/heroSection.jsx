import { Box, Container, Typography, Button, Grid } from "@mui/material";
import Product from "../../assest/10-107408_mobile-png-image-hd-all-mobile-phone-png-removebg-preview.png";
export default function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: "",
        color: "white",
        py: { xs: 6, md: 20 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Side: Text */}
          <Grid item xs={12} md={6}>
            <Typography variant="h2" color= 'secondary.main' component="h1" gutterBottom>
              Welcome to Our Store
            </Typography>
            <Typography color= 'secondary.main' variant="h6" paragraph>
              Discover the best products at amazing prices. 
              Shop now and enjoy seamless online shopping!
            </Typography>
            <Button
              variant="contained"
              
              size="large"
              sx={{ mt: 2 ,bgcolor: 'secondary.main'}}
            >
              Shop Now
            </Button>
          </Grid>

          {/* Right Side: Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={Product}
              alt="Hero Image"
              sx={{
                width: "100%",
                borderRadius: 3,
                boxShadow: 4,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
