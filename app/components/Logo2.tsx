import React from 'react';
import { bebas } from '../ui/fonts';
import { FaReact } from 'react-icons/fa';

const Logo2 = () => {
  return (
    <div className={`${bebas.className} flex flex-row items-center leading-none text-white`}>
      <FaReact className="h-20 w-20 rotate-[-15deg]" />
      <p className="text-[30px] ml-3">La colaboración impulsa la innovación</p>
    </div>
  );
};

export default Logo2;