'use client';

import Image from 'next/image';

const Play = () => {


    return (
    <div className='flex justify-center'>
      <div className="flex items-center justify-between mt-2.5" style={{ width: '259px', height: '45px' }}>
        <button className="flex flex-col items-center justify-center">
          <Image src="/plus-icon.svg" alt="Add to My List" width={24} height={24} />
          <span className="text-white text-sm font-normal leading-5 tracking-tighter text-center">My List</span>
        </button>
  
        <button className="flex flex-col items-center justify-center bg-customGray p-2 rounded-lg hover:bg-gray-400 px-5 py-2">
          <Image src="/play.svg" alt="Play Video" width={72} height={30} />
        </button>
  
        <button className="flex flex-col items-center justify-center">
            <Image src="/info.svg" alt="More Information" width={24} height={24} />
            <span className="text-white text-sm font-normal leading-5 tracking-tighter text-center">Info</span>
        </button>
      </div>
    </div>
    );
  };

export default Play;
