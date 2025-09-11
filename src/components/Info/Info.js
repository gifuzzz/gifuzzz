import React from 'react';
import './Info.css';
import RevealAnimation from '../../utils/RevealAnimation';
import Whoami from './Whoami';
import Whatiknow from "./Whatiknow";
import { KULEUVEN_URL } from '../../utils/consts';

export default function Info() {
  return (
    <section id="info" className="center">
        <div>
          <div className="whoami">
            <Whoami />
              <RevealAnimation animationClass="reveal-text reveal-text-p">
                <p>
                  First, welcome to my website! I made this in order to have a personal portfolio with some information about me, and activities or projects in which I take part.<br/>
                </p>
                </RevealAnimation>
                <RevealAnimation animationClass="reveal-text-reverse reveal-text-p">
                <p>
                  I am Luigi Fanuzzi, an engineering student with a passion for IT and CyberSecurity.
                <br/>
                  Currently, I am studying in the third year of the Bachelor's degree Electronics and ICT Engineering Technology at{" "}
                  <a href={KULEUVEN_URL} target="_blank" rel="noreferrer">
                    KU Leuven Group T campus
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