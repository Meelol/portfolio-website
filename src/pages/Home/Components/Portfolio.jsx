import React from 'react';
import webProjects from '../data/web-projects';
import appProjects from '../data/app-projects';
import PortfolioWebItem from './PortfolioWebItem';
import PortfolioAppItem from './PortfolioAppItem';

function Portfolio() {
    return(
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className= 'animate-fade animate-once animate-delay-[2000ms] animate-ease-linear animate-normal animate-fill-backwards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {webProjects.map(project => (
                    <PortfolioWebItem
                        key={project.id}
                        imgURL={project.imgURL}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
                {appProjects.map(project => (
                    <PortfolioAppItem
                        id={project.id}
                        imgURL={project.imgURL}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;