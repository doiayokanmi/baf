import React from 'react'
import { motion } from 'framer-motion'

const Video = ({videoSrc}: {videoSrc: string}) => {
  return (
    <div className='overflow-hidden'>
        <motion.video initial={{ scale: 1.03 }} whileHover={{ scale: 1 }} width="640" height="360" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
    </div>
  )
}

export default Video