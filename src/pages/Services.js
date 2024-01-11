import React, { useState } from 'react';
import testing from '../assets/testing.png'
import mobile from '../assets/mobile.png'
import web from '../assets/web.png'
import medicine from '../assets/medicine.jpg'
import school from '../assets/school.webp'
import lawyers from '../assets/lawyers.jpg'
import image from '../assets/image.svg'

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';



const Services = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div>
      <h1 className='text-xl font-bold text-center mt-5 text-[#1A202C]'>Services we offer</h1>
      <div className='grid grid-cols-1 text-sm px-5 md:grid-cols-3 gap-5 mt-5 w-full'>
        <div className='flex-grow'>
          <div className='border-2 border-[#F76680] rounded-md flex flex-col gap-5 p-5 h-full'>
            <div className='w-10 h-10 rounded-full border-2 border-[#F76680] items-center flex justify-center'>
              <img src={mobile} alt="protadacom" className='' />
            </div>
            <h1 className='text-[#2D3748] text-xl'>Mobile App Development</h1>
            <p>
              App development is a dynamic and ever-evolving field that empowers businesses and individuals to innovate and connect with users on a global scale. With a focus on creativity, user experience, and emerging technologies, app developers continue to shape the digital landscape, bringing ideas to life and enhancing the way we live, work, and play.
            </p>
          </div>
        </div>
        <div className='flex-grow'>
          <div className='border-2 border-[#F76680] rounded-md flex flex-col gap-5 p-5 h-full'>
            <div className='w-10 h-10 rounded-full border-2 border-[#F76680] items-center flex justify-center'>
              <img src={web} alt="protadacom" className='' />
            </div>
            <h1 className='text-[#2D3748] text-xl'>Software Development</h1>
            <p>
              We craft digital solutions that empower businesses and individuals to thrive in the ever-evolving digital landscape. Our dedicated team of skilled developers combines creativity with cutting-edge technology to deliver bespoke software tailored to your unique needs. From concept to execution, we prioritize user-centric design, robust functionality, and scalability. Whether you're looking for custom applications, web development, or scalable cloud solutions, Protadacom is your trusted partner in shaping the future of software. Join us on the journey of transforming ideas into impactful digital realities.
            </p>
          </div>
        </div>
        <div className='flex-grow'>
          <div className='border-2 border-[#F76680] rounded-md flex flex-col gap-5 p-5 h-full'>
            <div className='w-10 h-10 rounded-full border-2 border-[#F76680] items-center flex justify-center'>
              <img src={testing} alt="protadacom" className='' />
            </div>
            <h1 className='text-[#2D3748] text-xl'>Software Testing</h1>
            <p>
              In a software-driven world, the importance of robust testing cannot be overstated. Our Software Testing Services offer a strategic and comprehensive approach to guarantee the success of your software applications. Partner with us to achieve software excellence, reliability, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h1 className='text-center font-bold text-xl'>Industries</h1>
        <div className='flex flex-col md:flex-row w-full   '>
          <div className='md:w-1/2'>

            {!imageLoaded && <img src={image} className=' rounded-sm' alt="Description of the image" />}
            <img
              style={!imageLoaded ? { display: 'none' } : {}}
              onLoad={handleImageLoad}
              src={medicine}
              className='rounded-lg p-5'
              alt="Description of the image"
            />
          </div>
          <div className='flex flex-col p-3 text-center md:text-start md:w-1/2  justify-center gap-5'>
            <h1 className='font-bold text-center text-[#600B0B]'>Healthcare Information Technology (Healthcare IT)</h1>
            <div>
              <p>
                Experience the future of healthcare management with Protadacom's advanced Hospital ERP Systems. Our cutting-edge solutions redefine efficiency in medical practices, offering seamless appointment tracking, secure patient record storing, and simplified appointment booking processes. Tailored to the unique needs of the medical industry, our ERP systems empower healthcare providers to streamline operations, enhance patient care, and ensure optimal resource utilization. With Protadacom, embark on a journey towards a digitally transformed healthcare experience, where every aspect of your hospital management is meticulously handled, allowing you to focus on what matters most  delivering exceptional patient care
                <span><FormatQuoteIcon style={{ fontSize: '3em', color: "#FF2EB8" }} /></span>
              </p>
            </div>

          </div>
        </div>
        <div className='flex flex-col md:flex-row  w-full mt-10  '>
          <div className='md:w-1/2 md:hidden w-full flex items-center justify-center'>
            {!imageLoaded && <img src={image} className=' rounded-sm' alt="Description of the image" />}
            <img
              style={!imageLoaded ? { display: 'none' } : {}}
              onLoad={handleImageLoad}
              src={school}
              className='rounded-lg p-8'
              alt="Description of the image"
            />
          </div>
          <div className='flex flex-col md:w-1/2 items-center justify-center p-5 gap-5'>
            <h1 className='font-bold text-center text-[#600B0B]'>
              Empowering Education with School ERP Systems
            </h1>
            <div  className='text-center md:text-start'>
              <p>
                Our tailored solutions are designed to streamline school operations, providing a seamless online platform for administrators, teachers, students, and parents. From simplified online registration and attendance tracking to interactive online report systems, we offer a holistic approach to digitizing every aspect of school administration.

                Our School ERP Systems create a centralized hub where administrators can effortlessly manage student data, attendance records, and academic performance. Teachers can utilize the online platform for efficient lesson planning, grading, and communication with students and parents. Parents, in turn, gain real-time access to their child's academic progress, attendance, and important school announcements.

                At Protadacom, we prioritize user-friendly interfaces, data security, and scalability. Whether you are a small school or a large educational institution, our School ERP Systems can be tailored to meet your specific needs. Join us in transforming education through innovative technology, where school administration becomes a breeze, and the focus remains on fostering a positive learning environment for students                <span><FormatQuoteIcon style={{ fontSize: '3em', color: "#FF2EB8" }} /></span>
              </p>
            </div>
          </div>
          <div className='md:w-1/2 hidden md:flex w-full  items-center justify-center'>
            {!imageLoaded && <img src={image} className=' rounded-sm' alt="Description of the image" />}
            <img
              style={!imageLoaded ? { display: 'none' } : {}}
              onLoad={handleImageLoad}
              src={school}
              className='rounded-lg p-8'
              alt="Description of the image"
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row w-full   '>
          <div className='md:w-1/2'>
            {!imageLoaded && <img src={image} className=' rounded-sm' alt="Description of the image" />}
            <img
              style={!imageLoaded ? { display: 'none' } : {}}
              onLoad={handleImageLoad}
              src={lawyers}
              className='rounded-lg p-5'
              alt="Description of the image"
            />
          </div>
          <div className='flex flex-col md:w-1/2 p-5 items-center justify-center gap-5'>
            <h1 className='font-bold text-center text-[#600B0B]'>
              Law : Legal Case Management  systems
            </h1>
            <div className='text-center md:text-start'>
              <p>
                Revolutionize your legal practice with Protadacom's cutting-edge Case Management Systems, meticulously crafted to enhance efficiency and streamline workflows. Our innovative solutions provide a comprehensive platform for managing legal cases, facilitating document workflows, and fostering transparent collaboration with clients. With a focus on user-friendly interfaces and robust security measures, our systems empower legal professionals to navigate the complexities of case management with unparalleled ease. From centralized case tracking to efficient document handling and secure client communication, Protadacom's Case Management Systems redefine the standards of excellence in the legal industry, ensuring your firm stays at the forefront of innovation.
                <span><FormatQuoteIcon style={{ fontSize: '3em', color: "#FF2EB8" }} /></span>
              </p>
            </div>

          </div>
        </div>
      </div>
      <div className='gradient flex flex-col md:flex-row gap-5 text-white justify-between py-5 px-5'>
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

export default Services