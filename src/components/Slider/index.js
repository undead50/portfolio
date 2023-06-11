import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import './index.css'
import Container from '@mui/material/Container';

function Slider() {
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
        <Container maxWidth="sm">
    <Carousel>
        {
            items.map( (item, i) => <Item key={i} item={item} /> )
        }
    </Carousel> </Container> );
}

function Item(props)
{
    return (
        <Paper>
            {/* <h2>{props.item.name}</h2> */}
            <div className='container'>
            <img src={props.item.image} alt={props.item.name}></img>
            </div>
            
            {/* <p>{props.item.description}</p> */}
        </Paper>
    )
}

export default Slider;