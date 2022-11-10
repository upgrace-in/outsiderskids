import React from 'react';

import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import { HashLink as HashLink } from 'react-router-hash-link';


function Footer() {

    return (

        <section className='footer'>
            <div className='container'>
                <div className='social'>
                    <a href='https://twitter.com/' target="_blank">
                        <img src="./images/twitter.png" alt="" />
                    </a>
                    <a href='https://www.instagram.com/' target='_blank'>
                        <img src="./images/instagram.png" alt="" />
                    </a>
                    <a href='https://medium.com/' target='_blank'>
                        <img src="./images/medium.png" alt="" />
                    </a>
                </div>
                <div className='stamp'>
                    <div>
                        <p className="">Brought To You By</p>

                        <a href='#'>
                            <img src='images/creator.svg' />
                            NFT Constructer
                        </a>
                    </div>
                    <p >Outside Kids NFT 2022. All Rights Reserved</p>
                </div>
            </div>

            <div className='footer-img'>
                <img src="./images/footer-img.png" alt="" />
            </div>

        </section>

    )

}

export default Footer;
