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
        <div id='projects-list'>
          <Project
            title='QuakeBot'
            techStack={['FastAPI', 'React', 'Docker', 'OpenAI', 'Ollama']}
          >
            <p>Disaster-response simulation harness for autonomous humanoid agents. Features restricted observations, environment state transitions, replay, and OpenAI/Ollama adapters.</p>
          </Project>
          <Project
            title='CineSight'
            techStack={['CLIP', 'Flask', 'PostgreSQL', 'pgvector', 'React']}
          >
            <p>AI-powered movie discovery platform utilizing OpenAI CLIP image/text vector similarity search with PostgreSQL/pgvector and JWT/CSRF-secured admin tooling.</p>
          </Project>
          <Project
            title='ChitaPro'
            techStack={['Flask', 'MongoDB', 'Redis', 'Stripe', 'JWT']}
          >
            <p>IT recruitment platform API built with Flask, Stripe payment processing, Redis caching, and MongoDB. Won 1st Place at the AFC Startup Pitch Competition.</p>
          </Project>
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
        </div>
      </div>
    </section>
  )
}