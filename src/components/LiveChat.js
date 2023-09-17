import { useEffect, useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import ChatMessage from './ChatMessage';
import {
  LIVE_CHATTING_NAME,
  generateRandomComment,
  generateRandomName,
} from '../utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('');
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      // API Polling
      //console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomComment(),
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='border border-gray-400 rounded-lg py-2 w-[22rem] mx-2 h-[550px]'>
      <div className='flex justify-between items-center border-b-[1px] border-gray-300'>
        <span className='flex p-2 pl-3 my-1 items-center'>
          Top Chat
          <span className='pl-1 text-md'>
            <AiOutlineDown />
          </span>
        </span>
        <span className='p-2 pr-3 my-1 text-lg'>
          <BsThreeDotsVertical />
        </span>
      </div>
      <div className='border-b-[1px] border-gray-300 h-[400px] overflow-y-scroll flex flex-col-reverse'>
        {ChatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <div className='flex items-center h-[90px]'>
        <form
          className='flex'
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: LIVE_CHATTING_NAME,
                message: liveMessage,
              })
            );
            setLiveMessage('');
          }}
        >
          <input
            className='p-2 m-2 border-b  w-60'
            placeholder='Chat...'
            type='text'
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className='p-2 m-2 border w-20 rounded-lg bg-gray-200 hover:bg-gray-300'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
