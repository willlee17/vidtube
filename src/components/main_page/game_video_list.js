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
      <div className="container videos-list d-flex  justify-content-between  flex-wrap row-hl"  style={{marginLeft: "15px"}}>
        <ul className="list-inline">
        <h4>Games</h4>
          {videos}
        </ul>
      </div>
    )
  }
}

export default GameVideoList;
