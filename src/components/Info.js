import React from 'react';
import RevealAnimation from './RevealAnimation';
import Whoami from './Whoami';
import Whatiknow from "../components/Whatiknow";

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
                {/* If you want to dive more into my <Link to='/coding'>coding</Link> or <Link to='/cybersecurity'>cybersecurity</Link> skills, just scroll down or click on the previous links. */}
              </p>
              </RevealAnimation>
              <RevealAnimation animationClass="reveal-text reveal-text-p">
              <p>
                I am Luigi Fanuzzi, an high school student with the passion for IT and CyberSecurity.
              <br/>
                I am {age} years old and I'm still studying at High School.
                At the moment I am attending the 12th year (second-last year) at{" "}
                <a href="https://bicschools.be/" target="_blank" rel="noreferrer">
                  BICS
                </a>
                .
              </p>
            </RevealAnimation>
          </div>
          {/* <div className="whereami">
            <RevealAnimation animationClass="reveal-text">
              <h2 className="reveal-text">Where am I</h2>
            </RevealAnimation>
            <RevealAnimation animationClass="reveal-text reveal-text-p">
              <p>
                Born in Italy, I lived there, until September 2021. Then I moved in Belgium for school (and probably university).
                <br/>
                Now I'm living here, but wher I am does not mind since you can always find me <Link to="/contact">here</Link>.
              </p>
            </RevealAnimation>
          </div> */}
          <Whatiknow />
        </div>
      </section>
  )
}