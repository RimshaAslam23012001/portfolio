import React from 'react'
import Heading from './Heading';
import '@/styles/project.css';
import Card from './Card';



// Using paths relative to the public directory, assuming these are in /public/images
const data = [
    {
        id: 0,
        title: "Registration Form",
        desc: "A HTML & CSS based registration form to fill your data.",
        img: "/Fr.png",
        tags: ["HTML", "CSS"],
    },
    {
        id: 1,
        title: "Panacloud",
        desc: "A HTML & CSS based company portfolio.",
        img: '/Pc.png',
        tags: ["HTML", "CSS"],
    },
    {
        id: 2,
        title: "Static Resume",
        desc: "A Typescript based interactive resume built with HTML & CSS to showcase your skills.",
        img: '/St.png', 
        tags: ["HTML", "CSS", "Typescript"],
    },
    {
        id: 3,
        title: "Countdown Timer",
        desc: "A Next.js and Typescript powered website to track time.",
        img: '/Ct.png',  
        tags: ["Next.js", "CSS", "Typescript", "Node"],
    },
];

const Projects = () => {
    return (
        <div id='projects' className='projects-container'>
            <Heading title='My Projects' />
            <div className='projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center' data-aos="fade-up-right">
                {data.map((el) => (
                    <Card
                        key={el.id}
                        title={el.title}
                        desc={el.desc}
                        img={el.img}  // Passing img URL as a string
                        tags={el.tags}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects;
