import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class TrendingVideoList extends Component {
  render() {
    const videos = this.props.trendingVideos.map(trendingVideo => {
      return(
        <VideoListItem video={trendingVideo} />
      )
    })

    return (
      <div className="container">
        <ul className="list-inline">
          Trending Videos
          {videos}
        </ul>
      </div>
    )
  }
}

export default TrendingVideoList;
