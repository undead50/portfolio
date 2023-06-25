import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box,Paper,Container } from '@mui/material';

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
        image: "https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 5,
      name: "Random Name #5",
      description: "Probably the most random thing you have ever seen!",
      image: "https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    name: "Random Name #6",
    description: "Probably the most random thing you have ever seen!",
    image: "https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}
   ]

    
    return (
      <Container>
        <Box 
        bgcolor='#F6F8FA'
        sx={{display:'flex',
        flexDirection:{md:'row',sm:'column',xs:'column',lg:'row'},
        gap: 3,
        flexWrap:'wrap',
        justifyContent:'center',
        mb:4,mt:2}}
        >    
                {cards.map((card) => {
                return (
                  <Paper elevation={4} >
                    <Grid>
                        <CardList card={card}/>
                    </Grid>
                    </Paper>       
                );
                })}
                
            
        </Box>
        </Container>
    ) 
}

const CardList = (props)=> {
    return(

    <Card sx={{width:300}}>
      <CardMedia
        sx={{ height: 320}}
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
        <Button size="small" variant="outlined" sx= {{mt:0,mb:1,}} >Learn More</Button>
      </CardActions>
    </Card>
     )   
}


export default CardBar;