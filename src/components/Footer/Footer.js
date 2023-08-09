import React from "react";
import { IoMail } from 'react-icons/io5'
import { RiInstagramFill } from 'react-icons/ri'
import { BsTelegram, BsGithub } from 'react-icons/bs'
import './Footer.css';
import { GITHUB_REPO_URL, GITHUB_URL, INSTAGRAM_URL, MAIL_URL, TELEGRAM_URL } from "../../utils/consts";

export default function Footer() {
  return (
    <footer className="center">
      <div className="social">
        <a className="icon" target="_blank" rel="noreferrer" href={MAIL_URL}>
          <IoMail />
        </a>
        <a className="icon" target="_blank" rel="noreferrer" href={GITHUB_URL}>
          <BsGithub />
        </a>
        <a className="icon" target="_blank" rel="noreferrer" href={TELEGRAM_URL}>
          <BsTelegram />
        </a>
        <a className="icon" target="_blank" rel="noreferrer" href={INSTAGRAM_URL}>
          <RiInstagramFill />
        </a>
      </div>
      <p className="copyright"><small>Copyright © {new Date().getFullYear()} Luigi Fanuzzi. Source code on <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">github</a>.</small></p>
    </footer>
  );
}
