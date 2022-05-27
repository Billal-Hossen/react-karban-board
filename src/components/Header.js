import React from 'react';
import { BellIcon} from '@heroicons/react/outline';
const Header = () => {
  return (
    <div className="h-16 pl-40 fixed bg-gradient-to-r from-purple-400
        to-blue-500 w-full flex items-center justify-between pr-5">
            <div className="flex px-5 items-center">
                <img className='rounded' src='/images/craftsmen.PNG'/>
            </div>
            <div className="flex space-x-6">              
                <BellIcon className="w-7 h-7 text-white"/>
                <div className="flex items-center text-white">
                    <h3 className="font-bold mr-3">Md Billal</h3>
                    <img src="/images/dipu.jpg"
                        width="36" height="36" objectFit="cover"
                        className=" rounded-full "/>
                </div>
            </div>
        </div>
  );
};

export default Header;