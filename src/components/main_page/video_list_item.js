import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VideoListItem extends Component {
  render() {
    const imgURL = this.props.video.snippet.thumbnails.default.url;
    const videoTitle = this.props.video.snippet.title;
    const videoToSend = this.props.video;
    const videoChannelTitle = this.props.video.snippet.channelTitle;

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
            <div>
              <div>
                <img className="media-object" src = {imgURL}/>
              </div>
              <div className="media-info">
                <div className="media-info-title">{videoTitle}</div>
                <div className="media-info-channel-title">{videoChannelTitle}</div>
              </div>
            </div>
          </div>
        </Link>
      </li>
    )
  }
}

export default VideoListItem
