import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import './index.css'
import { Grid } from '@mui/material';
import { Box

} from '@mui/material';
function Slider() {
    const carouselStyle = {
        width: '10%',
      };
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: "https://images.pexels.com/photos/12050940/pexels-photo-12050940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]
    return (
    <Box sx={{
        display:'flex',
        bgcolor:'#F6F8FA',
    }}>    
    <Grid container spacing={1}>
    <Grid item lg={12} md={12} className='hidden' >  
    <Carousel animation = "fade" fullHeightHover = {true}>
        {
            items.map( (item, i) => <Item key={i} item={item} /> )
        }
    </Carousel>
    </Grid>  
    </Grid>
    </Box>);
}

function Item(props)
{
    return (
        <Paper sx={{color:'white'}}>
            {/* <h2>{props.item.name}</h2> */}
            <div className='container'>
                <img src={props.item.image} alt={props.item.name}></img>
                <div class="hero-text">
                <div className='slider-content-head'>Welcome To Racer X</div>
                <div class="hero-subtitle">2023</div>
                <button class="hero-button" onClick={()=>{
                    alert('button clicked')
                }}>Click Me</button>
                </div>
            </div>
            
            
            {/* <p>{props.item.description}</p> */}
        </Paper>
    )
}

export default Slider;