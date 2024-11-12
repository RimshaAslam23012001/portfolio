import React from 'react'
import '@/styles/skills.css';

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
        <h2 className='skills-heading'>Technologies I Work With</h2>
        <div className='skills-grid'>
        
            <div className='sk'>
                <p className='skills-text'>I know how to use HTML, CSS, and TypeScript. With HTML, I can create the basic structure of a webpages. In CSS, I can make websites look nice.With TypeScript, I write code that helps prevent mistakes by adding types to things, making my code safer and easier to understand.</p>
                <p className='skills-text'>I also have some knowledge of Next.js and Tailwind CSS. With Next.js, I can build fast, server-side rendered websites and web apps.Tailwind CSS, I use it to style websites by applying ready-made utility classes.</p>
            </div>
            <div className='skills-h' data-aos="zoom-out-up">
                <div>
                    <h2>MS Office</h2>
                    <h2>HTML</h2>
                    <h2>CSS</h2>
                </div>
                <div>
                    <h2>Typescript</h2>
                    <h2>Next.Js</h2>
                    <h2>Tailwind</h2>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills;
