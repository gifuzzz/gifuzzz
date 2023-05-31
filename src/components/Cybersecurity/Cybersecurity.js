import React from 'react';
import RevealAnimation from '../RevealAnimation';
import './Cybersecurity.css'

export default function Cybersecurity() {
  return (
    <section id="cybersecurity" className="center">
      <div> 
        <RevealAnimation animationClass="reveal-text">
          <h1>Cybersecurity</h1>
        </RevealAnimation>
        <RevealAnimation animationClass="reveal-text-reverse reveal-text-p">
          <p>
            I started to learn Ethical Hacking and CyberSecurity online, thanks to Udemy.<br/>
            I took part in the <a href="https://cyberchallenge.it/" target="_blank" rel="noreferrer">CyberChallenge</a> and <a href="https://olicyber.it/" target="_blank" rel="noreferrer">Olicyber</a> 2021 competitions, which helped me a lot in my cybersecurity learning path.
          </p>
        </RevealAnimation>
        <div id='ccit'>
          <RevealAnimation animationClass="reveal-text">
            <h2>CyberChallenge 2021</h2>
          </RevealAnimation>
          <RevealAnimation animationClass='fade-in'>
            <figure>
              <blockquote>
                <p>
                  CyberChallenge.IT, a training program for young talents between 16 and 23, is the main Italian initiative to identify, attract, recruit and place the next generation of cybersecurity professionals.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">Source: <a href="https://cyberchallenge.it" target="_blank" rel="noreferrer">cyberchallenge.it</a></figcaption>
            </figure>
          </RevealAnimation>
          <RevealAnimation animationClass="reveal-text reveal-text-p">
            <p>
              After successfully passing both logic and programming tests, and several month of training at the <a href="https://www.poliba.it/" target="_blank" rel="noreferrer">Bari's Polytechnic University</a>, we had a local Jeopardy-style CTF in which we had to use all of our knowledge to solve challenges of any kind.
              Unexpectedly I managed to get the first position, with which I won the first-classified plate, and became the leader of the team for the National Attack/Defence-style CTF.
            </p>
          </RevealAnimation>
          <RevealAnimation animationClass="reveal-text-reverse reveal-text-p">
            <p>
              I and my team learned some really useful tools such as <a href="https://github.com/eciavatta/caronte" target="_blank" rel="noreferrer">caronte</a> or <a href="https://github.com/DestructiveVoice/DestructiveFarm" target="_blank" rel="noreferrer">DestructiveFarm</a>, and finally on the 7th of July we gave our best.<br/>
              We eventually finished on the 6th position out of a total of 33 teams from all over the country.
            </p>
          </RevealAnimation>
          <RevealAnimation animationClass="reveal-text-reverse reveal-text-p">
            <p>
              Thanks to this big experience I also developed strong communication and teamworking skills.
            </p>
          </RevealAnimation>
        </div>
        <div id='olic'>
          <RevealAnimation animationClass="reveal-text">
            <h2>OliCyber 2021</h2>
          </RevealAnimation>
          <RevealAnimation animationClass='fade-in'>
            <figure>
              <blockquote>
                <p>
                  OliCyber is the program for the enhancement of excellence in cybersecurity, organized by the National Cybersecurity Laboratory of CINI (National Interuniversity Consortium for Informatics) aimed at encouraging and encouraging students from Italian secondary schools to approach IT security both in key to personal awareness and to help the most talented young people to orient themselves in the market of the sector.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">Source: <a href="https://olicyber.it" target="_blank" rel="noreferrer">olicyber.it</a></figcaption>
            </figure>
          </RevealAnimation>
          <RevealAnimation animationClass="reveal-text reveal-text-p">
            <p>
              Since I passed the tests for CyberChallenge, I was already subscribed in the OliCyber program.<br/>
              After the big Jeopardy-style CTF, I got the 19th position out of more than 150 students, winning a bronze medal.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  )
}