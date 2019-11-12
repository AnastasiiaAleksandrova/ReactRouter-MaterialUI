import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '50px',
    flexGrow: 1,
    height: '700px',
    maxWidth:'1324px'
  },
  card: {
    margin: '25px',
    width: '280px'
  },
  media: {
    height: '140px'
  }
}));


export default function Main() {
  const classes = useStyles();

  let posts = require("../../stub.json");

  return (
    <Grid container className={classes.root} >
      <Grid item xs={12} >
        <Grid container justify="center"  xm={12}>

          {posts.map((el, value) => (
              <Card key={el.id} className={classes.card}>
                <CardActionArea>
                  <CardMedia
                  className={classes.media}
                  image= {el.img}
                  title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {el.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {el.shortly}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={`/post/${el.id}`}>
                    <Button size="small" color="primary">Learn More</Button>
                  </Link>
                </CardActions>
              </Card>  
             ))}

        </Grid>
      </Grid>
    </Grid>
  );
}