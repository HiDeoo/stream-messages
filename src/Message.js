import { m as motion } from 'framer-motion'

import { MESSAGE_DURATION } from './constants'

/**
 * Enter & exit animations duration in seconds.
 */
const ANIMATION_DURATION = 1

const variants = {
  enter: {
    x: '-100%',
    y: 0,
  },
  animate: {
    x: 0,
    y: '400%',
    transition: {
      duration: ANIMATION_DURATION,
      type: 'spring',
      y: {
        delay: MESSAGE_DURATION,
        duration: ANIMATION_DURATION,
        type: 'spring',
      },
    },
  },
}

export default function Message({ index, message, title }) {
  return (
    <motion.div className="messageWrapper" key={index} variants={variants} initial="enter" animate="animate">
      <div className="message">
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </motion.div>
  )
}
