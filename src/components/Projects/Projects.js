import React from 'react';
import RevealAnimation from '../../utils/RevealAnimation';
import './Projects.css'
import { GITHUB_URL, LIGHTS_URL, MOTION_PROJECT_URL, URLHIDE_URL } from '../../utils/consts';

export default function Projects() {
  return (
    <section id="projects" className="center">
      <div>
        <RevealAnimation animationClass="reveal-text">
          <h1>Projects</h1>
        </RevealAnimation>
        <RevealAnimation animationClass="reveal-text-reverse reveal-text-p">
          <p>Most of my projects are private, but you can find the public ones <a href={GITHUB_URL} target="_blank" rel="noreferrer">in my github account</a></p>
        </RevealAnimation>
        <div className="project">
          <RevealAnimation animationClass="reveal-text">
            <h2>Face recognition to open the turnstile of a local gym<br/></h2>
          </RevealAnimation>
          <RevealAnimation animationClass="reveal-text-reverse reveal-text-p">
            <p>Face recognition programme used by a local gym to open its turnstile with the only use of your face.</p>
          </RevealAnimation>
        </div>
        <div className="project">
          <RevealAnimation animationClass="reveal-text">
            <h2>WhatsApp bot<br/></h2>
          </RevealAnimation>
          <RevealAnimation animationClass="reveal-text-reverse reveal-text-p">
            <p>
              Using NodeJS I made a whatsapp bot with many features and custom commands.<br/>
              For instance, it can transcribe your vocal messages and make stickers out of pictures and videos.
            </p>
          </RevealAnimation>
        </div>
        <div className="project">
          <RevealAnimation animationClass="reveal-text">
            <h2><a href={URLHIDE_URL} target="_blank" rel="noreferrer">URL Hide</a></h2>
          </RevealAnimation>
          <RevealAnimation animationClass="reveal-text-reverse reveal-text-p">
            <p>Built it for fun and for learning React JS, you can use it as link shortner or to hide the real URL of a link.</p>
          </RevealAnimation>
        </div>
        <div className="project">
          <RevealAnimation animationClass="reveal-text">
            <h2><a href={GITHUB_URL + "ledstrip"} target="_blank" rel="noreferrer">ledstrip</a></h2>
          </RevealAnimation>
          <RevealAnimation animationClass="reveal-text-reverse reveal-text-p">
            <p>Bluetooth controller made to control my <a href={LIGHTS_URL} target="_blank" rel="noreferrer">aoguerbe led strip lights</a> from web browsers and telegram.</p>
          </RevealAnimation>
        </div>
        <div className="project">
          <RevealAnimation animationClass="reveal-text">
            <h2><a href={GITHUB_URL + "motionctl"} target="_blank" rel="noreferrer">motionctl</a></h2>
          </RevealAnimation>
          <RevealAnimation animationClass="reveal-text-reverse reveal-text-p">
            <p><a href={MOTION_PROJECT_URL} target="_blank" rel="noreferrer">Motion</a> is a program that you can install on your Raspberry Pi to have a camera server, and it also stores videos of when it founds motion. Unfortunately, you can&#39;t watch these videos from the motion web interface, so I made something.<br/>Motionctl lets you watch and delete motion videos via a web interface.<br/></p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  )
}
