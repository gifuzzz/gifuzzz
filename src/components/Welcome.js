import React from "react";
import { HiChevronDoubleDown } from 'react-icons/hi';
import scrollTo from 'gatsby-plugin-smoothscroll';
import RevealAnimation from './RevealAnimation';

export default function Welcome() {
  return (
    <section className="center" id='home'>
      <div id="welcome">
        <RevealAnimation animationClass='reveal-text'>
          <h1
            // data-sal="slide-right"
            // data-sal-duration="1000"
            // data-sal-easing="ease-out"
            // data-sal-repeat
          >
            Hi, I'm Luigi!
          </h1>
        </RevealAnimation>
        <RevealAnimation animationClass='reveal-text-reverse reveal-text-p align-right'>
        <h2
          // data-sal="slide-left"
          // data-sal-duration="1000"
          // data-sal-easing="ease-out"
          // data-sal-repeat
        >
          I'm a developer and hacker
          <br/>
          from Italy and Belgium
        </h2>
        </RevealAnimation>
        <div
          className='center bounce'
          // data-sal="fade"
          // data-sal-duration="1000"
          // data-sal-easing="ease-out"
          // data-sal-repeat
        >
          <HiChevronDoubleDown
            id="chevronDown"
            onClick={() => scrollTo("#info")}
            cursor="pointer"
          />
        </div>
      </div>
    </section>
  )
}