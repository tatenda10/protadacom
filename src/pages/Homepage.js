import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/hero.png';

const Homepage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <div className='hidden md:flex'>
        <div className='w-1/2 flex flex-col items-start px-8 ml-[4%] gap-5 h-[80vh] text-start justify-center'>
          <h1 className='text-4xl '>
            Great <span className='product'>Product</span> is
            built by great <span className='teams'>..............teams</span>
          </h1>
          <h1>We help build and manage a team of world-class developers to bring your vision to life</h1>
          <button className='gradient mt-5 rounded-sm text-white font-bold px-3 py-2'>
            <Link to="/Services">Let's get started</Link>
          </button>
        </div>
        <div className='w-1/2'>
          {!imageLoaded && (
            <div className="loader">
              <div data-glitch="Loading..." className="glitch">Loading...</div>
            </div>
          )}
          <img
            style={!imageLoaded ? { display: 'none' } : {}}
            onLoad={handleImageLoad}
            src={hero}
            className=''
            alt="Description of the hhh"
          />
        </div>
      </div>
      <div className='md:hidden flex flex-col items-center'>
        <div className='flex text-center items-center w-[80%] mt-5'>
          <h1 className='text-4xl '>
            Great <span className='product'>Product</span> is
            built by great <span className='teams'>teams</span>
          </h1>
        </div>
        <div className=''>
          <img src={hero} alt="protadacom" className='' />
        </div>
        <div className='flex flex-col text-center items-center w-[80%] mt-5'>
          <h1>We help build and manage a team of world-class developers to bring your vision to life</h1>
          <button className='gradient mt-5 rounded-sm text-white font-bold px-3 py-2'>
            <Link to="/Services">Let's get started</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
