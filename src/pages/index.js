import React from "react";
import Navbar from "../components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import RevealAnimation from "../utils/RevealAnimation";
import Welcome from "../components/Welcome/Welcome";
import Info from "../components/Info/Info";
import Projects from "../components/Projects/Projects";
import Cybersecurity from "../components/Cybersecurity/Cybersecurity";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Index = () => {
  return (
    <>
      <Navbar actual="home" />

      <Welcome />
      
      <RevealAnimation animationClass='reveal-hr' triggerOnce={false} />
      
      <Info />

      <RevealAnimation animationClass='reveal-hr' triggerOnce={false} />
      
      <Projects />

      <RevealAnimation animationClass='reveal-hr' triggerOnce={false} />
      
      <Cybersecurity />

      <RevealAnimation animationClass='reveal-hr' triggerOnce={false} />
      
      <Contact />
      
      <Footer />
    </>
  );
};

export default Index;
