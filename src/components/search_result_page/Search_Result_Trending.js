import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import TrendingVideoList from '../main_page/trending_video_list';

const API_KEY = 'AIzaSyCVx1MIW75Ju15aOywc7J2Qi3psN0Os5kw';

class SearchResultTrending extends Component {
  constructor(props) {
    super(props);
    this.state = {
        trendingVideos: [],
    }
    this.videoSearch()
  }

  videoSearch = () => {
    // Trending
    YTSearch({ key: API_KEY, term: ""}, (videos) => {
      this.setState({
        trendingVideos: videos,
      })
    })
  }

  render() {
    return(
      <div className="container">
        <h1>Trending Videos</h1>
        <TrendingVideoList trendingVideos={this.state.trendingVideos} />
      </div>
    )
  }
}

export default SearchResultTrending;
