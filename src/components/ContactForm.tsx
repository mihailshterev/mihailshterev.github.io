import { motion, useAnimation } from "framer-motion";

type AnimationControls = ReturnType<typeof useAnimation>;

interface ContactFormProps {
  animationControls: AnimationControls;
}

export const ContactForm = ({ animationControls }: ContactFormProps) => {
  return (
    <motion.div
      className="contact-form"
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animationControls}
      transition={{ duration: 1 }}
    >
      <h2>Let's Connect</h2>
      <p>Check out my links below!</p>
    </motion.div>
  );
};
