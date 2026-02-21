import { useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import jsImg from '../assets/js.png'
import reactImg from '../assets/react.png'
import csharpImg from '../assets/csharp.png'
import dotnetImg from '../assets/dotnetIcon.png'
import tsImg from '../assets/ts.png'

export const AboutMeSection = ({elRef}) => {
  const isInView = useInView(elRef, {once: true});
  const animationControls = useAnimation();

  useEffect(() =>{
    if(isInView){
      animationControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={elRef} className='about-me'>
      <div className="about-me-container">
        <motion.div className='lines-container'
            variants={{
              hidden: {opacity: 0},
              visible: {opacity: 1}
            }}
            initial="hidden"
            animate={animationControls}
            transition={{duration: 1}}>
           <div className='straight-line-short'></div>
           <div className="point"/>
           <div className='straight-line-long'></div>
        </motion.div>
        
        <motion.div className="about-me-info-container"
        variants={{
          hidden: {opacity: 0, y: 75},
          visible: {opacity: 1, y: 0}
        }}
        initial="hidden"
        animate={animationControls}
        transition={{duration: 1}}>
          <div className='about-me-text'>
            <h2> About Me</h2>
            <p>
              Hi, my name's Mihail Shterev. I'm a Computer Science student at the Technical University of Sofia, Bulgaria.
              I have a passion for computers, how they work and how i can use them in interesting ways to do cool stuff.
              I'm eager to learn and to always improve my programming skills. I'm currently learning web development.
            </p>
          </div>
    
          <div className='about-me-stack'>
            <h2>Tech Stack</h2>
            <h4>Front End</h4>
            <div className='tech-stack'>
              <img src={reactImg} alt="" />
              <img src={jsImg} alt="" />
              <img src={tsImg} alt="" />
              <img src={htmlImg} alt="" />
              <img src={cssImg} alt="" />
            </div>
            <h4>Back End</h4>
            <div className='tech-stack'>
              <img src={csharpImg} alt="" />
              <img src={dotnetImg} alt="" />
            </div>
          </div>
        </motion.div>
        
      </div>
      
    </div>
  )
}
