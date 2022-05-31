import React from 'react';
import RevealAnimation from '../RevealAnimation';
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="center">
      <div>
        <RevealAnimation animationClass="reveal-text">
          <h1>Projects</h1>
        </RevealAnimation>
        <RevealAnimation animationClass="reveal-text reveal-text-p">
          <p>Most of my projects are private, but you can find the public ones <a href="https://github.com/gifuzzz" target="_blank">in my github account</a></p>
        </RevealAnimation>
        <div className="project">
          <RevealAnimation animationClass="reveal-text">
            <h2>Face regognition to open the turnstile of a local gym<br/></h2>
          </RevealAnimation>
          <RevealAnimation animationClass="reveal-text reveal-text-p">
            <p>Face recognition programme used by a local gym to open its turnstile with the only use of your face.</p>
          </RevealAnimation>
        </div>
        <div className="project">
          <RevealAnimation animationClass="reveal-text">
            <h2>WhatsApp bot<br/></h2>
          </RevealAnimation>
          <RevealAnimation animationClass="reveal-text reveal-text-p">
            <p>
              Using NodeJS I made a whatsapp bot with many features and custom commands.<br/>
              For instance, it can transcribe your vocal messages and make stickers out of pictures and videos.
            </p>
          </RevealAnimation>
        </div>
        <div className="project">
          <RevealAnimation animationClass="reveal-text">
            <h2><a href="https://urlhide.annotatio.online" target="_blank">URL Hide</a></h2>
          </RevealAnimation>
          <RevealAnimation animationClass="reveal-text reveal-text-p">
            <p>Built it for fun and for learning React JS, you can use it as link shortner or to hide the real URL of a link.</p>
          </RevealAnimation>
        </div>
        <div className="project">
          <RevealAnimation animationClass="reveal-text">
            <h2><a href="https://github.com/gifuzzz/ledstrip" target="_blank">ledstrip</a></h2>
          </RevealAnimation>
          <RevealAnimation animationClass="reveal-text reveal-text-p">
            <p>Bluetooth controller made to control my <a href="https://www.amazon.it/AOGUERBE-Striscia-Telecomando-Decorativa-Controllato/dp/B08BZFNLLS/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&amp;dchild=1&amp;keywords=aoguerbe&amp;qid=1630516627&amp;sr=8-1" target="_blank">aoguerbe led strip lights</a> from web browsers and telegram.</p>
          </RevealAnimation>
        </div>
        <div className="project">
          <RevealAnimation animationClass="reveal-text">
            <h2><a href="https://github.com/gifuzzz/motionctl" target="_blank">motionctl</a></h2>
          </RevealAnimation>
          <RevealAnimation animationClass="reveal-text reveal-text-p">
            <p><a href="https://motion-project.github.io/" target="_blank">Motion</a> is a program that you can install on your Raspberry Pi to have a camera server, and it also stores videos of when it founds motion. Unfortunately, you can&#39;t watch these videos from the motion web interface, so I made something.<br/>Motionctl lets you watch and delete motion videos via a web interface.<br/></p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  )
}