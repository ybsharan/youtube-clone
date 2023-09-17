import React from 'react';
import { Link } from 'react-router-dom';
import { GoHomeFill, GoHistory } from 'react-icons/go';
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md';
import { BsPlayCircle } from 'react-icons/bs';

const IconSidebarButton = ({ icon }) => {
  return (
    <div>
      <button className='flex my-4 justify-start items-center px-3 rounded-lg hover:bg-gray-200'>
        <span className='text-2xl p-1 my-2'>{icon}</span>
      </button>
    </div>
  );
};

const IconSidebar = () => {
  return (
    <div className='w-[150px] mr-10 overflow-y-auto overflow-x-hidden h-[80vh]'>
      <div>
        <Link to='/'>
          <IconSidebarButton icon={<GoHomeFill />} />
        </Link>
      </div>
      <div>
        <IconSidebarButton icon={<BsPlayCircle />} />
      </div>
      <div>
        <IconSidebarButton icon={<MdOutlineSubscriptions />} />
      </div>

      <div>
        <IconSidebarButton icon={<MdOutlineVideoLibrary />} />
      </div>
      <div>
        <IconSidebarButton icon={<GoHistory />} />
      </div>
    </div>
  );
};

export default IconSidebar;
