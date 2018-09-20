import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import MusicVideoList from '../main_page/music_video_list';
import api_key from '../../keys'

const API_KEY = api_key;

class SearchResultMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
        musicVideos: [],
    }
    this.videoSearch()
  }

  videoSearch = () => {
    // Music
    YTSearch({ key: API_KEY, term: "music"}, (videos) => {
      this.setState({
        musicVideos: videos,
      })
    })
  }

  render() {
    return(
      <div className="container">
        <h1>Music Videos</h1>
        <MusicVideoList musicVideos={this.state.musicVideos} />
      </div>
    )
  }
}

export default SearchResultMusic;
