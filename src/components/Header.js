import React from 'react';

import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import { HashLink as HashLink } from 'react-router-hash-link';



function Header() {

    const [navActive, setNavActive] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);

    const [menuActive, setMenuActive] = useState(false);
    const _toggleSidebar = () => {
        setMenuActive(!menuActive);
    };
    return (


        <>
            <header className="header-mobile" id="home">

                <button onClick={_toggleSidebar} id="burger-menu"><img src={`images/${menuActive ? 'x' : 'burger-menu'}.svg`} alt="Menu" />  </button>
                <nav id="mobile-nav" className={`${menuActive ? 'hidden' : ''} `} >
                    <a
                        onClick={_toggleSidebar}
                        href="/"
                        className="active-nav nav-link mobile-link"
                    >HOME  </a>
                    <a
                        onClick={_toggleSidebar}
                        href="/#about"
                        className="nav-link mobile-link"
                    >About</a>
                    <a
                        onClick={_toggleSidebar}
                        href="/#roadmap"
                        className="nav-link mobile-link"
                    >ROADMAP</a>
                    <a
                        onClick={_toggleSidebar}
                        href="/#team"
                        className="nav-link mobile-link"
                    >Team</a>
                    <a
                        onClick={_toggleSidebar}
                        href="/#faqs"
                        className="nav-link mobile-link"
                    >FAQs</a>
                    {/* <a
                        className="nav-link mobile-link cr"
                    >
                        <button className='connectBTN m-btn-header mintBtn'>CONNECT WALLET</button>
                    </a> */}
                </nav>
            </header>

            <header>
                <nav>
                    <div className='nav-con'>
                        <a href='/'>
                            Home
                        </a>
                        <a href='/#about'>
                            About
                        </a>
                        <a href='/#roadmap'>
                            Roadmap
                        </a>
                        <a href='/#team'>
                            Team
                        </a>
                        <a href='/#faqs'>
                            FAQs
                        </a>
                        <a href='#'>
                            10D : 04H : 26M : 57S
                        </a>
                        {/* <a className='cr'>
                            <button className='connectBTN btn-header mintBtn'>CONNECT WALLET</button>
                        </a> */}
                    </div>
                    <div className='logo'>
                        <Link to="/">  <img src='./images/logo.png' alt='' /></Link>
                    </div>
                </nav>
            </header>
        </>

    )

}

export default Header;