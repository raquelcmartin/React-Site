import React from 'react';
import '../../style/Portfolio.css';

export default function Portfolio() {
    const projects = [
        {
            title: "Little Seed Big Garden - Capstone",
            description: "This was my Fullstack capstone I teamed up with 3 other students and we built a fully functioning e-commerce site with both front-end and back-end experience.",
            imageUrl: "capstonehome.png",
            link: "https://github.com/raquelmartin/project-one"
        },
        {
            title: "Puppy Bowl",
            description: "This was a project we built a front end application for, allowing the user to add and remove players from their API.",
            imageUrl: "puppybowl.jpeg",
            link: "https://github.com/raquelcmartin/Puppy-Bowl-2"
        },
        {
            title: "Book Buddy",
            description: "This was a project we built a front end application for, allowing users to naviagte the library via API and checkout books.",
            imageUrl: "bookbuddy.jpeg",
            link: "https://github.com/raquelcmartin/Unit3.BookBuddy.Starter"
        }
    ];

    return (
        <div className='portfolio-container'>
            <h1 className='portfolio-title'>My Portfolio</h1>
            <div className='projects-grid'>
                {projects.map((project, index) => (
                    <div key={index} className='project-card'>
                        <img src={project.imageUrl} alt={project.title} className='project-image' />
                        <h2 className='project-title'>{project.title}</h2>
                        <p className='project-description'>{project.description}</p>
                        {/* <a href={project.link} className='project-link' target='_blank' rel='noopener noreferrer'>
                            View Project
                        </a> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
