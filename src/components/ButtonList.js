import React from 'react';
import ButtonsMainContainer from './ButtonsMainContainer';

const buttonNames = [
  'All',
  'Music',
  'Live',
  'News',
  'Bollywood Music',
  'Mantras',
  'Game shows',
  'Motivation',
  'History',
  'Computer programming',
  'Recently uploaded',
];

const ButtonList = () => {
  return (
    <div className='flex flex-wrap'>
      {buttonNames.map((buttonName) => (
        <ButtonsMainContainer key={buttonName} title={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
