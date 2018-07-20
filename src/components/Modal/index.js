import React from 'react';

export default ({onClick, url}) =>{
    return(
        <div className="popup js-overlay"
             onClick={onClick}
        >
            <div className="popup__video-container">
                <div className="popup__video-wrap">
                    <button className="popup__close-btn js-close-video"
                            onClick={onClick}
                    ><span></span><span></span></button>
                    <iframe title="modal" src={url+'?autoplay=1'} allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}
