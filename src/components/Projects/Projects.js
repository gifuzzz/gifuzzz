import React from 'react';
import RevealAnimation from '../../utils/RevealAnimation';
import './Projects.css'
import { GITHUB_URL, LIGHTS_URL, MOTION_PROJECT_URL, URLHIDE_URL } from '../../utils/consts';
import Project from './Project'

export default function Projects() {
  return (
    <section id="projects" className="center">
      <div>
        <RevealAnimation animationClass="reveal-text">
          <h1>Projects</h1>
        </RevealAnimation>
        <RevealAnimation animationClass="reveal-text-reverse reveal-text-p">
          <p>Most of my projects are private, but you can find the public ones <a href={GITHUB_URL} target="_blank" rel="noreferrer">in my github account</a>.</p>
        </RevealAnimation>
        <Project
          title='Gigify'
          techStack={['React Native', 'NodeJS', 'MongoDB']}
        >
          <p>A React Native mobile app to listen and download music without annoying advertisements. Customizable UI and possibility to create private personal playlists.</p>
          
        </Project>
        <Project
          title='Face regognition to open the turnstile of a local gym'
          techStack={['Python', 'OpenCV', 'Numpy', 'Bluetooth API']}
        >
          <p>Face recognition programme used by a local gym to open its turnstile with the only use of the cutsomer's face.</p>
        </Project>
        <Project
          title='WhatsApp bot'
          techStack={['NodeJS', 'MongoDB']}
        >
          <p>
            Using NodeJS I made a whatsapp bot with many features and per-chat custom commands.
            For instance, it can transcribe your vocal messages and make custom stickers out of pictures and videos.
          </p>
        </Project>
        <Project
          title='URL Hide'
          href={URLHIDE_URL}
          techStack={['ReactJS', 'Python', 'MongoDB']}
        >
          <p>Built it for fun and for learning ReactJS, you can use it as link shortner or to "hide" the real URL of a link.</p>
        </Project>
        <Project
          title='ledstrip'
          href={GITHUB_URL + "ledstrip"}
          techStack={['Python', 'Flask', 'bluepy', 'HTML', 'Javascript', 'CSS']}
        >
          <p>Bluetooth controller made to control my <a href={LIGHTS_URL} target="_blank" rel="noreferrer">aoguerbe led strip lights</a> from web browsers and telegram.</p>
        </Project>
        <Project
          title='motionctl'
          href={GITHUB_URL + "motionctl"}
            
        >
          <p><a href={MOTION_PROJECT_URL} target="_blank" rel="noreferrer">Motion</a> is a lightweight program that allows you to create a camera server from, for instance, a Raspberry Pi.
          By default it also stores videos when it detects something moving, but its web interface does not allow you to watch these videos.<br/>
          Motionctl lets you to watch and delete these motion videos via a simple web interface.</p>
        </Project>
      </div>
    </section>
  )
}