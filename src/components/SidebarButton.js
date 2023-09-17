import React from 'react';

const SidebarButton = ({ icon, title }) => {
  return (
    <div>
      <button className='flex my-1 justify-start items-center w-10/12 p-2 rounded-lg hover:bg-gray-200'>
        <span className='text-2xl p-1'>{icon}</span>
        <span className='text-md p-1 ml-2 hover:font-semibold'>{title}</span>
      </button>
    </div>
  );
};

export default SidebarButton;
