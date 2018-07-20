import React from 'react';

export default ({first, last}) =>
    <div className="sng-member">
        <div className="sng-member__avatar">
            <img src="http://via.placeholder.com/263x270" alt=""/>
            <div className="sng-member__shadow"> </div>
        </div>
        <div className="sng-member__name">{first} {last}</div>
        <div className="sng-member__position">Founder & CEO</div>
    </div>;
