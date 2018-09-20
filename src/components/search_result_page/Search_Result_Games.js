import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import GameVideoList from '../main_page/game_video_list';

const API_KEY = 'AIzaSyCVx1MIW75Ju15aOywc7J2Qi3psN0Os5kw';

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
