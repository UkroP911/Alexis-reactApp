import React, {Component} from 'react'

import Header from '../../components/Header';

class HeaderContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
        }
    }
    navHandler = () => {

        // if(this.state.showMenu === true){
            document.querySelector('.header__nav').classList.toggle('open-nav')
        // } else {
            // document.querySelector('.header__nav').classList.remove('open-nav')
        // }
    }

    render(){
        return(
            <Header onClick={this.navHandler}/>
        )
    }
}
export default HeaderContainer
