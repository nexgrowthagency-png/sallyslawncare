import { motion, useReducedMotion } from 'motion/react'

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  amount = 0.15,
}) {
  const reduce = useReducedMotion()

  const getInitial = () => {
    if (reduce) return { opacity: 0 }
    const base = { opacity: 0 }
    if (direction === 'up') return { ...base, y: 28 }
    if (direction === 'down') return { ...base, y: -28 }
    if (direction === 'left') return { ...base, x: 28 }
    if (direction === 'right') return { ...base, x: -28 }
    return base
  }

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
