import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import api_key from '../../keys';
import SearchResultList from './Search_Result_List';


const API_KEY = api_key;

class SearchResultSports extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchResultVideos: [],
    }
    this.videoSearch()
  }

  videoSearch = () => {
    // Music
    YTSearch({ key: API_KEY, term: "sports"}, (videos) => {
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

export default SearchResultSports;
