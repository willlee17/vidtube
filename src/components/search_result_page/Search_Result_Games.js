import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import GameVideoList from '../main_page/game_video_list';
import api_key from '../../keys'

const API_KEY = api_key;

class SearchResultGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
        gamesVideos: [],
    }
    this.videoSearch()
  }

  videoSearch = () => {
    // Music
    YTSearch({ key: API_KEY, term: "games"}, (videos) => {
      this.setState({
        gamesVideos: videos,
      })
    })
  }

  render() {
    return(
      <div className="container">
        <h1>Games Videos</h1>
        <GameVideoList gameVideos={this.state.gamesVideos} />
      </div>
    )
  }
}

export default SearchResultGames;
