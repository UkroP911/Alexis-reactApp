import React, {Component} from 'react';
import { connect } from 'react-redux';
// import * as types from "../../constants/ActionType";

import TileItem from '../../components/Focus';

function mapStateToProps(state) {

    return {
        focus: state.map((item, id) => {
            // console.log(item.content);
            return ({
                title: item.title,
                content: item.content,
                id: id
            })
        })
    }
};


class Focus extends Component{


    render(){
        const {focus} = this.props;
        // console.log('posdsop',focus);
        return (
            <div className="focus" id="focus">
                <div className="wrapper">
                    <div className="focus__content">
                        <div className="section__title section__title_focus">
                            <h2>Our Focus.</h2>
                        </div>
                        <div className="section__subtitle section__subtitle_focus">We understand your requirement and provide
                            quality works.
                        </div>
                        <div className="focus__services">
                            {
                                focus.map((title, index) =>
                                    <TileItem key={index} title={title.title} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

// export default Focus;
export default connect(mapStateToProps)(Focus)
