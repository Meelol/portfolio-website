import React from 'react';
function Footer() {
    return(
        <div className='py-5 text-center'>
            <div className='container max-w-screen-lg mx-auto'>
                <div>
                    <div className='flex flex-wrap justify-center gap-2'>
                        <a className="bg-stone-200 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full" href="https://www.linkedin.com/in/edgar-rodriguez-b8a229279/" target='_blank'>
                            <img className="w-5 h-5 fill-current" src='/assets/LI-In-Bug.png'>
                            </img>
                        </a>
                        <a className="bg-stone-200 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full" href="https://github.com/Meelol" target='_blank'>
                            <img className="w-5 h-5 fill-current" src='/assets/github-mark.png'>
                            </img>
                        </a>
                    </div>
                </div>
            </div>
            <p className='text-sm mt-2 opacity-50'>
            &copy; {new Date().getFullYear()} Omar Rodriguez. All Rights Reserved.   
            </p>
        </div>
    );
}

export default Footer;