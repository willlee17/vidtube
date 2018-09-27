import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import GameVideoList from '../main_page/game_video_list';
import api_key from '../../keys'
import SearchResultList from './Search_Result_List';

const API_KEY = api_key;

class SearchResultGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchResultVideos: [],
    }
    this.videoSearch()
  }

  videoSearch = () => {
    // Music
    YTSearch({ key: API_KEY, term: "games"}, (videos) => {
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

export default SearchResultGames;
