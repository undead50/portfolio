import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

function CardBar() {

    const cards = [{
        id: 1,
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
    },
    {
        id: 2,
        name: "Random Name #2",
        description: "Probably the most random thing you have ever seen!",
        image: "https://images.pexels.com/photos/12050940/pexels-photo-12050940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        name: "Random Name #3",
        description: "Probably the most random thing you have ever seen!",
        image: "https://images.pexels.com/photos/12050940/pexels-photo-12050940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 4,
        name: "Random Name #4",
        description: "Probably the most random thing you have ever seen!",
        image: "https://images.pexels.com/photos/12050940/pexels-photo-12050940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
   ]

    
    return (
        
        <Box 
        p = {9}
        bgcolor='#F6F8FA'
        >
            <Grid container spacing={4} display="flex"  justifyContent="center">
                
                {cards.map((card) => {
                return (
                    <Grid item  xs={6} md={4} lg={4}>
                        <CardList card={card} />
                    </Grid>    
                );
                })}
                
            </Grid> 
        </Box>
    ) 
}

const CardList = (props)=> {
    return(

    <Card sx={{ maxWidth: 500, height: 500 }}>
      <CardMedia
        sx={{ height: 340 }}
        image={props.card.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.card.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.card.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" >Learn More</Button>
      </CardActions>
    </Card>
     )   
}


export default CardBar;