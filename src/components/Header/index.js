import React from 'react';

import HeaderNav from '../HeaderNav/index'

export default ({onClick}) =>
    <header className="header">
        <div className="wrapper">
            <div className="header__content">
                <div className="logo">Alexis</div>
                <HeaderNav/>
                <button className="mobile-nav-btn " onClick={onClick}>
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>
    </header>;

