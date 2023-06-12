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
     <Box sx={{ bgcolor: 'background.paper', p: 3,backgroundColor:'#001E3C',color:'white'}} component="footer">
     <Typography variant="h6" align="center" gutterBottom>
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
  );
}