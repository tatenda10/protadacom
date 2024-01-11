import React, { useState } from 'react'
import aspire from '../assets/ggggg.png'
import app from '../assets/app.png'
import property from '../assets/property.png'

import rocket from '../assets/rocket.png'
import development from '../assets/development.png'
import heart from '../assets/heart.png'
import security from '../assets/security.png'
import code from '../assets/code.png'
import lock from '../assets/lock.png'


import image from '../assets/image.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const Casestudies = () => {

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className='bg-[#F5F5F5]'>
      <div className='w-full p-5 flex flex-col items-center'>
        <div>
          <hr className=" my-6 border-t-4 border-[#A50A0A] w-[200px]" />
          <h1 className=' text-xl mb-4'>
            Our
            <br />
            <span className='text-2xl font-bold'>Recent case studies</span>
          </h1>
        </div>
      </div>
      <div className='px-10 ' >
        <div className='bg-[#E7DAED] flex flex-col md:flex-row '>
          <div className='md:w-1/2 '>
            {!imageLoaded && <img src={image} className=' w-full h-full' alt="Description of the gg" />}
            <img
              style={!imageLoaded ? { display: 'none' } : {}}
              onLoad={handleImageLoad}
              src={aspire}
              className='w-full h-full'
              alt="Description of the hhh"
            />
          </div>
          <div className='md:w-1/2 flex flex-col p-7 gap-5'>
            <h1 className='font-bold'>Apertscribe Furnishers Company</h1>
            <p>
              We partnered with Apertscribe to create a sophisticated e-commerce platform that marries aesthetics with performance. Our etique design ensures a visually captivating experience, showcasing craftsmanship at its finest. With optimized performance, secure transactions, and a mobile-first approach, we've elevated the online shopping journey. Explore the new standard in furniture e-commerce with Apertscribe
            </p>
            <a href='https://apertscribe.co.zw' target='_blank' rel="noreferrer" className='text-end text-[#57007B]'>
              Read more <ArrowForwardIcon />
            </a>
          </div>

        </div>
        <div className='bg-[#F0FFF7] flex flex-col md:flex-row mt-8 '>
          <div className='md:w-1/2 '>
            {!imageLoaded && <img src={image} className=' w-full h-full' alt="Description of the gg" />}
            <img
              style={!imageLoaded ? { display: 'none' } : {}}
              onLoad={handleImageLoad}
              src={app}
              className='w-full h-full'
              alt="Description of the hhh"
            />
          </div>
          <div className='md:w-1/2 flex flex-col p-7 gap-5'>
            <h1 className='font-bold'>Universal FX Forex app</h1>
            <p>
              We launched the Universal FX app, a game-changer in the world of Forex trading. Experience an intuitive interface, real-time market data, and secure transactions. With personalized alerts and user-friendly account management, Universal FX, developed by us, is setting a new standard in accessible and innovative Forex tradin
            </p>
            <a href='https://play.google.com/store' target='_blank' rel="noreferrer" className='text-end text-[#57007B]'>
              Read more <ArrowForwardIcon />
            </a>
          </div>

        </div>
        <div className='bg-[#FFF4F4] flex flex-col md:flex-row mt-8 '>
          <div className='md:w-1/2 '>
            {!imageLoaded && <img src={image} className=' w-full h-full' alt="Description of the gg" />}
            <img
              style={!imageLoaded ? { display: 'none' } : {}}
              onLoad={handleImageLoad}
              src={property}
              className='w-full h-full'
              alt="Description of the hhh"
            />
          </div>
          <div className='md:w-1/2 flex flex-col p-7 gap-5'>
            <h1 className='font-bold'> Property ZW Software Mantainance</h1>
            <p>
              We proudly undertook the responsibility of enhancing the digital presence of PropertyZW, a premier real estate website. Our dedicated team engaged in meticulous software maintenance to ensure a seamless and efficient user experience. By implementing strategic updates and optimizations, we've fortified PropertyZW with improved functionality, faster performance, and enhanced security. This commitment to software maintenance not only guarantees a smooth operation but also positions PropertyZW at the forefront of innovation in the competitive real estate market.            </p>
            <a href='https://www.property.co.zw' target='_blank' rel="noreferrer" className='text-end text-[#57007B]'>
              Read more <ArrowForwardIcon />
            </a>
          </div>
        </div>
      </div>
      <div className='w-full p-5 flex flex-col items-center'>
        <div>
          <hr className=" my-6 border-t-4 border-[#A50A0A] w-[200px]" />
          <h1 className=' text-xl mb-4'>
            Our design and
            <br />
            <span className='text-2xl font-bold'>Development approach</span>
          </h1>
        </div>
      </div>
      <div className='p-5'>
        <div className=' flex flex-col md:flex-row w-full  justify-center '>
          <div className='flex flex-col md:flex-row gap-3  '>
            <div className='bg-white flex p-5 md:w-[500px]'>
              <div>
                <div className='bg-[#151417] rounded-md w-[50px] h-[50px] flex items-center justify-center'>
                  <img src={rocket} placeholder='ux ' />
                </div>
              </div>

              <div className='px-2 flex flex-col gap-2'>
                <h1 className='font-bold'>UX Driven Engineering</h1>
                <p>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
              </div>
            </div>
            <div className='bg-white flex p-5 md:w-[500px]'>
              <div>
                <div className='bg-[#68DBF2] rounded-md w-[50px] h-[50px] flex items-center justify-center'>
                  <img src={development} placeholder='ux ddddd ' />
                </div>
              </div>

              <div className='px-2 flex flex-col gap-2'>
                <h1 className='font-bold'>Developing Shared Understanding</h1>
                <p>
                  Shared understanding in software development is key for team alignment and efficient communication, essential for delivering successful, high-quality solutions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=' flex flex-col md:flex-row w-full mt-8 justify-center '>
          <div className='flex flex-col md:flex-row gap-3  '>
            <div className='bg-white flex p-5 md:w-[500px]'>
              <div>
                <div className='bg-[#FF92AE] rounded-md w-[50px] h-[50px] flex items-center justify-center'>
                  <img src={heart} placeholder='ux ' />
                </div>
              </div>

              <div className='px-2 flex flex-col gap-2'>
                <h1 className='font-bold'>Proven Experience and Expertise</h1>
                <p>With a track record of successful projects, our seasoned team brings in-depth knowledge and a wealth of skills, ensuring the delivery of reliable, high-quality solution</p>
              </div>
            </div>
            <div className='bg-white flex p-5 md:w-[500px]'>
              <div>
                <div className='bg-[#24E795] rounded-md w-[50px] h-[50px] flex items-center justify-center'>
                  <img src={security} placeholder='ux ' />
                </div>
              </div>

              <div className='px-2 flex flex-col gap-2'>
                <h1 className='font-bold'>Security & Intellectual Property (IP)</h1>
                <p>
                  We implement stringent measures to safeguard sensitive data, prioritize privacy, and meticulously uphold the integrity of intellectual assets              </p>
              </div>
            </div>
          </div>
        </div>
        <div className=' flex flex-col md:flex-row w-full mt-8  justify-center '>
          <div className='flex flex-col md:flex-row gap-3  '>
            <div className='bg-white flex p-5 md:w-[500px]'>
              <div>
                <div className='bg-[#151417] rounded-md w-[50px] h-[50px] flex items-center justify-center'>
                  <img src={code} placeholder='ux ' />
                </div>
              </div>

              <div className='px-2 flex flex-col gap-2'>
                <h1 className='font-bold'>Code Reviews</h1>
                <p>
                  Code reviews are an integral part of our development process. Through meticulous examination, our team ensures code quality, identifies potential issues, and fosters knowledge sharing                </p>
              </div>
            </div>
            <div className='bg-white flex p-5 md:w-[500px]'>
              <div>
                <div className='bg-[#851D7C] rounded-md w-[50px] h-[50px] flex items-center justify-center'>
                  <img src={lock} placeholder='ux ' />
                </div>
              </div>

              <div className='px-2 flex flex-col gap-2'>
                <h1 className='font-bold'>Quality Assurance & Testing</h1>
                <p>
                  Rigorous testing protocols ensure that our software meets the highest standards of functionality, reliability, and security              </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='gradient mt-5 flex flex-col md:flex-row gap-5 text-white justify-between py-5 px-5'>
        <div className='flex flex-col '>
          <h1 className='font-bold md:mb-5'>Company</h1>
          <h1>Protadacom Incoporated</h1>
        </div>
        <div className='flex flex-col '>
          <h1 className='font-bold md:mb-5'>Contact</h1>
          <h1>+263 771 472 707</h1>
          <h1>+263 737 053 912</h1>
          <h1>+263 777 214 958</h1>
          <h1>sales@protadacominc.co.zw</h1>
          <h1>tatendamuzenda740@gmail.com</h1>
        </div>
        <div className='flex flex-col '>
          <h1 className='font-bold md:mb-5'>Location</h1>
          <h1>Room 66 block 15 Francis Flats</h1>
          <h1>Belvedere</h1>
          <h1>Harare</h1>
          <h1>Zimbabwe</h1>
        </div>
      </div>
    </div>
  )
}

export default Casestudies
