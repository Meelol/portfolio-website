import React from 'react';
function Background(props) {
    return(
        <>
            <div  className= 'bg-gradient-to-r from-yellow-400 to-emerald-800 dark:bg-none dark:bg-slate-900 dark:text-slate-100 text-stone-900 min-h-screen font-inter'>
                {this.props.children}
            </div>
        </>
    )
}

export default Background;