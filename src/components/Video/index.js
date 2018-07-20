import React from 'react';

export default (openModal, show) => {
    return(
        <div className="video" id="video">
            <div className="wrapper">
                <div className="video__content">
                    <h3 className="video__title">Explore Our Awesomeness</h3>
                    <div className="video__play">
                        <button onClick={() =>openModal} className="video__button"><span className="bg-play"></span></button>
                        <div className="video__hint">Click to play the video</div>
                    </div>
                </div>
            </div>
            if(show)
            <div className="popup js-overlay">
                <div className="popup__video-container">
                    <div className="popup__video-wrap">
                        <button className="popup__close-btn js-close-video"><span></span><span></span></button>
                        <iframe title="modal" src="https://www.youtube.com/embed/aGSKrC7dGcY" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
