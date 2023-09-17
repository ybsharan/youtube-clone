import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='flex mx-2 mt-2'>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
