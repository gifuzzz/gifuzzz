import React, { useState, useRef, useEffect } from "react";
import RevealAnimation from '../../utils/RevealAnimation';

export default function Whoami() {
  const [txt, setTxt] = useState('$ㅤ')
  const fulltxt = '$ㅤwhoami'; // invisible character, not space
  const i = useRef(0);
  const forward = useRef(true);
  
  // define all the function in useEffect to remove the warning
  useEffect(() => {
    function typeWriter() {
      if (i.current < fulltxt.length && forward.current) {
        i.current++;
        setTxt(fulltxt.substring(0, i.current));
        setTimeout(typeWriter, 150);
      } else if (i.current === fulltxt.length && forward.current) {
        forward.current = false;
        setTimeout(typeWriter, 2000);
      } else if (i.current === 2 && !forward.current) {
        forward.current = true;
        setTimeout(typeWriter, 1000);
      } else {
        i.current--;
        setTxt(fulltxt.substring(0, i.current));
        setTimeout(typeWriter, 50);
      }
    }
    typeWriter()
  }, [])

  return (
    <RevealAnimation animationClass="reveal-text">
      <h2 className="whoami terminal typing">{txt}</h2>
    </RevealAnimation>
  )
}