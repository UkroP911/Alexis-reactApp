import React from 'react';

import { NavHashLink as NavLink } from 'react-router-hash-link';

export default () =>
    <nav className="header__nav">
        <ul className="nav__list">
            <li className="nav__list-item">
                <NavLink smooth to="/main#about" className="nav__list-link">About Us</NavLink>
            </li>
            <li className="nav__list-item">
                <NavLink smooth to="/main#focus" className="nav__list-link">Our Focus</NavLink>
            </li>
            <li className="nav__list-item">
                <NavLink smooth to="/main#video" className="nav__list-link">Portfolio</NavLink>
            </li>
            <li className="nav__list-item">
                <NavLink smooth to="/main#team" className="nav__list-link">Our Team</NavLink>
            </li>
            <li className="nav__list-item">
                <a href="" className="nav__list-link">Work Steps</a>
            </li>
            <li className="nav__list-item">
                <a href="" className="nav__list-link">Pricing</a>
            </li>
            <li className="nav__list-item">
                <a href="" className="nav__list-link">Testimonials</a>
            </li>
            <li className="nav__list-item">
                <a href="" className="nav__list-link">Blog</a>
            </li>
            <li className="nav__list-item">
                <a href="" className="nav__list-link">Contact</a>
            </li>
        </ul>
    </nav>;