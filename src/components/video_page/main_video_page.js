import React, { Component } from 'react';
import SearchBar from './searchbar.js';
import VideoList from './video_list.js';
import YTSearch from 'youtube-api-search';
import VideoDetail from './video_detail.js';
import _ from 'lodash';
import api_key from '../../keys'

const API_KEY = api_key;

class MainVideoPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
    }
    const videoTitle = this.props.location.state.videoTitle
    this.videoSearch(videoTitle);
  }

  videoSearch = (term) => {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300)
    const { videoToSend } = this.props.location.state
    console.log(videoToSend)
    return (
        <div className="App">
          <SearchBar onSearchTermChange={videoSearch}/>
          <VideoDetail video={videoToSend}/>
          <VideoList videos={this.state.videos}/>
        </div>
    );
  }
}

export default MainVideoPage;
