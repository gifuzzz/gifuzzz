import React from "react";
import './Welcome.css';
import { HiChevronDoubleDown } from 'react-icons/hi';
import scrollTo from 'gatsby-plugin-smoothscroll';
import RevealAnimation from '../../utils/RevealAnimation';

export default function Welcome() {
  return (
    <section className="center" id='home'>
      <div id="welcome">
        <RevealAnimation animationClass='reveal-text'>
          <h1>
            Hi, I'm Luigi!
          </h1>
        </RevealAnimation>
        <RevealAnimation animationClass='reveal-text-reverse reveal-text-p align-right'>
        <h2>
          I'm a developer and hacker
          <br/>
          from Italy and Belgium
        </h2>
        </RevealAnimation>
        <div className='center bounce'>
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