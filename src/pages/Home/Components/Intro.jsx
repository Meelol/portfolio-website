import React from 'react';
import { Animate, initTE } from "tw-elements";
initTE({ Animate });

function Intro() {
    return(
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 data-te-animation-init
                data-te-animation-start="onHover"
                data-te-animation-reset="true"
                data-te-animation-delay= '2'
                data-te-animation="[fade-in-down_3s_ease-in-out]"
             className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>
                Edgar Rodriguez
            </h1>
            <p  data-te-animation-init
                data-te-animation-start="onHover"
                data-te-animation-reset="true"
                data-te-animation-delay= '3'
                data-te-animation="[fade-in-left_3s_ease-in-out]"
            className="text-base md:text-xl mb-3 font-medium">
                    Software Engineer & Web Developer
            </p>
            <p  data-te-animation-init
                data-te-animation-start="onLoad"
                data-te-animation-reset="true"
                data-te-animation-delay= '4'
                data-te-animation="[fade-in-right_3s_ease-in-out]"
            className='text-sm max-w-xl mb-6 font-bold'>

                    Welcome to my portfolio website! 
                    I am Edgar Rodriguez, a recent computer science graduate
                    from the California State Polytechnic University of Pomona, 
                    and I'm thrilled to share my passion for learning and exploring
                    various technologies in the field of computer science.

            </p>
        </div>
    );
}

export default Intro;