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
      <div className="container">
        <ul className="list-inline">
          Music Videos
          {videos}
        </ul>
      </div>
    )
  }
}

export default MusicVideoList;
