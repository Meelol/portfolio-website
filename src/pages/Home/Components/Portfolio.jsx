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
            <div data-te-animation-init
                data-te-animation-start="onScroll"
                data-te-animation-reset="true"
                data-te-animation="[fade-in_3s_ease-in-out]"
                data-te-animation-delay= '10'
                data-te-animation-show-on-load="true"
                data-te-animation-interval='5'
                data-te-animation-repeat= 'true' 
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {webProjects.map(project => (
                    <PortfolioWebItem
                        imgURL={project.imgURL}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
                {appProjects.map(project => (
                    <PortfolioAppItem
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