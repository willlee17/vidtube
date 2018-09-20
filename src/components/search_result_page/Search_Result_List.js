import React, { Component } from 'react';
import VideoListItem from '../main_page/video_list_item';


class SearchResultList extends Component {
  render() {
    const videos = this.props.searchResultVideos.map(video => {
      return(
        <VideoListItem video={video} />
      )
    })

    return (
      <div className="container">
        <ul className="list-inline">
          Searched Videos
          {videos}
        </ul>
      </div>
    )
  }
}

export default SearchResultList;
