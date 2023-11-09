import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import banner from '../assets/images/banner.jpg';
import { MdMail, MdPhone, MdMyLocation } from 'react-icons/md';

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
        }}
        className='h-[200px]'
      >
        <div className='w-full h-full max-w-6xl mx-auto flex flex-col items-center justify-center'>
          <span className='text-3xl font-bold text-white'>CONTACT US</span>
          <div className='h-[4px] w-[10%] bg-[var(--highlight-clr)] my-4' />
        </div>
      </div>
      <div
        className='w-full mx-auto max-w-6xl py-8 flex items-center justify-between gap-10'
        style={{ minHeight: 'calc(100vh - 434px)' }}
      >
        <div className='w-1/2 h-full flex flex-col'>
          <span className='text-3xl text-[var(--highlight-clr)] font-bold block mb-4'>
            Get In Touch
          </span>
          <span className='text-justify mb-6'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi natus
            aut, ea repellat veniam, magni quia deleniti dolor sed praesentium
            possimus accusantium tempora! Commodi hic veritatis ipsam incidunt
            possimus quo!
          </span>
          <div className='flex items-center gap-2 mb-2'>
            <MdMail className='text-xl text-[var(--highlight-clr)]' />
            <span>hr@email.com</span>
          </div>
          <div className='flex items-center gap-2 mb-2'>
            <MdPhone className='text-xl text-[var(--highlight-clr)]' />
            <span>+84 23456798</span>
          </div>
          <div className='flex items-center gap-2'>
            <MdMyLocation className='text-xl text-[var(--highlight-clr)]' />
            <span>Ha Noi, Viet Nam</span>
          </div>
        </div>
        <div className='w-1/2 h-full'>
          <iframe
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.98045312742!2d105.81636412075461!3d21.022778419206958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1699462464941!5m2!1svi!2s'
            className='w-full h-[280px] border-1px border-solid border-[var(--highlight-clr)] rounded-xl'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
