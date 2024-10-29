import React from 'react';
import RevealAnimation from '../../utils/RevealAnimation';
import TechStack from './TechStack';

export default function Project({ title, href, techStack=[], children }) {
  return (
    <div className="project">
      <RevealAnimation animationClass="reveal-text">
        { href ? 
          <h2><a href={href} target="_blank" rel="noreferrer">{title}</a></h2>
          :
          <h2>{title}</h2>
        }
      </RevealAnimation>
      <RevealAnimation animationClass="reveal-text-reverse reveal-text-p">
        <TechStack techs={techStack} />
        {children}
      </RevealAnimation>
    </div>
  )
}