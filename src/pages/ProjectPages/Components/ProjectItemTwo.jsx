import React from 'react';

function ProjectItemTwo({ photoUrl, description }) {
  return (
    <div className="flex items-center sm:flex-row md:flex-row justify-center">
      <p className="w-full max-w-full m-8 sm:text-xs md:text-xs text-sm lg:text-base text-justify">{description}</p>
      <img src={photoUrl} alt="Project Photo" className="md:w-6/12 h-6/12 m-8 place-self-center" />
    </div>
  );
}

export default ProjectItemTwo;