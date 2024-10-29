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
          <p>Developed a mobile application for streaming and downloading music. It has a music player, playlist management, and the possibility to customize the main color of the app.</p>
        </Project>
        <Project
          title='Location tracker app'
          techStack={['React Native', 'GPS', 'Python', 'MongoDB']}
        >
          <p>Built an app to track and share the location of a device. Uses the device's GPS to track the location and sends it to a server, which stores it in a database. The app also has a feature to share the location with other users.</p>
        </Project>
        <Project
          title='Face Recognition Gym Turnstile'
          techStack={['Python', 'Bluetooth']}
        >
          <p>
            Created a face recognition system for a local gym to automate turnstile access, using simply a webcam.
            Using OpenCV, numpy, and face_recognition libraries, it recognizes the gym members and opens the turnstile for them.
            Moreover, integrated Bluetooth device to open the turnstile via mobile devices.
          </p>
        </Project>
        <Project
          title='WhatsApp bot'
          techStack={['NodeJS', 'MongoDB']}
        >
          <p>
            Created a whatsapp bot with many features and per-chat custom commands.
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
          techStack={['Python', 'Bluetooth', 'HTML', 'Javascript', 'CSS']}
        >
          <p>Bluetooth controller made to control my <a href={LIGHTS_URL} target="_blank" rel="noreferrer">aoguerbe led strip lights</a> from web browsers and telegram.</p>
        </Project>
        <Project
          title='motionctl'
          href={GITHUB_URL + "motionctl"}
          techStack={['Python', 'HTML', 'Javascript', 'CSS']}
        >
          <p><a href={MOTION_PROJECT_URL} target="_blank" rel="noreferrer">Motion</a> is a lightweight program that allows you to create a camera server from, for instance, a Raspberry Pi.
          By default it also stores videos when it detects something moving, but its web interface does not allow you to watch these videos.<br/>
          Motionctl lets you to watch and delete these motion videos via a simple web interface.</p>
        </Project>
      </div>
    </section>
  )
}