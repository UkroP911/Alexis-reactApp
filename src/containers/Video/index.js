import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        this.setState({
            show: true
        })
    }
    closeModal = () =>{
        this.setState({
            show: false
        })
    }


    render(){
        const {modal} = this.props;
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

                { this.state.show &&
                <Modal
                    onClick={this.closeModal}
                    url={modal.url}
                />
                }
            </div>
        )
    }
}

export default connect(
    (state) => ({
        modal: state.modal
    })
)(VideoContainer)
