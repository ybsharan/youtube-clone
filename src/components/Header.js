import React, { useEffect, useState } from 'react';
import { HAMBURGER_MENU, YOUTUBE_LOGO } from '../utils/constants';
import { BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import { BiSolidUserCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { SEARCH_SUGGESTION_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // console.log(search);
  const [showSuggestions, setshowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState('');

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestedQuery();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestedQuery = async () => {
    const data = await fetch(SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='flex items-center justify-between shadow-lg px-5 pr-8  '>
      <div className='flex justify-center items-center'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-9 cursor-pointer'
          src={HAMBURGER_MENU}
          alt='Hamburger'
        />
        <a href='/'>
          <img
            className='h-16 cursor-pointer'
            src={YOUTUBE_LOGO}
            alt='Youtube Logo'
          />
        </a>
      </div>
      <div className=' w-5/12'>
        <div className='flex justify-center'>
          <input
            className='border-[1px] border-gray-400 h-[40px] p-2 pl-5 rounded-l-full w-10/12'
            type='text'
            placeholder='Search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setshowSuggestions(true)}
            onBlur={() => setshowSuggestions(false)}
          />
          <button className='border-[1px] border-gray-400  bg-gray-100 hover:bg-gray-200 h-[40px] p-2 px-4 w-1/12 rounded-r-full'>
            <BsSearch />
          </button>
        </div>
        {showSuggestions && (
          <div className='absolute bg-white rounded-md w-[32rem] mx-[1.4rem] my-[1px] py-1 px-4'>
            <ul>
              {suggestions.map((suggestion, index) => (
                <h1
                  key={index}
                  className='flex rounded-lg px-2 py-2 items-center hover:bg-gray-200'
                >
                  <span className='text-xs mr-2'>
                    <BsSearch />
                  </span>
                  {suggestion}
                </h1>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className='flex justify-center items-center'>
        <div className='mr-4 py-2 cursor-pointer text-xl'>
          <BsThreeDotsVertical />
        </div>
        <button className='flex justify-center items-center border-[1px] border-gray-300 hover:bg-blue-100 text-blue-700 font-semibold text-base p-2 h-[40px] rounded-full'>
          <span className='text-2xl'>
            <BiSolidUserCircle />
          </span>
          <span className='m-1'>Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
