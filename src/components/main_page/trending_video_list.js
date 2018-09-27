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
      <div className="container videos-list-trending d-flex justify-content-between flex-wrap row-hl" style={{marginLeft: "15px"}}>
        <h4> Trending </h4>
        <ul className="list-inline ">
          {videos}
        </ul>
      </div>
    )
  }
}

export default TrendingVideoList;
