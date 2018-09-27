import React from 'react';

const VideoDetail = (props) => {
  if(!props.video) {
    return <div>Loading...</div>
  }
  const videoId = props.video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <br></br>
      <div className="details">
        <div style={{fontSize: "20px"}}>{props.video.snippet.title}</div>
        by: {props.video.snippet.channelTitle}
        <hr />
        More info:
        <div  style={{fontSize: "15px"}}>{props.video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail
