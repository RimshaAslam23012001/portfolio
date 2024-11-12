import React from 'react';
import '@/styles/hero.css';
import Image from "next/image";


const Hero = () => {
  return (
    <section className='rounded-container '>
          <div className='text-container'>
               <h1 data-aos="fade-up-right">I&apos;m</h1>
               <h1 data-aos="fade-up-right">Rimsha</h1>
               <h1 data-aos="fade-up-right">Aslam</h1>
          </div>
            <div className='image-container '>
              <Image
              src='/Rim.jpg'
              alt='Hero Image'
              className={'rounded-image'}
              width={200}
              height={200}
              />
            </div>
    </section>
  )
}

export default Hero;

