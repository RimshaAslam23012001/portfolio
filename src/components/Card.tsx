import React from 'react';
import Image from 'next/image'; 
import '@/styles/card.css';// Importing Image from next/image
import { StaticImageData } from 'next/image';  // Importing for StaticImageData if needed

interface CardProps {
  title: string;
  desc: string;
  img: string | StaticImageData;  // Accepting both string URL and StaticImageData
  tags: string[];
}

const Card = ({ title, desc, img, tags }: CardProps) => {
  return (
    <div className='card'>
      <div>
        <Image 
          className='card-image'
          src={img}
          width={350}
          height={350}
          alt={title}  // Alt text should be dynamically passed for accessibility
        />
      </div>
      <div className='card-content'>
        <div className='card-title'>{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((tag) => (
            <div className='card-tags' key={tag}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
