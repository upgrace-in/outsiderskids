import React from 'react';

import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { HashLink as HashLink } from 'react-router-hash-link';


function Home (){

const [faq1Active, setFaq1Active] = useState();
  const [faq2Active, setFaq2Active] = useState();
  const [faq3Active, setFaq3Active] = useState();
  const [faq4Active, setFaq4Active] = useState();
  const [faq5Active, setFaq5Active] = useState();
  const [faq6Active, setFaq6Active] = useState();


    return(
        <>
        {/*----------------- intro Section  -------------*/}
        <section className='intro'>
            <div className='container' data-aos="fade-up">
                <h1 className='m-logo'>
                    <img src='./images/logo.png' alt='' />
                </h1>
               <h1>
               <img src="./images/hero-title-img.png" alt="" />
               </h1>
               <p>
               We are Outsiders Kids. 10,000 students ready to learn 
               and grow in education and community. We are the FIRST 
               EVER fully education-based NFT. This is one of the many 
               things that make us unique. Another reason we stand out 
               from the crowd is our community we are striving to create. 
               We are working nonstop to create a magical, inclusive and 
               loving community around our owners. We hope to see you on 
               this journey soon.
               </p>
               <Link to="Mint">
                <button className='mint-btn'>
                    MINT NOW
                </button>
               </Link>
            </div>
            <div className='hero-bottom-img'>
               <img src="./images/hero-bottom-2.png" alt="" />
               <div className='socials'>
                <div className='discord'>
                    <a href='https://discord.com/' target="_blank">
                        <img src="./images/discord.png" alt="" />
                    </a>
                </div>
                <div className='twitter'>
                    <a href='https://twitter.com/' target="_blank">
                        <img src="./images/twitter.png" alt="" />
                    </a>
                </div>
                <div className='instagram'>
                    <a href='https://www.instagram.com/' target='_blank'>
                        <img src="./images/instagram.png" alt="" />
                    </a>
                </div>
                <div className='medium'>
                    <a href='https://medium.com/' target='_blank'>
                        <img src="./images/medium.png" alt="" />
                    </a>
                </div>
                <div className='opensea'>
                    <a href='https://opensea.io/' target='_blank'>
                        <img src="./images/opensea.png" alt="" />
                    </a>
                    
                </div>
               </div>
            </div>
        </section>

        {/*----------------- About Section  -------------*/}
        <section className='about' id='about'>
            <div className='container' data-aos="fade-up">
                <h1>what we do?</h1>
                <p>
                Our goal here is to provide our owners with a community 
                that outshines the rest, and give them unique, custom 
                curriculum promoting outdoor education. These lessons 
                can be shared with family or even students to add an 
                extra touch of magic to everyday education. Owning one 
                of these NFTs grants you access to this community and 
                more awesome features soon to come.
                </p>
            </div>
            <div className='nft-info' data-aos="fade-up">
                <div className='info-box'>
                    <p>PUBLIC PRICe</p>
                    <h1>0.13 ETH</h1>
                </div>
                <div className='info-box'>
                    <p>PRESALE PRICE</p>
                    <h1>0.2 ETH</h1>
                </div>
                <div className='info-box'>
                    <p>TOTAL NFTS</p>
                    <h1>10,000</h1>
                </div>

            </div>
            <div className='about-side-img-1' data-aos="fade-right">
            <img src="./images/about-side-img-1.png" alt="" />
            </div>
            <div className='about-side-img-2' data-aos="fade-right">
            <img src="./images/about-side-img-2.png" alt="" />
            </div>
            <div className='about-bottom-shadow'>
            </div>

        </section>

        {/* <!---------------------  nft belts -----------------------> */}
        <section className='nft-slider'>
        <div className="nft-belts Marquee">
        <div className="belt-s Marquee-content">
          <img
            src="./images/belt-1.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-2.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-3.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-4.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-5.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-6.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-7.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-8.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-9.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-10.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-11.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-12.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-13.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-14.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-1.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-2.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-3.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-4.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-5.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-6.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-7.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-8.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-9.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-10.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-11.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-12.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-13.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-14.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
        </div>
        <div className="belt-l Marquee-content-2">
          <img
            src="./images/belt-10.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-16.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-5.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-9.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-11.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-1.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-6.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-5.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-12.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-1.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-2.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-3.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-8.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-4.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
           <img
            src="./images/belt-10.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-16.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-5.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-9.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-11.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-1.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-6.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-5.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-12.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-1.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-2.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-3.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-8.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
          <img
            src="./images/belt-4.png"
            alt="Gazelion NFT"
            className="Marquee-tag"
          />
        </div>
      </div>

        </section>

        {/*------------- Roadmap Section  -----------*/}
        <section className='roadmap' id='roadmap'>
            <div className='container' >
                <h1 data-aos="fade-up">
                <img src="./images/roadmap-title.png" alt="" />
                </h1>
                {/* Phase 1  */}
                <div className='row-2' data-aos="fade-up">
                    <div className='left blank-bar'>
                    </div>
                    <div className='right'>
                        <div className='right-con'>
                            <h1>
                                <img src="./images/phase-1.png" alt="" />
                            </h1>
                            <p>
                                Gain followers, build the community, get ready for launch!
                            </p>
                        </div>
                        <div className='dot-right'>
                            <img src="./images/phase-dot.png" alt="" />
                        </div>
                    </div>
                    <div className='bar'>
                    <img src="./images/faq-m-bar.png" alt="" />
                    </div>
                </div>
                {/* Phase 2  */}
                <div className='row-2' data-aos="fade-up">
                    <div className='left'>
                    <div className='left-con'>
                            <h1>
                                <img src="./images/phase-2.png" alt="" />
                            </h1>
                            <p>
                            Once the community is ready, our whitelist 
                            members are going to have access to a presale 
                            before we release the public launch.
                            </p>
                        </div>
                        <div className='dot-left'>
                            <img src="./images/phase-dot.png" alt="" />
                        </div>
                    </div>
                    <div className='right blank-bar'>
                    </div>
                    <div className='bar'>
                    <img src="./images/faq-m-bar.png" alt="" />
                    </div>
                </div>
                {/* Phase 3  */}
                <div className='row-2' data-aos="fade-up">
                    <div className='left blank-bar'>
                    </div>
                    <div className='right'>
                        <div className='right-con'>
                            <h1>
                                <img src="./images/phase-3.png" alt="" />
                            </h1>
                            <p>
                            GO TIME. The kids are going to be let loose, 
                            ready to be minted by whoever wants a chance to 
                            be a part of this awesome community.
                            </p>
                        </div>
                        <div className='dot-right'>
                            <img src="./images/phase-dot.png" alt="" />
                        </div>
                    </div>
                    <div className='bar'>
                    <img src="./images/faq-m-bar.png" alt="" />
                    </div>
                </div>
                {/* Phase 4  */}
                <div className='row-2' data-aos="fade-up">
                    <div className='left'>
                    <div className='left-con'>
                            <h1>
                                <img src="./images/phase-4.png" alt="" />
                            </h1>
                            <p>
                            We are going to host free merch drops, 
                            streams, and exclusive meetings and 
                            events for owners of our NFTs.
                            </p>
                        </div>
                        <div className='dot-left'>
                            <img src="./images/phase-dot.png" alt="" />
                        </div>
                    </div>
                    <div className='right blank-bar'>
                        
                    </div>
                    <div className='bar'>
                    <img src="./images/faq-m-bar.png" alt="" />
                    </div>
                </div>
                {/* Phase 5  */}
                <div className='row-2' data-aos="fade-up">
                    <div className='left blank-bar'>
                    </div>
                    <div className='right'>
                        <div className='right-con'>
                            <h1>
                                <img src="./images/phase-5.png" alt="" />
                            </h1>
                            <p>
                            We are going to be dropping exclusive, custom-written 
                            curriculum to our owners on set dates for them 
                            to use with their families or even students.
                            </p>
                        </div>
                        <div className='dot-right'>
                            <img src="./images/phase-dot.png" alt="" />
                        </div>
                    </div>
                    <div className='bar'>
                    <img src="./images/faq-m-bar.png" alt="" />
                    </div>
                </div>
                {/* Phase 6  */}
                <div className='row-2' data-aos="fade-up">
                    <div className='left'>
                    <div className='left-con'>
                            <h1>
                                <img src="./images/phase-6.png" alt="" />
                            </h1>
                            <p>
                            If the community is still flourishing, 
                            we are going to be dropping a 2nd collection, 
                            1/1s, and more exciting content to come in the future.
                            </p>
                        </div>
                        <div className='dot-left'>
                            <img src="./images/phase-dot.png" alt="" />
                        </div>
                    </div>
                    <div className='right blank-bar'>
                        
                    </div>
                    <div className='bar'>
                    <img src="./images/faq-m-bar.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='roadmap-side-img-1' data-aos="fade-right">
                <img src="./images/roadmap-side-img-1.png" alt="" />
            </div>
            <div className='roadmap-cloud-1'>
                <img src="./images/roadmap-cloud.png" alt="" />
            </div>
            <div className='roadmap-cloud-2'>
                <img src="./images/roadmap-cloud.png" alt="" />
            </div>
            <div className='roadmap-cloud-3'>
                <img src="./images/roadmap-cloud.png" alt="" />
            </div>
            <div className='roadmap-bottom-img'>
                <img src="./images/roadmap-bottom-img.png" alt="" />
            </div>

        </section>


        {/*---------- Team Section -----------*/}
        <section className='team' id='team'>
            <div className='container'>
                <h1 data-aos="fade-up">TEAM</h1>
                <div className='row-2'>
                
                    <div className='team-box' data-aos="flip-up">
                        <img src="./images/team-2.png" alt="" />
                        <h1>team member</h1>
                        <p>We are Outsiders Kids. 10,000 students ready to 
                            learn and grow in education and community.</p>
                    </div>
                    <div className='team-box' data-aos="flip-up">
                        <img src="./images/team-3.png" alt="" />
                        <h1>team member</h1>
                        <p>We are Outsiders Kids. 10,000 students ready to 
                            learn and grow in education and community.</p>
                    </div>

                </div>

            </div>
            <div className='team-side-img-1' data-aos="fade-right">
                <img src="./images/team-side-img-1.png" alt="" />
            </div>
            <div className='team-side-img-2' data-aos="fade-right">
                <img src="./images/team-side-img-2.png" alt="" />
            </div>

        </section>

        {/*--------- FAQ SECTION  ------------*/}
        <section className='faqs' id='faqs'>
            <div className='container'>
                <h1 data-aos="fade-up">
                <img src="./images/faq-title.png" alt="" />
                </h1>
                <div className='faq-row' data-aos="fade-up">
                    <div className='left'>
                        <div className="faq">
                            <div className="container">
                                <div className="questions-answers">
                                    {/* FAQ 1  */}
                                    <div
                                    className={
                                        faq1Active ? "question-answer active" : "question-answer"
                                    }
                                    onClick={() => {
                                        setFaq1Active(!faq1Active);
                                    }}
                                    >
                                    <div className="question">
                                        <p>What are the benefits of buying this NFT?</p>
                                        <svg
                                        width="18"
                                        height="11"
                                        viewBox="0 0 18 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M8.04908 10.6246L0.396686 3.38359C-0.132229 2.88311 -0.132229 2.07381 0.396686 1.57865L1.66833 0.375363C2.19725 -0.125121 3.05252 -0.125121 3.5758 0.375363L9 5.50799L14.4242 0.375363C14.9531 -0.125121 15.8084 -0.125121 16.3317 0.375363L17.6033 1.57865C18.1322 2.07914 18.1322 2.88843 17.6033 3.38359L9.95092 10.6246C9.43326 11.1251 8.57799 11.1251 8.04908 10.6246Z"
                                            fill="white"
                                        />
                                        </svg>
                                    </div>

                                    <div className="answer">
                                        <p>
                                        Our owners gain access to members-only merch, roles, and meetings and soon we will have a newsletter drop for our owners.
                                        </p>
                                    </div>
                                    </div>
                                    {/* FAQ 2  */}
                                    <div
                                    className={
                                        faq2Active ? "question-answer active" : "question-answer"
                                    }
                                    onClick={() => {
                                        setFaq2Active(!faq2Active);
                                    }}
                                    >
                                    <div className="question">
                                        <p>How do I buy an Outsiders Kid? </p>
                                        <svg
                                        width="18"
                                        height="11"
                                        viewBox="0 0 18 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M8.04908 10.6246L0.396686 3.38359C-0.132229 2.88311 -0.132229 2.07381 0.396686 1.57865L1.66833 0.375363C2.19725 -0.125121 3.05252 -0.125121 3.5758 0.375363L9 5.50799L14.4242 0.375363C14.9531 -0.125121 15.8084 -0.125121 16.3317 0.375363L17.6033 1.57865C18.1322 2.07914 18.1322 2.88843 17.6033 3.38359L9.95092 10.6246C9.43326 11.1251 8.57799 11.1251 8.04908 10.6246Z"
                                            fill="white"
                                        />
                                        </svg>
                                    </div>

                                    <div className="answer">
                                        <p>
                                        Click “Mint Now” on our website, or go to our opensea collection and pick one up there. 
                                        </p>
                                    </div>
                                    </div>
                                    {/* FAQ 3  */}
                                    <div
                                    className={
                                        faq3Active ? "question-answer active" : "question-answer"
                                    }
                                    onClick={() => {
                                        setFaq3Active(!faq3Active);
                                    }}
                                    >
                                    <div className="question">
                                        <p>How do I get on the Whitelist?</p>
                                        <svg
                                        width="18"
                                        height="11"
                                        viewBox="0 0 18 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M8.04908 10.6246L0.396686 3.38359C-0.132229 2.88311 -0.132229 2.07381 0.396686 1.57865L1.66833 0.375363C2.19725 -0.125121 3.05252 -0.125121 3.5758 0.375363L9 5.50799L14.4242 0.375363C14.9531 -0.125121 15.8084 -0.125121 16.3317 0.375363L17.6033 1.57865C18.1322 2.07914 18.1322 2.88843 17.6033 3.38359L9.95092 10.6246C9.43326 11.1251 8.57799 11.1251 8.04908 10.6246Z"
                                            fill="white"
                                        />
                                        </svg>
                                    </div>

                                    <div className="answer">
                                        <p>
                                        To get on the whitelist, you need to be active in our community (Twitter, Discord)   
                                                                             </p>
                                    </div>
                                    </div>
                                    {/* FAQ 4  */}
                                    <div
                                    className={
                                        faq4Active ? "question-answer active" : "question-answer"
                                    }
                                    onClick={() => {
                                        setFaq4Active(!faq4Active);
                                    }}
                                    >
                                    <div className="question">
                                        <p>When is the Mint?</p>
                                        <svg
                                        width="18"
                                        height="11"
                                        viewBox="0 0 18 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M8.04908 10.6246L0.396686 3.38359C-0.132229 2.88311 -0.132229 2.07381 0.396686 1.57865L1.66833 0.375363C2.19725 -0.125121 3.05252 -0.125121 3.5758 0.375363L9 5.50799L14.4242 0.375363C14.9531 -0.125121 15.8084 -0.125121 16.3317 0.375363L17.6033 1.57865C18.1322 2.07914 18.1322 2.88843 17.6033 3.38359L9.95092 10.6246C9.43326 11.1251 8.57799 11.1251 8.04908 10.6246Z"
                                            fill="white"
                                        />
                                        </svg>
                                    </div>

                                    <div className="answer">
                                        <p>
                                        The projected Mint time is going to be early to mid June.

                                        </p>
                                    </div>
                                    </div>
                                    {/* FAQ 5  */}
                                    <div
                                    className={
                                        faq5Active ? "question-answer active" : "question-answer"
                                    }
                                    onClick={() => {
                                        setFaq5Active(!faq5Active);
                                    }}
                                    >
                                    <div className="question">
                                        <p>What is the Mint price for Whitelist?</p>
                                        <svg
                                        width="18"
                                        height="11"
                                        viewBox="0 0 18 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M8.04908 10.6246L0.396686 3.38359C-0.132229 2.88311 -0.132229 2.07381 0.396686 1.57865L1.66833 0.375363C2.19725 -0.125121 3.05252 -0.125121 3.5758 0.375363L9 5.50799L14.4242 0.375363C14.9531 -0.125121 15.8084 -0.125121 16.3317 0.375363L17.6033 1.57865C18.1322 2.07914 18.1322 2.88843 17.6033 3.38359L9.95092 10.6246C9.43326 11.1251 8.57799 11.1251 8.04908 10.6246Z"
                                            fill="white"
                                        />
                                        </svg>
                                    </div>

                                    <div className="answer">
                                        <p>
                                        Our whitelist members will be able to purchase our NFT’s at a discounted price of 0.08 ETH.
                                        </p>
                                    </div>
                                    </div>
                                    {/* FAQ 6  */}
                                    {/* <div
                                    className={
                                        faq6Active ? "question-answer active" : "question-answer"
                                    }
                                    onClick={() => {
                                        setFaq6Active(!faq6Active);
                                    }}
                                    >
                                    <div className="question">
                                        <p>What are gas fees?</p>
                                        <svg
                                        width="18"
                                        height="11"
                                        viewBox="0 0 18 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M8.04908 10.6246L0.396686 3.38359C-0.132229 2.88311 -0.132229 2.07381 0.396686 1.57865L1.66833 0.375363C2.19725 -0.125121 3.05252 -0.125121 3.5758 0.375363L9 5.50799L14.4242 0.375363C14.9531 -0.125121 15.8084 -0.125121 16.3317 0.375363L17.6033 1.57865C18.1322 2.07914 18.1322 2.88843 17.6033 3.38359L9.95092 10.6246C9.43326 11.1251 8.57799 11.1251 8.04908 10.6246Z"
                                            fill="white"
                                        />
                                        </svg>
                                    </div>

                                    <div className="answer">
                                        <p>
                                        Gas fees are transaction fees paid to miners on a 
                                        blockchain protocol to have your transaction included 
                                        in the block. Gas fees are heavily affected by supply 
                                        and demand. Having lots of transactions will result 
                                        in high gas fees. This is where being on a whitelist 
                                        is beneficial (little to no competition = low gas fees).
                                        </p>
                                    </div>
                                    </div> */}

                                </div>
                            </div>

                                <img
                                src="/images/page-landing/faq-bg-element-1.png"
                                alt=""
                                className="faq-bg-element-1"
                                />
                        </div>
                    </div>

                    <div className='right'>
                        <div className='faq-img'>
                        <img src="./images/faq-img.png" alt="" />
                        </div>
                        <div className='faq-q-1' data-aos="fade-down-left">
                            <img src="./images/faq-q-1.png" alt="" />
                        </div>
                        <div className='faq-q-2' data-aos="fade-down-left">
                            <img src="./images/faq-q-2.png" alt="" />
                        </div>
                        <div className='faq-q-3' data-aos="fade-down-left">
                            <img src="./images/faq-q-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    )
}

export default Home;