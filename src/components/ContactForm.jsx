import { motion } from 'framer-motion'

export const ContactForm = ({animationControls}) => {
  return (
    <motion.form action="https://formsubmit.co/74fe684c8f1aa031c582f96066ec3486" method="POST" className="contact-form"
        variants={{
          hidden: {opacity: 0},
          visible: {opacity: 1}
        }}
        initial="hidden"
        animate={animationControls}
        transition={{duration: 1}}>
        <h2>Contact Me</h2>
        <div className="input-container">
            <input type="text" name='name' className='contact-input' placeholder='Name' required/>
            <input type="email" name='email' className='contact-input' placeholder='Email' required/>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_subject" value="New portfolio submission!"></input>
        </div>
        <textarea type="text" name='message' className='contact-input-msg' placeholder='Message' required/>
        <button type='submit'>Send</button>
    </motion.form>
  )
}
