import React, {Component} from 'react'

import Header from '../../components/Header';

class HeaderContainer extends Component{
    navHandler = () => {
        document.querySelector('.header__nav').classList.toggle('open-nav')
    }

    render(){
        return(
            <Header onClick={this.navHandler}/>
        )
    }
}
export default HeaderContainer
