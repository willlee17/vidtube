import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class GameVideoList extends Component {
  render() {
    const videos = this.props.gameVideos.map(gameVideo => {
      return(
        <VideoListItem video={gameVideo} />
      )
    })

    return (
      <div className="container">
        <ul className="list-inline">
          Game Videos
          {videos}
        </ul>
      </div>
    )
  }
}

export default GameVideoList;
