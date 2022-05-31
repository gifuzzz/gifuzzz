import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
      <section id="contact">
        <h1 className="title">Contact</h1>
        <p>You can get in touch with me via the links at the end of the page, or you can just use this form.</p>
        <form className="margin-auto" method="post">
          <input className="form-control" type="text" name="name" placeholder="Name" required />
          <input className="form-control" type="email" name="email" placeholder="Email" required />
          <textarea className="form-control" name="message" placeholder="Message" rows="7" required></textarea>
          <button id="submit" >Send</button>
          {/* type="submit" */}
          <em id="res"></em>
        </form>
      </section>
    )
}