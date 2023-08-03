import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';




function Thought({title, description, image, imageAlt, link}) {
  if (link != "") {
    return (
    <Card className="thoughtcard" sx={{ display: 'flex', flexDirection: 'row', height: "100%", width: '100%'}}>
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            alt={imageAlt}
            image={image}
            height="100%"
          />
        </Grid>
        <Grid container item xs={12} md={8}>
          <CardContent className="cardcontent" sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', flex: '1', padding: '16px'}}>
            <Typography variant="body1" style={{fontSize: '0.9em' }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontSize: '0.7em'}}>
              {description}
            </Typography>
            <CardActions sx={{padding: '0'}}>
              <Button href={link} target="_blank" size="small" sx={{fontSize: '0.7em', paddingLeft: '0', textAlign: 'left'}}>Read More</Button>
            </CardActions>
          </CardContent>
        </Grid>
      </Card>
      )
  }
}

function MyThoughts(props) {
    return (
        <>
        <h3 style={{marginBottom: '1em', color: 'white'}} className="timeline-item"><i className="fa-regular fa-lightbulb timeline-item" style={{marginRight:"10px"}}></i>Thoughts</h3>
        <Grid container spacing={1}>
          {props.thoughts.map((thought, index) => 
          <Grid container item key={index} xs={12} sm={6} md={12}>
            <Thought 
            image={thought.image}
            imageAlt={thought.imageAlt}
            title={thought.title}
            description={thought.description}
            link={thought.link}
            />
          </Grid>
          )}
       </Grid>
        </>
    )
}


export default MyThoughts;