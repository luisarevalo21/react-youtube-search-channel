import { useState } from "react";
import Header from "./Header";
import VideoItem from "./VideoItem";

import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectChannel, setSelectedChannel] = useState("UCi8e0iOVk1fEOogdfu4YgfA");
  const [searchValue, setSearchValue] = useState("");

  const fetchYoutubeData = () => {
    if (searchValue !== "" && selectChannel !== "") {
      fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${
          import.meta.env.VITE_API_KEY
        }&channelId=${selectChannel}&q=${searchValue}&part=snippet`
      )
        .then(res => res.json())
        .then(data => {
          const { items } = data;

          if (items.length === 0) {
            setVideos([]);
            return;
          }
          const videos = items.map(video => {
            console.log("video after fetch", video);
            return {
              id: video.id.videoId,
              description: video.snippet.description,
              title: video.snippet.title,
              image: video.snippet.thumbnails,
            };
          });
          setVideos(videos);
        });
    }
  };

  const handleSelectChange = value => {
    setSelectedChannel(value);
  };
  const handleInputChange = searchValue => {
    setSearchValue(searchValue);
  };
  const handleSearch = () => {
    if (searchValue !== "") fetchYoutubeData();
  };

  const videoItems = videos.map(video => {
    console.log("video id", video.id);
    return <VideoItem key={video.id} title={video.title} image={video.image} videoId={video.id} />;
  });

  return (
    <>
      <Header
        handleSelectChange={handleSelectChange}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
        selectChannel={selectChannel}
      />
      <h1>Movie Titles</h1>
      <div className="video-items-container">{videoItems}</div>
      {videos.length === 0 && (
        <>
          <div className="search-for-videos">
            <p>Search for videos</p>
          </div>
        </>
      )}

      {videos.length === 0 && (
        <div className="no-videos-found">
          <p>No videos found try searching again</p>
        </div>
      )}
    </>
  );
}

export default App;
