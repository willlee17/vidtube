import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class MovieVideoList extends Component {
  render() {
    const videos = this.props.movieVideos.map(movieVideo => {
      return(
        <VideoListItem video={movieVideo} />
      )
    })

    return (
      <div className="container">
        <ul className="list-inline">
          Movie Videos
          {videos}
        </ul>
      </div>
    )
  }
}

export default MovieVideoList;
