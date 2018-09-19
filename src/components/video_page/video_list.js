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
    <ul className="col-md-4 list-group">
      <h3>Related Videos</h3>
      {videoItems}
    </ul>
  )
}

export default VideoList
