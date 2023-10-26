import React from "react";
const VideoItem = props => {
  const url = `https://www.youtube.com/watch?v=${props.videoId}`;

  return (
    <div className="video-item">
      <a className="url-link" href={url} target="_blank">
        <img src={props.image.high.url} alt="thumbnail" className="video-item-image" />
        <p>{props.title}</p>
      </a>
    </div>
  );
};

export default VideoItem;
