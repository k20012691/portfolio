import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export function ImgSlideHorizontal({ children, damping, translateX }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
          controls.start('visible')
      }
    }, [isInView]);
  
    return (
      <motion.div
          ref={ref}
          variants={{
              hidden: { opacity: 0, translateX: translateX },
              visible: { opacity: 1, translateX: 0 }
          }}
          transition={{
              type: 'spring',
              duration: 0.2,
              damping: damping,
              delay: 0.2
          }}
          initial='hidden'
          animate={ controls }
      >
          {children}
      </motion.div>
    )
  }

function ImgSlide({ children, damping }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
        controls.start('visible')
    }
  }, [isInView]);

  return (
    <motion.div
        ref={ref}
        variants={{
            hidden: { opacity: 0, translateY: 50 },
            visible: { opacity: 1, translateY: 0 }
        }}
        transition={{
            type: 'spring',
            duration: 0.3,
            damping: damping,
            delay: 0.2
        }}
        initial='hidden'
        animate={ controls }
    >
        {children}
    </motion.div>
  )
}

export default ImgSlide