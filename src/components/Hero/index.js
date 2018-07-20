import React from 'react'

export default () =>
    <div id="hero" className="hero">
        <div className="wrapper">
            <div className="hero__content">
                <div className="hero__title">
                    <h1>We design things with love and passion.</h1>
                </div>
                <div className="hero__button">
                    <a href="" className="btn btn_red"><span className="btn__content">Our Works</span></a>
                </div>
                <div className="hero__features">
                    <div className="features__item features__item_price">
                        <div className="features__icon bg-backs"></div>
                        <div className="features__text">Fixed price projects</div>
                    </div>
                    <div className="features__item features__item_time">
                        <div className="features__icon bg-clock"></div>
                        <div className="features__text features__text_purple">Receive on time</div>
                    </div>
                    <div className="features__item features__item_gurant">
                        <div className="features__icon bg-check"></div>
                        <div className="features__text features__text_orange">Satisfaction guranteed</div>
                    </div>
                </div>
            </div>
        </div>
    </div>;

