import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import api_key from '../../keys'
import SearchResultList from './Search_Result_List';

const API_KEY = api_key;

class SearchResultTrending extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchResultVideos: [],
    }
  }

  componentDidMount() {
    this.videoSearch();
  }

  videoSearch = () => {
    // Trending
    YTSearch({ key: API_KEY, term: ""}, (videos) => {
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

export default SearchResultTrending;
