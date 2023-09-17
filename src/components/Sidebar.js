import { GoHomeFill, GoHistory } from 'react-icons/go';
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineFeedback,
  MdOutlineMusicNote,
} from 'react-icons/md';
import { BsPlayCircle, BsFire, BsNewspaper, BsFlag } from 'react-icons/bs';
import { BiSolidUserCircle, BiPlusCircle, BiHelpCircle } from 'react-icons/bi';
import {
  AiOutlineShopping,
  AiOutlineTrophy,
  AiOutlineBulb,
  AiOutlineSetting,
  AiOutlineYoutube,
  AiFillYoutube,
} from 'react-icons/ai';
import { PiFilmSlateBold } from 'react-icons/pi';
import { ImYoutube2 } from 'react-icons/im';
import { CiStreamOn } from 'react-icons/ci';
import { FaShop } from 'react-icons/fa6';
import { SiYoutubegaming } from 'react-icons/si';
import SidebarButton from './SidebarButton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IconSidebar from './IconSidebar';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //This is called Early Return Pattern
  if (!isMenuOpen) return <IconSidebar />;

  return (
    <div className='w-2/12 overflow-y-auto overflow-x-hidden h-[90vh]'>
      <div>
        <Link to='/'>
          <SidebarButton icon={<GoHomeFill />} title='Home' />
        </Link>
        <SidebarButton icon={<BsPlayCircle />} title='Shorts' />
        <SidebarButton
          icon={<MdOutlineSubscriptions />}
          title='Subscriptions'
        />
      </div>
      <hr />
      <div>
        <SidebarButton icon={<MdOutlineVideoLibrary />} title='Library' />
        <SidebarButton icon={<GoHistory />} title='History' />
      </div>
      <hr />
      <div className='flex flex-col m-5 ml-3'>
        <h1 className='font-sm text-base mb-4 '>
          Sign in to like videos, comment, and subscribe.
        </h1>
        <button className='w-6/12 flex justify-center items-center border-[1px] border-gray-300 hover:bg-blue-100 text-blue-700 font-semibold text-base p-2 h-[40px] rounded-full'>
          <span className='text-2xl'>
            <BiSolidUserCircle />
          </span>
          <span className='m-1'>Sign in</span>
        </button>
      </div>
      <hr />
      <div>
        <h1 className='text-xl mt-1'>Explore</h1>
        <SidebarButton icon={<BsFire />} title='Trending' />
        <SidebarButton icon={<AiOutlineShopping />} title='Shopping' />
        <SidebarButton icon={<MdOutlineMusicNote />} title='Music' />
        <SidebarButton icon={<PiFilmSlateBold />} title='Movies' />
        <SidebarButton icon={<CiStreamOn />} title='Live' />
        <SidebarButton icon={<SiYoutubegaming />} title='Gaming' />
        <SidebarButton icon={<BsNewspaper />} title='News' />
        <SidebarButton icon={<AiOutlineTrophy />} title='Sports' />
        <SidebarButton icon={<AiOutlineBulb />} title='Learning' />
        <SidebarButton icon={<FaShop />} title='Fashion & Beauty' />
      </div>
      <hr />
      <div>
        <SidebarButton icon={<BiPlusCircle />} title='Browse channels' />
      </div>
      <hr />

      <div>
        <h1 className='text-lg mt-2'>More From YouTube</h1>
        <SidebarButton
          icon={<ImYoutube2 className='text-red-600' />}
          title='YouTube Premium'
        />
        <SidebarButton
          icon={<AiOutlineYoutube className='text-red-600' />}
          title='YouTube Music'
        />
        <SidebarButton
          icon={<AiFillYoutube className='text-red-600' />}
          title='YouTube Kids'
        />
      </div>
      <hr />
      <div>
        <SidebarButton icon={<AiOutlineSetting />} title='Setting' />
        <SidebarButton icon={<BsFlag />} title='Report History' />
        <SidebarButton icon={<BiHelpCircle />} title='Help' />
        <SidebarButton icon={<MdOutlineFeedback />} title='Send Feedback' />
      </div>
      <hr />
      <div className=' flex flex-col my-2 px-3'>
        <a href='/' className='mb-3'>
          <span className='font-semibold text-sm mr-1'>About</span>
          <span className='font-semibold text-sm mx-1'>Press</span>
          <span className='font-semibold text-sm mx-1'>Copyright</span>
          <span className='font-semibold text-sm mx-1'>Contact us</span>
          <span className='font-semibold text-sm mx-1'>Creators</span>
          <span className='font-semibold text-sm mx-1'>Advertise</span>
          <span className='font-semibold text-sm mx-1'>Developers</span>
        </a>

        <a href='/'>
          <span className='font-semibold text-sm mr-1'>Terms</span>
          <span className='font-semibold text-sm mx-1'>Privacy</span>
          <span className='font-semibold text-sm mx-1'>Policy & Safety</span>
          <span className='font-semibold text-sm mx-1'>How YouTube works</span>
          <span className='font-semibold text-sm mx-1'>Test new features</span>
        </a>
        <h1 className='text-xs my-4 font-thin font'>©️2023 Google LLC</h1>
      </div>
    </div>
  );
};

export default Sidebar;
