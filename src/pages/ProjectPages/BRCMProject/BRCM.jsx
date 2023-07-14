import React from 'react';
import ProjectItemOne from '../Components/ProjectItemOne';
import ProjectItemTwo from '../Components/ProjectItemTwo';
import { description1, description2 } from './data';

function BRCM() {
    return(
        <>
            <div className= 'bg-emerald-900 text-yellow-400 min-h-screen font-inter'>
                <div  className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
                    <h1 className='font-inter text-center text-8xl md:text-8xl mb-1 pt-10 md:mb-4 font-bold'>Welcome to my Java Project!</h1>
                </div>
                < div className="max-w-6xl w-full mx-auto p-8">
                    <ProjectItemOne    photoUrl="/BRCMPhotos/BRCMLoginPhoto.png"
                                description={description1}
                    />
                    <ProjectItemTwo photoUrl="/BRCMPhotos/BRCMLoginPhoto.png"
                                description={description2}
                    />
                </div>
            </div>
        </>
    )
}
export default BRCM;
