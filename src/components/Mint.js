import React from 'react';

import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import { HashLink as HashLink } from 'react-router-hash-link';

function Mint() {
    const [totalMinted, setTotalMinted] = useState(0);
    const [value, setValue] = useState(1);
    return (
        <section className='mint' data-aos="flip-right">
            <div className='container'>
                <h1 className='m-logo'>
                    <img src='./images/logo.png' alt='' />
                </h1>
                <h1>
                    <img src="./images/mint-title.png" alt="" />
                </h1>
                <div className='mint-row-2'>
                    <div className='left'>
                        <h1><img src="./images/mint-img.png" alt="" /></h1>
                    </div>
                    <div className='right'>
                        <div className='box'>
                            <h1><span id='total_supply'>0</span> minted</h1>
                            <h1>cost <span id='mint_cost'>0</span> eth</h1>
                            <h1>max <span className='max_supply'>0</span> nftS</h1>
                            <h1>transaction</h1>
                        </div>
                        <div className='gas'>
                            <span className='minus'>
                                -
                            </span>
                            <span id="mint_count" className='value'>
                            </span>
                            <span className='plus'>
                                +
                            </span>

                        </div>

                        <button id='mintNow' className='cr mint-now-btn mintBtn'>Connect Wallet</button>
                        <span id='user_address' className='hide'></span>
                        <span id='hash_proof' className='hide'></span>

                    </div>

                </div>

            </div>
            <div className='mint-bottom-img'>
                <img src="./images/nimt-bottom-img.png" alt="" />

            </div>

        </section>
    )
}

export default Mint;