import React from "react"
import IC from "./imageCarousel.module.scss"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { wrap } from "@popmotion/popcorn"

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 0,
    x: 0,
    opacity: 1,
  },
  exit: direction => {
    return {
      zIndex: -1,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const ImageCarousel = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  const imageIndex = wrap(0, images.length, page)

  return (
    <div className={IC.cont}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          className={IC.img}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 800, damping: 300 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        />
      </AnimatePresence>
    </div>
  )
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export default ImageCarousel
