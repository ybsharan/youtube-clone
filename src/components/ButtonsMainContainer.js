import React from 'react';

const ButtonsMainContainer = ({title}) => {
  return (
    <div>
      {' '}
      <button className='border py-[2px] px-3 mx-1 bg-gray-100 hover:bg-gray-200  rounded-lg'>
        {title}
      </button>
    </div>
  );
};

export default ButtonsMainContainer;
