import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
         key={video.etag}
         video={video} />
    )
  })

  return(
    <ul className="col-md-4 list-group related-videos shadow-lg">
      <h6 style={{marginLeft: "20px", marginTop: "20px"}}>Related Videos</h6>
      {videoItems}
    </ul>
  )
}

export default VideoList
