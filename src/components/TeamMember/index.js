import React from 'react';

export default ({first, last, avatar}) =>
    <div className="sng-member">
        <div className="sng-member__avatar">
            <img src={avatar} alt=""/>
            <div className="sng-member__shadow"> </div>
        </div>
        <div className="sng-member__name">{first} {last}</div>
        <div className="sng-member__position">Founder & CEO</div>
    </div>;
