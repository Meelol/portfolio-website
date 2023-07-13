import React from 'react';
import webProjects from '../data/web-projects';
import appProjects from '../data/app-projects';
import PortfolioWebItem from './PortfolioWebItem';
import PortfolioAppItem from './PortfolioAppItem';
import { Animate, initTE } from "tw-elements";
initTE({ Animate });

function Portfolio() {
    return(
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div    data-te-animation-init
                    data-te-animation-start="onLoad"
                    data-te-animation-reset="true"
                    data-te-animation-delay="8"
                    data-te-animation="[fade-in_5s_ease-in-out]"
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {webProjects.map(project => (
                    <PortfolioWebItem
                        id={project.id}
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