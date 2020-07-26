import React from 'react';
import {Typography} from '@material-ui/core';
import styles from './VideoDetail.module.css';

const VideoDetail = ({video}) => {
  if(!video) return <div className={styles.loading}>Loading...</div>
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return(
    <div className={styles.videoDetail}>  
      <iframe 
        className={styles.iframe} 
        frameBorder="0" 
        height="100%" 
        width="100%" 
        title="Video Player" 
        src={videoSrc} 
      />
      <div className={styles.text}>
        <Typography variant="h5">{video.snippet.title}</Typography>
        <Typography variant="h6">{video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle1">{video.snippet.description}</Typography>
      </div>
    </div>
  )
}

export default VideoDetail;