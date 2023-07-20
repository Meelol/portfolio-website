import React from 'react';

function Intro() {

    return(
    <>
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='animate-fade-down animate-once animate-delay-[500ms] animate-ease-linear animate-normal animate-fill-backwards text-6xl md:text-8xl dark:text-white mb-1 md:mb-4 font-bold'>
                Omar Rodriguez
            </h1>
            <p className="animate-fade-right animate-once animate-delay-[1000ms] animate-ease-linear animate-normal animate-fill-backwards text-2xl md:text-3xl mb-3 font-thin">
                    Software Engineer & Web Developer
            </p>
            <p className='animate-fade-left animate-once animate-delay-[1500ms] animate-ease-linear animate-normal animate-fill-backwards text-base max-w-3xl mb-3 font-bold'>
                    Welcome to my portfolio website! 
                    I am Omar Rodriguez, a recent computer science graduate
                    from the California State Polytechnic University of Pomona, 
                    and I'm thrilled to share my passion for learning and exploring
                    various technologies in the field of computer science.
            </p>
        </div>
    </>
    );

}

export default Intro;