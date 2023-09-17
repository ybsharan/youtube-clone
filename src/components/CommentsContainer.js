import React from 'react';
import { PiUserCircleDuotone } from 'react-icons/pi';
import {
  generateRandomComment,
  generateRandomName,
  generateRandomLike,
} from '../utils/helper';
import { BiLike, BiDislike } from 'react-icons/bi';

const commentsData = [
  {
    name: 'Lord Shiva',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [],
  },
  {
    name: 'Lord Shiva',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Lord Shiva',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [],
      },
      {
        name: 'Lord Shiva',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [
          {
            name: 'Lord Shiva',
            text: 'Lorem ipsum dolor sit amet, consectetur adip',
            replies: [
              {
                name: 'Lord Shiva',
                text: 'Lorem ipsum dolor sit amet, consectetur adip',
                replies: [
                  {
                    name: 'Lord Shiva',
                    text: 'Lorem ipsum dolor sit amet, consectetur adip',
                    replies: [
                      {
                        name: 'Lord Shiva',
                        text: 'Lorem ipsum dolor sit amet, consectetur adip',
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: 'Lord Shiva',
                    text: 'Lorem ipsum dolor sit amet, consectetur adip',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Lord Shiva',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [],
  },
  {
    name: 'Lord Shiva',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Lord Shiva',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [
          {
            name: 'Lord Shiva',
            text: 'Lorem ipsum dolor sit amet, consectetur adip',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Lord Shiva',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Lord Shiva',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [
          {
            name: 'Lord Shiva',
            text: 'Lorem ipsum dolor sit amet, consectetur adip',
            replies: [
              {
                name: 'Lord Shiva',
                text: 'Lorem ipsum dolor sit amet, consectetur adip',
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Lord Shiva',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Lord Shiva',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className='flex  p-2 rounded-lg my-2'>
      <span className='text-4xl'>
        <PiUserCircleDuotone />
      </span>
      <div className='px-3'>
        <p className='font-bold text-sm'>{generateRandomName()}</p>
        <p className='text-xs'>{generateRandomComment()}</p>
        <div className='flex items-center'>
          <span className='flex items-center m-1 '>
            <span className='text-xl px-2 rounded-full hover:bg-gray-200'>
              <BiLike />
            </span>
            <span className=''>{generateRandomLike()}</span>
          </span>
          <span className=' text-xl px-2 rounded-full hover:bg-gray-200'>
            <BiDislike />
          </span>

          <span className='text-xs font-bold ml-2'>Reply</span>
        </div>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className='pl-4 border-black border-l-[1px] ml-5'>
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className='w-[940px] mr-12'>
      <div className='my-3 mr-10'>
        <div className='font-semibold text-xl border-b-2 py-1'>Comments</div>
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
