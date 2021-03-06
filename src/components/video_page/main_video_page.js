import React, { Component } from 'react';
import VideoList from './video_list.js';
import YTSearch from 'youtube-api-search';
import VideoDetail from './video_detail.js';
import _ from 'lodash';
// import api_key from '../../keys'

const API_KEY = 'AIzaSyCVx1MIW75Ju15aOywc7J2Qi3psN0Os5kw';

class MainVideoPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
    }
  }

  componentDidMount() {
    this.videoSearch(this.props.location.state.videoTitle)
  }

  videoSearch = (term) => {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
      })
    })
  }

  render() {
    const { videoToSend } = this.props.location.state
    return (
        <div className="App d-flex justify-content-around row-hl container" style={{marginTop: "25px"}}>
          <VideoDetail video={videoToSend}/>
          <VideoList videos={this.state.videos}/>
        </div>
    );
  }
}

export default MainVideoPage;
