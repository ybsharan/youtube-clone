import React, { useEffect, useState } from 'react';
import VideoCard, { AdVideoCard } from './VideoCard';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const getYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
    // console.log(json);
  };

  return (
    <div>
      {videos?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className='flex flex-wrap mx-1 mt-3 overflow-y-scroll no-scrollbar h-[85vh]'>
          {videos[0] && <AdVideoCard info={videos[49]} />}
          {videos.map((video) => (
            <Link to={'/watch?v=' + video.id} key={video.id}>
              <VideoCard info={video} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
