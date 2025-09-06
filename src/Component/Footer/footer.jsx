import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";


const Footer = () => {
  return (
   <Box
      sx={{
        backgroundColor: "secondary.main",
        color: "white",
        py: 4,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              MyWebsite
            </Typography>
            <Typography variant="body2">
              A modern responsive website built with React & MUI.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="hover" display="block">
                Home
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                About
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Services
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">📍 Karachi, Pakistan</Typography>
            <Typography variant="body2">📞 +92 300 1234567</Typography>
            <Typography variant="body2">✉️ info@mywebsite.com</Typography>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton href="#" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>

        {/* Bottom Text */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            © {new Date().getFullYear()} MyWebsite. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer