import { Link } from 'react-router-dom'
import { Phone, ChatTeardropText } from '@phosphor-icons/react'
import { motion } from 'motion/react'

const PHONE_HREF = 'tel:5592137176'

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-2.5 lg:hidden">
      {/* Quote button */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          to="/contact"
          className="flex items-center gap-2 px-4 py-3 bg-grass text-white text-sm font-semibold rounded-full shadow-lg shadow-grass/30 hover:bg-grass-light active:scale-[0.97] transition-all duration-200"
          aria-label="Get a free quote"
        >
          <ChatTeardropText size={18} weight="bold" />
          Free Quote
        </Link>
      </motion.div>

      {/* Call button */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <a
          href={PHONE_HREF}
          className="flex items-center gap-2 px-4 py-3 bg-forest text-white text-sm font-semibold rounded-full shadow-lg shadow-forest/30 hover:bg-forest-light active:scale-[0.97] transition-all duration-200"
          aria-label="Call Sally's Lawn Care"
        >
          <Phone size={18} weight="bold" />
          Call Now
        </a>
      </motion.div>
    </div>
  )
}
