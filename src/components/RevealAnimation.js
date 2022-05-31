import React from "react"
import { useInView } from "react-intersection-observer"

export default function RevealAnimation({ children, animationClass, triggerOnce=true }) {
    const [ref, inView] = useInView({
        triggerOnce: triggerOnce,
    })
    return (
        <div ref={ref} className={`${inView ? animationClass : ""}`}>
            {children}
        </div>
    )
}