import React from 'react';
import './Info.css';
import RevealAnimation from '../../utils/RevealAnimation';
import Whoami from './Whoami';
import Whatiknow from "./Whatiknow";
import { KULEUVEN_URL } from '../../utils/consts';

export default function Info() {
  return (
    <section id="info" className="center">
        <div>
          <div className="whoami">
            <Whoami />
            <RevealAnimation animationClass="reveal-text-reverse reveal-text-p">
              <p>
                I am Luigi Fanuzzi, an Electronics & ICT Engineering student, with a passion for CyberSecurity and AI.
                Currently, I am pursuing my Master's degree (MSc) in Electronics and ICT Engineering Technology at{" "}
                <a href={KULEUVEN_URL} target="_blank" rel="noreferrer">
                  KU Leuven
                </a>
                .
              </p>
            </RevealAnimation>
          </div>
          <Whatiknow />
        </div>
      </section>
  )
}