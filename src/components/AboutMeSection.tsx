import { useEffect } from "react";
import type { RefObject } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AboutMeSectionProps {
  elRef: RefObject<HTMLDivElement | null>;
}

export const AboutMeSection = ({ elRef }: AboutMeSectionProps) => {
  const isInView = useInView(elRef, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={elRef} className="about-me">
      <div className="about-me-container">
        <motion.div
          className="about-me-info-container"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animationControls}
          transition={{ duration: 1 }}
        >
          <div className="about-me-text">
            <h2> About Me</h2>
            <p>
              I'm a software engineer that is constantly exploring the ever-evolving world of programming and software development. My
              journey through the fascinating realm of computer science has allowed me to experiment with a wide range of technologies,
              tackle diverse projects, and continuously expand my knowledge.
            </p>
          </div>

          <div className="about-me-stack">
            <h2>Tech Stack</h2>
            <h4>Frontend</h4>
            <div className="tech-stack">
              <span className="tech-chip">
                <i className="devicon-react-original colored" /> React
              </span>
              <span className="tech-chip">
                <i className="devicon-javascript-plain colored" /> JavaScript
              </span>
              <span className="tech-chip">
                <i className="devicon-typescript-plain colored" /> TypeScript
              </span>
              <span className="tech-chip">
                <i className="devicon-html5-plain colored" /> HTML5
              </span>
              <span className="tech-chip">
                <i className="devicon-css3-plain colored" /> CSS3
              </span>
            </div>
            <h4>Backend</h4>
            <div className="tech-stack">
              <span className="tech-chip">
                <i className="devicon-csharp-plain colored" /> C#
              </span>
              <span className="tech-chip">
                <i className="devicon-dotnetcore-plain colored" /> .NET
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
