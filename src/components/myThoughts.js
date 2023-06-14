import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import thoughts from '../thoughts.json';
import Grid from '@mui/material/Grid';

const thoughtsData = thoughts.thoughts;
console.log(thoughtsData);

function Thought({title, description, image, imageAlt, content, category, date, onThoughtClick}) {
  const handleClick = () => {
    onThoughtClick();
  }
  return (
  <Card sx={{ display: 'flex', flexDirection: 'row', height: {xs: '200px', sm: '220px', md: '160px', lg: '100%'}, width: '100%'}}>
      <Grid item xs={12} md={4}>
        <CardMedia
          component="img"
          alt={imageAlt}
          image={image}
          height="100%"
        />
      </Grid>
      <Grid item xs={12} md={8} sx={{display: 'flex',justifyContent: 'center'}}>
        <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: '1', padding: '16px'}}>
          <h5 variant="h5" component="div" className={'thought-title'} style={{marginBottom: '5px', fontSize: {lg: 15}}}>
            {title}
          </h5>
          <p variant="body2" color="text.secondary">
            {description}
          </p>
          <Button onClick={handleClick} size="small" sx={{fontSize: '0.7em', paddingLeft: '0', textAlign: 'left'}}>Read More</Button>
        </CardContent>
      </Grid>
    </Card>
    )
}

function MyThoughts({onThoughtClick}) {

    return (
        <>
        <h3 style={{marginBottom: '1em', color: 'white'}} className="timeline-item"><i className="fa-regular fa-lightbulb timeline-item" style={{marginRight:"10px"}}></i>Thoughts</h3>
        <Grid container spacing={1}>
          {thoughtsData.map((thought, index) => (
          <Grid container item key={index} xs={12} sm={6} md={12}>
            <Thought onThoughtClick={onThoughtClick} image={thought.image} imageAlt={thought.imageAlt} title={thought.title} description={thought.description} category={thought.category} date={thought.date}  />
          </Grid>
          ))}
       </Grid>
        </>
    )
}

export default MyThoughts;