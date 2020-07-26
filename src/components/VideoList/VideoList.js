import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import styles from './VideoList.module.css';

const VideoList = ({videos, onVideoSelect}) => {
  const listOfVideos = videos.map((video, id) => <VideoItem key={id} video={video} onVideoSelect={onVideoSelect}/>)
    return (
      <div className={styles.listOfVideos}>
        {listOfVideos}
      </div>
    )
}

export default VideoList
