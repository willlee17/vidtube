import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VideoListItem extends Component {
  render() {
    const imgURL = this.props.video.snippet.thumbnails.default.url;
    const videoTitle = this.props.video.snippet.title;
    const videoToSend = this.props.video;

    return(
      <li className="list-inline-item">
        <Link to={{
          pathname: '/main_video/',
          state:
          {
            videoToSend: videoToSend,
            videoTitle: videoTitle,
          }
        }}>
          <div className="video-list media">
            <div className="media-left">
              <img className="media-object" src = {imgURL}/>
            </div>
            <div className="media-body">
              <div className="media-heading">{videoTitle}</div>
            </div>
          </div>
        </Link>
      </li>
    )
  }
}

export default VideoListItem
