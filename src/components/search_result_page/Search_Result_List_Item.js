import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchResultListItem extends Component {
  render() {
    const imgURL = this.props.video.snippet.thumbnails.default.url;
    const videoTitle = this.props.video.snippet.title;
    const videoToSend = this.props.video;
    const videoChannelTitle = this.props.video.snippet.channelTitle;
    const videoDescription = this.props.video.snippet.description;

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
          <div className="video-list media" style={{marginBottom: "20px"}}>
              <div style={{marginRight: "15px"}}>
                <img className="media-object" src = {imgURL}/>
              </div>
              <div className="media-info">
                <div className="search-result-title">{videoTitle}</div>
                <div className="search-result-channel-title">{videoChannelTitle}</div>
                <br></br>
                <div className="search-result-description">{videoDescription}</div>
              </div>
          </div>
        </Link>
      </li>
    )
  }
}

export default SearchResultListItem
