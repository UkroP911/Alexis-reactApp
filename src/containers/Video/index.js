import React, { Component } from 'react';

import Modal from '../../components/Modal'

class VideoContainer extends Component{
    constructor(props){
        super(props)
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            show: false
        }
    }

    openModal = () =>{
        console.log('pooop');
        this.setState({
            show: true
        })
    }
    closeModal = () =>{
        this.setState({
            show: false
        })
    }

    // handleModal = () => {
    //     if(this.state.show === true){
    //         console.log('poop');
    //         return(
    //             <div className="popup js-overlay">
    //                 <div className="popup__video-container">
    //                     <div className="popup__video-wrap">
    //                         <button className="popup__close-btn js-close-video"><span></span><span></span></button>
    //                         <iframe title="modal" src="https://www.youtube.com/embed/aGSKrC7dGcY" allowFullScreen></iframe>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     }
    // };

    render(){
        return(
            <div className="video" id="video">
                <div className="wrapper">
                    <div className="video__content">
                        <h3 className="video__title">Explore Our Awesomeness</h3>
                        <div className="video__play">
                            <button
                                className="video__button"
                                onClick={this.openModal}
                            ><span className="bg-play"></span></button>
                            <div className="video__hint">Click to play the video</div>
                        </div>
                    </div>
                </div>

                { this.state.show && <Modal
                    onClick={this.closeModal}
                />


                }
            </div>
        )
    }
}

export default VideoContainer;




// <div className="popup js-overlay"
//      onClick={this.closeModal}
// >
//     <div className="popup__video-container">
//         <div className="popup__video-wrap">
//             <button className="popup__close-btn js-close-video"
//                     onClick={this.closeModal}
//             ><span></span><span></span></button>
//             <iframe title="modal" src="https://www.youtube.com/embed/aGSKrC7dGcY" allowFullScreen></iframe>
//         </div>
//     </div>
// </div>