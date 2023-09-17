import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { BsCheckCircleFill } from 'react-icons/bs';
import { LiaDownloadSolid } from 'react-icons/lia';
import { PiShareFat } from 'react-icons/pi';
import { BiLike, BiDislike, BiDotsHorizontalRounded } from 'react-icons/bi';
import { YOUTUBE_API_KEY } from '../utils/constants';
import {
  formatLikeCount,
  calculateTimeDifference,
  formatViewCount,
  formatSubscriberCount,
} from '../utils/helper';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get('v'));
  const [videoInfo, setVideoInfo] = useState([]);
  const [channelInfo, setChannelInfo] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getVideoInfo();
  }, [searchParams]);

  const getVideoInfo = async () => {
    const videoId = searchParams.get('v');
    const data = await fetch(
      `https://corsproxy.io/?https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${YOUTUBE_API_KEY}&part=snippet,statistics`
    );

    const json = await data.json();
    // console.log(json);

    setVideoInfo(json);

    // Check if videoInfo contains data before attempting to get the channelId
    if (json.items && json.items.length > 0) {
      const channelId = json.items[0].snippet.channelId;

      // Now you can fetch the channel info with the channelId
      const channelData = await fetch(
        `https://corsproxy.io/?https://www.googleapis.com/youtube/v3/channels?id=${channelId}&key=${YOUTUBE_API_KEY}&part=snippet,statistics`
      );
      const channelJson = await channelData.json();
      setChannelInfo(channelJson);
      // console.log(channelJson);
    }
  };

  return (
    <div>
      <div className='flex mt-2'>
        <div className='ml-15'>
          <iframe
            className='rounded-md mr-2'
            width='940'
            height='550'
            src={'https://www.youtube.com/embed/' + searchParams.get('v')}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <LiveChat />
        </div>
      </div>
      <div className=' w-[940px] mr-12 my-2'>
        <div className='py-2 text-lg font-semibold'>
          {videoInfo.items && videoInfo.items.length > 0
            ? videoInfo.items[0].snippet.title
            : null}
        </div>
        <div className='flex justify-between items-center py-1.5'>
          <div className='flex items-center'>
            <span className='text-5xl rounded-full'>
              {channelInfo.items && channelInfo.items.length > 0 ? (
                <img
                  className='h-10 w-10 rounded-full border'
                  src={channelInfo.items[0].snippet.thumbnails.default.url}
                  alt='logo'
                />
              ) : null}
            </span>
            <span className='flex items-center mx-3'>
              <span className='flex flex-col'>
                <span className='flex items-center font-semibold'>
                  {videoInfo.items && videoInfo.items.length > 0
                    ? videoInfo.items[0].snippet.channelTitle
                    : null}
                  <span className='text-xs pl-1'>
                    <BsCheckCircleFill />
                  </span>
                </span>
                <span className='text-xs'>
                  {channelInfo.items && channelInfo.items.length > 0
                    ? formatSubscriberCount(
                        channelInfo.items[0].statistics.subscriberCount
                      )
                    : null}{' '}
                  Subscribers
                </span>
              </span>
            </span>
            <button className='text-white bg-black hover:bg-gray-700 rounded-l-full rounded-r-full py-2 px-4'>
              Subscribe
            </button>
          </div>
          <div className=' px-4 py-2 flex items-center'>
            <span className='mx-2 rounded-r-full rounded-l-full bg-gray-100 hover:bg-gray-200 px-2 py-1 flex items-center'>
              <button className='flex items-center px-2 py-1'>
                <span className='px-1 text-lg'>
                  <BiLike />
                </span>
                {formatLikeCount(
                  videoInfo.items && videoInfo.items.length > 0
                    ? videoInfo.items[0].statistics.likeCount
                    : 0
                )}
              </button>
              <button className='flex items-center py-1 px-2 border-l-2 border-gray-500'>
                <span className='px-1 text-lg'>
                  <BiDislike />
                </span>
              </button>
            </span>

            <button className='mx-2 rounded-r-full rounded-l-full bg-gray-100 hover:bg-gray-200   px-2 py-1 flex items-center'>
              <span className='px-1 text-lg'>
                <PiShareFat />
              </span>
              Share
            </button>
            <button className='mx-2 rounded-r-full rounded-l-full bg-gray-100 hover:bg-gray-200 px-2 py-1 flex items-center'>
              <span className='px-1 text-lg'>
                <LiaDownloadSolid />
              </span>
              Download
            </button>
            <button className='mx-2 rounded-full bg-gray-100 hover:bg-gray-200  px-2 py-2 flex items-center'>
              <BiDotsHorizontalRounded />
            </button>
          </div>
        </div>
      </div>
      <div className='border w-[940px] mr-12 my-4 rounded-lg px-2 py-3 bg-gray-100'>
        <div>
          <span className='font-semibold px-2'>
            {videoInfo.items && videoInfo.items.length > 0
              ? formatViewCount(videoInfo.items[0].statistics.viewCount)
              : null}{' '}
            views
          </span>
          <span className='font-semibold text-md ml-3'>
            {videoInfo.items && videoInfo.items.length > 0
              ? calculateTimeDifference(videoInfo.items[0].snippet.publishedAt)
              : null}{' '}
          </span>
        </div>
        <div className='px-2 my-2'>
          {videoInfo.items && videoInfo.items.length > 0
            ? videoInfo.items[0].snippet.title
            : null}
        </div>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
