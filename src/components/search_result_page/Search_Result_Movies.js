import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import MovieVideoList from '../main_page/movie_video_list';

const API_KEY = 'AIzaSyCVx1MIW75Ju15aOywc7J2Qi3psN0Os5kw';

class SearchResultMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
        moviesVideos: [],
    }
    this.videoSearch()
  }

  videoSearch = () => {
    // Music
    YTSearch({ key: API_KEY, term: "movies"}, (videos) => {
      this.setState({
        moviesVideos: videos,
      })
    })
  }

  render() {
    return(
      <div className="container">
        <h1>Movies Videos</h1>
        <MovieVideoList movieVideos={this.state.moviesVideos} />
      </div>
    )
  }
}

export default SearchResultMovies;
