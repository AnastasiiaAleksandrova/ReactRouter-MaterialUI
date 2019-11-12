import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

let posts = require('../../stub.json')

export default function Post(props) {
  let post = posts.find(p => p.id === props.match.params.id);

  return (
    <div style={{textAlign:'center', marginBottom:'100px', height:'565px'}}>
      <h1>{post.title}</h1>
        <div>
          <img src={post.img} style={{width:'50%', float: 'left', margin: '20px'}}/>
        </div>
        <p style={{marginTop: '40px', textAlign: 'left'}}>{post.text}</p>
        <CardActions>
          <Link to={'/'}>
            <Button style={{padding:'5px'}}>
              Back
            </Button>
          </Link>
        </CardActions>
    </div>
    )
}


