import React, {useState, useRef} from 'react';
import RevealAnimation from '../RevealAnimation';
import axios from 'axios';
import './Contact.css';

export default function Contact() {
  const name = useRef()
  const email = useRef()
  const message = useRef()
  const [res, setRes] = useState('')
  const last = useRef(-10000)

  const send = (e) => {
    e.preventDefault();

    let now = new Date();
    if (now-last.current < 10000) {
      setRes('You can only send one message every 10 seconds');
      return
    }
    last.current = now
    axios.post('https://gifuzzz.eu/api/contact', {
      name: name.current.value,
      email: email.current.value,
      message: message.current.value
    }).then((response) => {
      setRes('Done. Thank you for contacting me!');
    }).catch((err) => {
      setRes('Error, please retry in a while...');
      last.current = new Date(); // reset time 
    })
  }
  return (
    <section id="contact">
      <RevealAnimation animationClass="reveal-text margin-auto">
        <h1 className="title">Contact</h1>
      </RevealAnimation>
      <RevealAnimation animationClass="reveal-text-reverse reveal-text-p margin-auto">
        <p>You can get in touch with me via the links at the end of the page, or you can just use this form.</p>
      </RevealAnimation>
      <RevealAnimation animationClass='fade-in'>
        <form className="margin-auto" onSubmit={send}>
          <input className="form-control" type="text" name="name" placeholder="Name" ref={name} required/>
          <input className="form-control" type="email" name="email" placeholder="Email" ref={email} required/>
          <textarea className="form-control" name="message" placeholder="Message" rows="7" ref={message} required></textarea>
          <button id="submit" type="submit">Send</button>
          <br/><em id="res">{res}</em>
        </form>
      </RevealAnimation>
    </section>
  )
}