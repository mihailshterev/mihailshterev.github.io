import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
import { ContactForm } from "./ContactForm";

export const ContactSection = ({ elRef }) => {
  const isInView = useInView(elRef, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={elRef} className="contact-section">
      <ContactForm animationControls={animationControls} />
      <motion.h3
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={animationControls}
        transition={{ duration: 1 }}
      >
        My Links:
        <div className="links-container">
          <a href="https://www.linkedin.com/in/mihail-shterev-92b149254/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/mihailshterev" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/mihailxshterev/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </motion.h3>
    </div>
  );
};
