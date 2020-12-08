import React from "react"
import single from "./newsAndEvents.module.scss"
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

const NewsAndEvents = ({ newsAndEventsQ }) => {
  const [[page, direction], setPage] = useState([0, 0])
  const images = newsAndEventsQ.NAEImages

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  const imageIndex = wrap(0, images.length, page)
  React.useEffect(() => {
    const interval = setInterval(() => {
      paginate(1)
    }, 6000)
    return () => clearInterval(interval)
  }, [page])

  console.log(page)

  return (
    <div className={single.cont}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          className={single.img}
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
      <div className={single.textCont}>
        <h3>{newsAndEventsQ.NAEText}</h3>
        <a href="/get-involved">
          <button>Find Out How</button>
        </a>
      </div>
    </div>
  )
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export default NewsAndEvents
