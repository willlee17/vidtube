import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import MovieVideoList from '../main_page/movie_video_list';
// import api_key from '../../keys';
import SearchResultList from './Search_Result_List';


const API_KEY = 'AIzaSyCVx1MIW75Ju15aOywc7J2Qi3psN0Os5kw';

class SearchResultMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchResultVideos: [],
    }
    this.videoSearch()
  }

  videoSearch = () => {
    // Music
    YTSearch({ key: API_KEY, term: "movies"}, (videos) => {
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

export default SearchResultMovies;
