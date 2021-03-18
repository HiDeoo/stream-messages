import './style'

import { MotionConfig, AnimationFeature } from 'framer-motion'

import Messages from './Messages'

export default function App() {
  return (
    <MotionConfig features={[AnimationFeature]}>
      <Messages />
    </MotionConfig>
  )
}
