import React, { Component } from 'react';
// import VideoListItem from '../main_page/video_list_item';
import SearchResultListItem from './Search_Result_List_Item';

class SearchResultList extends Component {
  render() {
    const videos = this.props.searchResultVideos.map(video => {
      return(
        // <VideoListItem video={video} />
        <SearchResultListItem video={video} />
      )
    })

    return (
      <div className="container">
        <ul className="list-inline">
          <h5>Results</h5>
          <hr />
          <br></br>
          {videos}
        </ul>
      </div>
    )
  }
}

export default SearchResultList;
