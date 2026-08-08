import React from 'react';
import RevealAnimation from '../../utils/RevealAnimation';
import './Cybersecurity.css'
import { CSCBE_URL, CYBERCHALLENGE_URL, OLICYBER_URL, POLIBA_URL } from '../../utils/consts';
import Project from '../Projects/Project';

export default function Cybersecurity() {
  return (
    <section id="cybersecurity" className="center">
      <div> 
        <RevealAnimation animationClass="reveal-text">
          <h1>Cybersecurity</h1>
        </RevealAnimation>
        <RevealAnimation animationClass="reveal-text-reverse reveal-text-p">
          <p>Competitive ethical hacking achievements across Jeopardy & Attack/Defense CTFs and national security competitions:</p>
        </RevealAnimation>
        <div id="cybersecurity-list">
          <Project title='Cyber Security Challenge Belgium 2026' href={CSCBE_URL}>
            <p>Achieved 2nd place in the web category of the qualifying CTF, I was invited to the finals.</p>
          </Project>
          <Project title='CyberChallenge 2021' href={CYBERCHALLENGE_URL}>
            <p>Achieved 1st place in the local Jeopardy CTF at <a href={POLIBA_URL} target="_blank" rel="noreferrer">Polytechnic University of Bari</a> and captained the team to 6th place nationally in the 24-hour Attack/Defense CTF using security tools like Caronte and DestructiveFarm.</p>
          </Project>
          <Project title='OliCyber 2021' href={OLICYBER_URL}>
            <p>Awarded Bronze Medal at the National Italian Olympiads in Cybersecurity (CINI Lab) after placing 19th out of 150+ top national qualifiers.</p>
          </Project>
        </div>
      </div>
    </section>
  )
}
