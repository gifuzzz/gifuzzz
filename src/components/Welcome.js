import React from "react";
import { HiChevronDoubleDown } from 'react-icons/hi'
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Welcome() {
  return (
    <section className="center" id='home'>
      <div id="welcome">
        <h1
          data-sal="slide-right"
          data-sal-duration="700"
          data-sal-easing="ease-out"
          data-sal-repeat
        >
          Hi, I'm Luigi!
        </h1>
        <h2
          data-sal="slide-left"
          data-sal-duration="700"
          data-sal-easing="ease-out"
          data-sal-repeat
        >
          I'm a developer and hacker
          <br/>
          from Italy and Belgium
        </h2>
        <HiChevronDoubleDown
          id="chevronDown"
          onClick={() => scrollTo("#info")}
          cursor="pointer"
        />
      </div>
    </section>
  )
}