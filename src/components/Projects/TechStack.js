import React from 'react';
import './TechStack.css';

const TechStack = ({ techs }) => {
    return (
        <div className="tech-stack">
            {techs.map((tech, index) => (
                <div key={index} className="tech-bubble">
                    {tech}
                </div>
            ))}
        </div>
    );
};

export default TechStack;