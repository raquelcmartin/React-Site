import React from 'react';
import '../../style/About.css';

export default function About() {
    return (
        <div className='about-container'>
            <h1 className='about-title'>About Me</h1>
            <p className='about-description'>
                Hi, I'm Raquel, a passionate web developer with a recent certification from FullStack Academy. I specialize in building full-stack applications using technologies like JavaScript, React, Node.js, Express, and more. I love solving complex problems and creating user-friendly, responsive web applications. 
            </p>
            <p className='about-description'>
                When I'm not coding, I enjoy exploring new tools and frameworks, contributing to open-source projects, and continuously learning to stay updated with the latest trends in web development.
            </p>
            <p className='about-description'>
                Feel free to check out my <a href='/portfolio' className='about-link'>Portfolio</a> to see some of the projects I've worked on, or <a href='/contact' className='about-link'>Contact Me</a> if you'd like to connect!

                <div>
                    
                </div>
            </p>
        </div>
    );
}
