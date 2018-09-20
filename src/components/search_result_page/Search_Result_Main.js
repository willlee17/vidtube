import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchResultList from './Search_Result_List';

const API_KEY = 'AIzaSyCVx1MIW75Ju15aOywc7J2Qi3psN0Os5kw';

class SearchResultMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResultVideos: []
    }
    this.videoSearch(this.props.location.state.search.search)
  }

  videoSearch = (term) => {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        searchResultVideos: videos,
      })
    })
  }

  render() {
    const searchResult = this.props.location.state.search.search
    return(
      <div>
        <h1>Search Result: {searchResult} </h1>
        <SearchResultList searchResultVideos={this.state.searchResultVideos} />
      </div>
    )
  }
}

export default SearchResultMain;
