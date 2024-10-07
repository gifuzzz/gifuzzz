import React from 'react';
import RevealAnimation from '../../utils/RevealAnimation';
import { FaLinux, FaPython, FaHtml5, FaCss3, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaDatabase, FaSitemap, FaRobot, FaMicrochip, FaRaspberryPi, FaVuejs, FaBrain } from 'react-icons/fa'

export default function Whatiknow() {
  return (
    <div className="whatiknow">
      <div>
        <RevealAnimation animationClass="reveal-text">
          <h2>What I know</h2>
        </RevealAnimation>
        <RevealAnimation animationClass="reveal-text reveal-text-p">
          <p>
            Almost everything that I know is the product of years of self learning, practice, and projects that I like to dive into.
            I always enjoy learning something new and whenever I have time to code, I code random things.<br/>
            Here is what I know so far:
          </p>
        </RevealAnimation>
        <RevealAnimation animationClass="reveal-text-reverse reveal-text-p">
          <ul>
            <li><FaLinux/>  Linux/Unix - Love the simplicity of the command line.</li>
            <li><FaPython/>  Python - My most used programming language. I&#39;ve been using it for robots, web crawling, web development, and cybersecurity related stuff.</li>
            <li><FaHtml5/>  Html | <FaCss3/>  CSS | <FaJsSquare/>  Javascript - For basic web development.</li>
            <li><FaReact/>  ReactJS - For better web development. Furthermore, this website is made from srcatch with ReactJS and GatsbyJS.</li>
            <li><FaReact/>  React Native - For mobile development.</li>
            <li><FaNodeJs/>  NodeJS - For web development and WhatsApp bot.</li>
            <li><FaGitAlt/>  Git - For version control.</li>
            <li><FaDocker/>  Docker - For security of applications and scalability.</li>
            <li><FaDatabase/>  MongoDB - I've been using it with Python and Node.</li>
            <li><FaDatabase/>  SQL - Just the bases for making queries and SQL injection.</li>
            <li><FaRobot/>  IoT - Raspberry Pi and Arduino - “With programming knowledge and a bit of electronic you can reach the moon”.</li>
            <li><FaMicrochip/>  C (for Arduino) - The basic for programming with Arduino.</li>
            <li><FaSitemap/>  MQTT - IoT event management.</li>
            <li><FaRaspberryPi/>  Cloud with Raspberry - To have an external server to host websites and different projects.</li>
            <li><FaVuejs/>  VueJS - Still learning...</li>
            <li><FaBrain/>  Deep learning with Python - Still learning...</li>
          </ul>
        </RevealAnimation>
      </div>
    </div>
  )
}
