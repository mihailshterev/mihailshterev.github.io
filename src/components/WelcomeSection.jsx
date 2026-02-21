import { motion } from 'framer-motion'

export const WelcomeSection = ({elRef}) => {
  return (
    <div ref={elRef} className='welcome-section'>
        <div className="welcome-section-container">
          <div className='welcome-section-heading'>
            <h1>Hello there,<br></br> I'm Mihail Shterev</h1>
            <h2>A passionate web developer</h2>
          </div>

          <motion.div className='galaxy-container'
          variants={{
            hidden: {opacity: 0, scale: 0.95},
            visible: {opacity: 1, scale: 1}
          }}
          initial="hidden"
          animate="visible"
          transition={{duration: 1}}>
            <div className="orbit">
                <div className="star"></div>
            </div>
            <div className="orbit-2"></div>
            <div className="orbit-3"></div>
            <div className="orbit-4"></div>
          </motion.div>
        </div>
        
        <motion.div className="welcome-section-lines-container"
        variants={{
          hidden: {opacity: 0},
          visible: {opacity: 1}
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 1}}>
          <div className="welcome-section-curved-line"/>
          <div className="welcome-section-horizonal-line"/>
          <div className="curve-container">
            <div className="point2"></div>
            <div className="welcome-section-curved-line-left-up"/>
          </div>
        </motion.div>
    </div>
  )
}
