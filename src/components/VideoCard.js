import React from 'react';
import { calculateTimeDifference } from '../utils/helper';
import { Link } from 'react-router-dom';

const VideoCard = ({ info }) => {
  //   console.log(info);
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  const formattedTime = calculateTimeDifference(publishedAt);

  return (
    // if you want to put shadow then put this " shadow-[-1px_5px_10px_5px_rgba(42,42,42,0.2)]  "
    <div className='cursor-pointer h-[335px] w-[389px] p-2 m-2 '>
      <img
        className='rounded-md w-full mb-1'
        src={thumbnails?.medium?.url}
        alt={channelTitle}
      />

      <div>
        <h3 className='font-semibold px-2 text-base line-clamp-2 '>{title}</h3>
        <div>
          <h2 className='text-sm px-2 py-1'>{channelTitle}</h2>
          <div className='flex items-center'>
            <h2 className='text-sm px-2 py-1'>
              {statistics?.viewCount < 1000
                ? statistics?.viewCount
                : statistics?.viewCount < 1000000
                ? `${(statistics?.viewCount / 1000).toFixed(1)}K views`
                : `${(statistics?.viewCount / 1000000).toFixed(1)}M views`}
            </h2>
            <h2 className='mx-1'>•</h2>
            <h2 className='text-sm py-1'>{formattedTime}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

// This is called Higher order components, it use the same card but with little change in it
export const AdVideoCard = ({ info }) => {
  return (
    <div className='border border-gray-300'>
      <Link to={'/watch?v=' + info.id} key={info.id}>
        <VideoCard info={info} />
      </Link>
    </div>
  );
};

export default VideoCard;
