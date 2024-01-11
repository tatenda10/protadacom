import React, { useState } from 'react'
import office from '../assets/office.jpeg'
import image from '../assets/image.svg'
import collabo2 from '../assets/collabo2.avif'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import coders from '../assets/coders.jpeg'
import coders2 from '../assets/coders2.avif'


import hilton from '../assets/hilton.png'
import bmc from '../assets/bmc.png'
import aspire from '../assets/asp.PNG'

import ministry from '../assets/ministry.jpg'
import baines from '../assets/baines.jpeg'
import aws from '../assets/aws.jpg'

import namecheap from '../assets/namecheap.jpg'
import oracle from '../assets/oracle.jpg'
import prolearn from '../assets/prolearn.png'

const Aboutus = () => {

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 w-full p-5'>
          {!imageLoaded && <img src={image} className=' rounded-sm' alt="Description of the gg" />}
          <img
            style={!imageLoaded ? { display: 'none' } : {}}
            onLoad={handleImageLoad}
            src={office}
            className='rounded-lg p-8'
            alt="Description of the hhh"
          />
        </div>
        <div className='md:w-1/2 p-5 flex-col w-full text-center items-center flex justify-center md:text-start'>
          <h1 className='text-center tex-2xl font-bold mb-5'>About Protadacom Inc</h1>
          Established in 2021 by two visionary brothers, Tatenda Muzenda and Progress Muzenda, Protadacom emerged as a beacon of innovation and commitment to shaping the future through technology. United by a shared passion for leveraging the power of digital solutions, our founders embarked on a journey to redefine industry standards and contribute to a brighter tomorrow. With a profound vision to change the world through technology, Protadacom aspires to empower the next generation by providing cutting-edge solutions that transcend boundaries and drive positive transformation.
        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row items-center '>
        <div className='p-5 mx-8 md:w-1/2 w-full'>
          <hr className=" my-6 border-t-4 border-[#A50A0A] w-[200px]" />

          <h1 className='text-xl'>Leading companies trust us to  <br />
            <span className='font-bold text-2xl'>
              develop software
            </span>
          </h1>
          <p className='mt-5 md:w-4/5 mb-7'>
            We add development capacity to tech teams. Our value isn't limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.
          </p>



          <Link to="/Services">
            <p className='text-[#57007B]'>See more Informations <ArrowForwardIcon /> </p>

          </Link>
        </div>
        <div className='p-5 md:w-1/2'>
          {!imageLoaded && <img src={image} className=' rounded-sm' alt="Description of the gg" />}
          <img
            style={!imageLoaded ? { display: 'none' } : {}}
            onLoad={handleImageLoad}
            src={collabo2}
            className='rounded-lg p-8'
            alt="Description of the hhh"
          />
        </div>
      </div>
      <div className='w-full p-5 flex flex-col items-center'>
        <div>
          <hr className=" my-6 border-t-4 border-[#A50A0A] w-[200px]" />
          <h1 className=' text-xl mb-4'>
            Meet the People 
            <br/>
            <span className='text-2xl font-bold'>We are working with</span>
          </h1>
        </div>
      </div>
      <div className='flex w-full items-center justify-center'>
        <div className='flex  flex-col gap-5'>
          {/* first batch */}
          <div className='flex gap-5'>
            {!imageLoaded && <img src={image} className=' rounded-sm' alt="Description of the gg" />}
            <img
              style={!imageLoaded ? { display: 'none' } : {}}
              onLoad={handleImageLoad}
              src={aspire}
              className='rounded-full h-[100px] w-[100px] md:h-[200px] md:w-[200px]'
              alt="Description of the hhh"
            />
            <img
              style={!imageLoaded ? { display: 'none' } : {}}
              onLoad={handleImageLoad}
              src={bmc}
              className='rounded-full h-[100px] w-[100px] md:h-[200px] md:w-[200px]'              alt="Description of the hhh"
            />
            <img
              style={!imageLoaded ? { display: 'none' } : {}}
              onLoad={handleImageLoad}
              src={hilton}
              className='rounded-full h-[100px] w-[100px] md:h-[200px] md:w-[200px]'              alt="Description of the hhh"
            />
          </div>
          <div className='flex gap-5'>
            {/* 2nd batch */}
            {!imageLoaded && <img src={image} className=' rounded-full h-[100px] w-[100px]' alt="Description of the gg" />}
            <img
              style={!imageLoaded ? { display: 'none' } : {}}
              onLoad={handleImageLoad}
              src={ministry}
              className='rounded-full h-[100px] w-[100px] md:h-[200px] md:w-[200px]'              alt="Description of the hhh"
            />
            <img
              style={!imageLoaded ? { display: 'none' } : {}}
              onLoad={handleImageLoad}
              src={baines}
              className='rounded-full h-[100px] w-[100px] md:h-[200px] md:w-[200px]'              alt="Description of the hhh"
            />
            <img
              style={!imageLoaded ? { display: 'none' } : {}}
              onLoad={handleImageLoad}
              src={aws}
              className='rounded-full h-[100px] w-[100px] md:h-[200px] md:w-[200px]'              alt="Description of the hhh"
            />
          </div>
          <div className='flex gap-5'>
            {!imageLoaded && <img src={image} className=' rounded-full h-[100px] w-[100px]' alt="Description of the gg" />}
            <img
              style={!imageLoaded ? { display: 'none' } : {}}
              onLoad={handleImageLoad}
              src={prolearn}
              className='rounded-full h-[100px] w-[100px] md:h-[200px] md:w-[200px]'              alt="Description of the hhh"
            />
            <img
              style={!imageLoaded ? { display: 'none' } : {}}
              onLoad={handleImageLoad}
              src={oracle}
              className='rounded-full h-[100px] w-[100px] md:h-[200px] md:w-[200px]'              alt="Description of the hhh"
            />
            <img
              style={!imageLoaded ? { display: 'none' } : {}}
              onLoad={handleImageLoad}
              src={namecheap}
              className='rounded-full h-[100px] w-[100px] md:h-[200px] md:w-[200px]'              alt="Description of the hhh"
            />
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col items-start p-5 md:items-center'>
        <div>
          <hr className=" my-6 border-t-4 border-[#A50A0A] w-[200px]" />
          <h1 className=' text-2xl mb-4'>
            Way of building <br />
            <span className='font-bold text-3xl'>
              Great Software
            </span>
          </h1>
        </div>
      </div>
      <div className='flex flex-col md:flex-row '>
        <div className='md:w-1/2 flex flex-col p-5 gap-8 md:ml-8'>
          <h1 className='font-bold'>Build the right team to scale</h1>
          <p className='md:w-3/4'>
            Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term not the case with freelancers
          </p>
          <p className='md:w-3/4'>
            Our delivery model helps you cut costs and deliver within budget.
          </p>
          <div className='border-l-4 h-[50px] border-[#A20AA5] px-2 '>
            <p className='font-italic  md:w-3/4 text-sm text-[#160e16]'>
              "Protadacom is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
            </p>
          </div>
        </div>
        <div className='md:w-1/2  flex items-center justify-center p-8 md:p-5'>
          {!imageLoaded && <img src={image} className=' rounded-sm h-[300px] w-[300px]' alt="Description of the gg" />}
          <img
            style={!imageLoaded ? { display: 'none' } : {}}
            onLoad={handleImageLoad}
            src={coders}
            className='rounded-sm h-[300px] w-[400px]'
            alt="Description of the hhh"
          />
        </div>
      </div>
      <div className='flex flex-col md:flex-row mt-10 '>
        <div className='w-1/2 hidden  md:flex  items-center justify-center p-5'>
          {!imageLoaded && <img src={image} className=' rounded-sm h-[300px] w-[300px]' alt="Description of the gg" />}
          <img
            style={!imageLoaded ? { display: 'none' } : {}}
            onLoad={handleImageLoad}
            src={coders2}
            className='rounded-sm h-[350px] w-[500px]'
            alt="Description of the hhh"
          />
        </div>
        <div className='md:w-1/2 flex flex-col p-5 gap-8 md:ml-8'>
          <h1 className='font-bold'>Crafting a Stellar Software Development Team</h1>
          <p className='md:w-3/4'>
            In the realm of software development, success is deeply rooted in the strength and cohesion of the development team. To build a truly great software development team, meticulous attention to both individual talents and collaborative dynamics is essential. Begin by assembling a diverse group of skilled professionals, each bringing unique perspectives and expertise to the table. Foster a culture that values open communication, continuous learning, and innovation          </p>
          <p className='md:w-3/4'>
            Strive for a harmonious blend of technical prowess and interpersonal skills within your team. A great software development team is not only proficient in coding and technical architecture but also excels in teamwork, adaptability, and problem-solving. Cultivate a culture of accountability and ownership, where each team member takes pride in the collective success of the project          </p>
          <div className='border-l-4 h-[50px] border-[#A20AA5] px-2 '>
            <p className='font-italic  md:w-3/4 text-sm text-[#160e16]'>
              "At Protadacom, we redefine the horizon of software excellence, where innovation converges with collaboration to craft unparalleled development teams"
            </p>
          </div>
        </div>
        <div className=' md:hidden   flex items-center justify-center p-5'>
          {!imageLoaded && <img src={image} className=' rounded-sm h-[300px] w-[300px]' alt="Description of the gg" />}
          <img
            style={!imageLoaded ? { display: 'none' } : {}}
            onLoad={handleImageLoad}
            src={coders2}
            className='rounded-sm h-[350px] w-[500px]'
            alt="Description of the hhh"
          />
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

export default Aboutus