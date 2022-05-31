import React from "react";
import { IoMail } from 'react-icons/io5'
import { RiInstagramFill } from 'react-icons/ri'
import { BsTelegram, BsGithub } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import './Footer.css';

export default function Footer() {
  return (
    <footer className="center">
      <div className="social">
        <a className="icon" target="_blank" rel="noreferrer" href="mailto:lf@gifuzzz.me">
          <IoMail />
        </a>
        <a className="icon" target="_blank" rel="noreferrer" href="https://github.com/gifuzzz">
          <BsGithub />
        </a>
        <a className="icon" target="_blank" rel="noreferrer" href="https://t.me/gifuzzz">
          <BsTelegram />
        </a>
        <a className="icon" target="_blank" rel="noreferrer" href="https://instagram.com/gifuzzz">
          <RiInstagramFill />
        </a>
        <a className="icon" target="_blank" rel="noreferrer" href="https://discord.com/users/396639437687226371">
          <FaDiscord />
        </a>
      </div>
      <p className="copyright"><small>Copyright © {new Date().getFullYear()} Luigi Fanuzzi. Source code on <a href="https://github.com/gifuzzz/gifuzzz.me" target="_blank" rel="noreferrer">github</a>.</small></p>
    </footer>
  );
}
