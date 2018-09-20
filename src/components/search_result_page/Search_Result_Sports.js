import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SportsVideoList from '../main_page/sports_video_list';

const API_KEY = 'AIzaSyCVx1MIW75Ju15aOywc7J2Qi3psN0Os5kw';

class SearchResultSports extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sportsVideos: [],
    }
    this.videoSearch()
  }

  videoSearch = () => {
    // Music
    YTSearch({ key: API_KEY, term: "sports"}, (videos) => {
      this.setState({
        sportsVideos: videos,
      })
    })
  }

  render() {
    return(
      <div className="container">
        <h1>Sports Videos</h1>
        <SportsVideoList sportsVideos={this.state.sportsVideos} />
      </div>
    )
  }
}

export default SearchResultSports;
