import React from 'react';

function ProjectItemOne({ photoUrl, description }) {
  return (
  	<div className="flex items-center justify-center">
      <img src={photoUrl} alt="Project Photo" className="w-6/12 h-6/12 m-8 place-self-center " />
      <p className="w-full max-w-full m-8 md:text-base text-sm text-justify">{description}</p>
    </div>
  );
}

export default ProjectItemOne;