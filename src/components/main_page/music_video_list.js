import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class MusicVideoList extends Component {
  render() {
    const videos = this.props.musicVideos.map(musicVideo => {
      return(
        <VideoListItem video={musicVideo} />
      )
    })

    return (
      <div className="container videos-list d-flex flex-wrap row-hl">
        <h4> Music </h4>
        <ul className="list-inline">
          {videos}
        </ul>
      </div>
    )
  }
}

export default MusicVideoList;
