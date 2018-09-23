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
      <div className="container videos-list d-flex flex-wrap row-hl">
        <ul className="list-inline">
        <h4>Movies</h4>
          {videos}
        </ul>
      </div>
    )
  }
}

export default MovieVideoList;
