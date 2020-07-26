import React, { Component } from 'react'
import {Grid} from '@material-ui/core';
import { SearchBar, VideoList, VideoDetail } from './components';

import youtube from './api/youtube'

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  componentDidMount(){
    this.handleSubmit('reactjs');
  }
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet', 
        maxResult: 5,
        key: 'AIzaSyAXHPwvHWt-2ybaPKDj9xtXwbiP8wuRmY0',
        q: searchTerm,
      }
    });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
  }
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }
  render() {
    const {selectedVideo, videos} = this.state;
    return (
      <div>
        <Grid item xs={12}>
          <SearchBar onFormSubmit={this.handleSubmit}/>
        </Grid>
        <div style={{display: 'flex', justifyContent: 'spaceAround'}}>
          <VideoDetail video={selectedVideo} />
          <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
        </div>  
      </div>
    )
  }
}

export default App
