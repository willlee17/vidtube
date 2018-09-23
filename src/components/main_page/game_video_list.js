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
      <div className="container videos-list d-flex flex-wrap row-hl">
        <ul className="list-inline">
        <h4>Games</h4>
          {videos}
        </ul>
      </div>
    )
  }
}

export default GameVideoList;
