import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import MusicVideoList from '../main_page/music_video_list';
import api_key from '../../keys';
import SearchResultList from './Search_Result_List';



const API_KEY = api_key;

class SearchResultMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchResultVideos: [],
    }
    this.videoSearch()
  }

  videoSearch = () => {
    // Music
    YTSearch({ key: API_KEY, term: "music"}, (videos) => {
      this.setState({
        searchResultVideos: videos,
      })
    })
  }

  render() {
    return(
      <div className="container">
        <SearchResultList searchResultVideos={this.state.searchResultVideos} />
      </div>
    )
  }
}

export default SearchResultMusic;
