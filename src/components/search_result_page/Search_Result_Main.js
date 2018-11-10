import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchResultList from './Search_Result_List';
// import api_key from '../../keys';

const API_KEY = 'AIzaSyCVx1MIW75Ju15aOywc7J2Qi3psN0Os5kw';

class SearchResultMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResultVideos: []
    }
  }

  componentDidMount() {
    this.videoSearch(this.props.location.state.search.search)
  }

  componentWillReceiveProps(nextProps) { //For when I type in new search requests
    if(nextProps !== this.props) {
      this.videoSearch(nextProps.location.state.search.search)
    }
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
        <SearchResultList searchResultVideos={this.state.searchResultVideos} />
      </div>
    )
  }
}

export default SearchResultMain;
