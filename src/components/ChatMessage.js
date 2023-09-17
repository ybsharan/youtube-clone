import { BiSolidUserCircle } from 'react-icons/bi';

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center p-2 py-3 bg-gray-100'>
      <span className='text-lg ml-1 mr-2'>
        <BiSolidUserCircle />
      </span>
      <span className='mr-2 font-bold text-sm'>{name}</span>
      <span className='text-sm'>{message}</span>
    </div>
  );
};

export default ChatMessage;
