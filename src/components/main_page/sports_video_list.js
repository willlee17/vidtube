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
      <div className="container">
        <ul className="list-inline">
          Sports Videos
          {videos}
        </ul>
      </div>
    )
  }
}

export default SportsVideoList;
