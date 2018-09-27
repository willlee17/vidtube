import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class SportsVideoList extends Component {
  render() {
    const videos = this.props.sportsVideos.map(sportsVideo => {
      return(
        <VideoListItem video={sportsVideo} />
      )
    })

    return (
      <div className="container videos-list d-flex justify-content-between flex-wrap row-hl" style={{marginLeft: "15px"}}>
        <ul className="list-inline">
          <h4> Sports </h4>
          {videos}
        </ul>
      </div>
    )
  }
}

export default SportsVideoList;
