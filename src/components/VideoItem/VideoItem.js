import React from 'react';
import { Grid, Paper, Typography} from '@material-ui/core';
import styles from './VideoItem.module.css';

const VideoItem = ({video, onVideoSelect}) => {
  return (
    <Grid item xs={12}>
      <Paper 
        className={styles.paper} 
        onClick={() => onVideoSelect(video)}>
        <img 
          className={styles.image} 
          width="180px" 
          height="110px"  
          alt="thumbnail" 
          src={video.snippet.thumbnails.medium.url} 
        />
        <Typography className={styles.subtitle2} variant="subtitle2"><b>{video.snippet.title}</b></Typography>
      </Paper>
    </Grid>
  )
}

export default VideoItem;