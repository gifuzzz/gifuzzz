import React from 'react';
import './Info.css';
import RevealAnimation from '../../utils/RevealAnimation';
import Whoami from './Whoami';
import Whatiknow from "./Whatiknow";
import { BICS_URL } from '../../utils/consts';

export default function Info() {
  const age = parseInt(new Date(Date.now()-new Date('2004-07-05'))/ (1000 * 3600 * 24 * 365))

  return (
    <section id="info" className="center">
        <div>
          <div className="whoami">
            <Whoami />
              <RevealAnimation animationClass="reveal-text reveal-text-p">
                <p>
                  First, welcome to my website! I made this in order to have a personal portfolio with some information about me and activities or projects in which I take part.<br/>
                </p>
                </RevealAnimation>
                <RevealAnimation animationClass="reveal-text-reverse reveal-text-p">
                <p>
                  I am Luigi Fanuzzi, an high school student with the passion for IT and CyberSecurity.
                <br/>
                  I am {age} years old and at the moment I am attending the 13th year (last year) at{" "}
                  <a href={BICS_URL} target="_blank" rel="noreferrer">
                    BICS
                  </a>
                  .
                </p>
              </RevealAnimation>
            </div>
          <Whatiknow />
        </div>
      </section>
  )
}