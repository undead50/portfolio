import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Container } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <Container maxWidth={false}  disableGutters={true} sx={{backgroundColor:'#001E3C'}}>
     <Box p = {6}>
     <Typography variant="h6" align="center" sx={{color:"white"}}>
       Footer
     </Typography>
     <Typography
       variant="subtitle1"
       align="center"
       color="white"
       component="p"
     >
       Something here to give the footer a purpose!
     </Typography>
     <Copyright />
   </Box>
   </Container>
  );
}