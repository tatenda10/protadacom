import React, { useRef, useState } from 'react';
import contact from "../assets/contact.png"
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_83s1xgm', 'template_8eneuso', form.current, 'ya_uNWRLxHjHLIcbN')
      .then((result) => {
        console.log(result.text);
        setName('');
        setEmail('');
        setMessage1('');
        setMessage2('');

      })
      .catch((error) => {
        console.error(error.text);
      });
  };
  return (
    <div >
      <div className=' hidden md:flex md:flex-row'>
        <div className='flex  flex-col h-auto justify-center text-white w-1/2 items-center bg-cover bg-center bg-no-repeat '
          style={{ backgroundImage: `url(${contact})` }} >

          <div className='my-12 text-start gap-3'>
            <p className='text-3xl mb-2'>+263771472707</p>
            <p className='text-3xl mb-2'>+263777214958</p>
            <p className='text-3xl mb-2'>tatendamuzenda740@gmail.com</p>
            <p className='text-3xl mb-2'>sales@protadacominc.co.zw</p>
          </div>

          <h1 className='text-4xl text-center font-bold'>Physical and Postal Address
          </h1>
          <p className='text-3xl text-center'>Apartment 66 Block 15 Francis Flats Belvedere Harare

          </p>
        </div>
        <div className='w-1/2 '>
          <h1 className='text-3xl font-bold ml-[10%] mt-[4%]  '>GET A QUOTE</h1>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-9 mt-[4%] ml-[10%] '>
            <div >
              <input
                type="text"
                className='bg-[#F8F8F8] p-3 w-[250px]'
                name="from_name"
                value={name}
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}

              />
            </div>
            <div className='flex flex-row'>

              <input
                className='bg-[#F8F8F8] p-3 w-[250px]'
                type="email"
                name="from_email"
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex flex-row '>

              <textarea
                placeholder='Enter Phone number'
                name="message1"
                className='bg-[#F8F8F8] p-3 w-[250px] '
                value={message1}
                onChange={(e) => setMessage1(e.target.value)}
              />
            </div>
            <div className='flex flex-row '>

              <textarea
                placeholder='Product required'
                name="message2"
                className='bg-[#F8F8F8] p-3 w-[250px] h-[120px]'
                value={message2}
                onChange={(e) => setMessage2(e.target.value)}
              />
            </div>

            <div className='flex '>
              <button
                className='rounded-sm font-bold px-4 py-1  bg-[#9E0417]  text-white'
                type="submit"
              >
                GET A QUOTE
              </button>
            </div>
          </form>
        </div>

      </div>
      <div className='flex  flex-col h-auto w-full bg-cover bg-center bg-no-repeat md:hidden'
        style={{ backgroundImage: `url(${contact})` }} >

        <div className="flex flex-col justify-center  ml-4  bg-white  w-[88%] mt-7 p-4 rounded-sm">
          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-9 mt-[4%] ml-[10%] '>
            <div >
              <input
                type="text"
                className='bg-[#F8F8F8] p-3 w-[250px]'
                name="from_name"
                value={name}
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}

              />
            </div>
            <div className='flex flex-row'>

              <input
                className='bg-[#F8F8F8] p-3 w-[250px]'
                type="email"
                name="from_email"
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex flex-row '>

              <textarea
                placeholder='Enter phone number'
                name="message1"
                className='bg-[#F8F8F8] p-3 w-[250px] '
                value={message1}
                onChange={(e) => setMessage1(e.target.value)}
              />
            </div>
            <div className='flex flex-row '>

              <textarea
                placeholder='Service Required'
                name="message2"
                className='bg-[#F8F8F8] p-3 w-[250px] h-[150px]'
                value={message2}
                onChange={(e) => setMessage2(e.target.value)}
              />
            </div>
            <div className='flex justify-center'>
              <button
                className='rounded-sm font-bold px-4 py-1  bg-[#9E0417]  text-white'
                type="submit"
              >
                GET A QUOTE
              </button>
            </div>
          </form>
          <div className='flex flex-col gap-4 justify-center text-xl mt-6 mb-5'>
            <p className='text-xl mb-2'>+263771472707</p>
            <p className='text-xl mb-2'>+263777214958</p>
            <p className='text-xl mb-2'>tatendamuzenda740@gmail.com</p>
            <p className='text-xl mb-2'>sales@protadacominc.co.zw</p>
            <h1 className='font-bold'>Physical and Postal Address</h1>
            <p> Apartment 66 Block 15 Francis Flats Belvedere Harare
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact