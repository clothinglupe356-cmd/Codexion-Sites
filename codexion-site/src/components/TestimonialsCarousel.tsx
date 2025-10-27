import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export type Testimonial = {
  name: string
  location?: string
  text: string
}

type Props = {
  items: Testimonial[]
  intervalMs?: number
}

export function TestimonialsCarousel({ items, intervalMs = 4000 }: Props) {
  const safeItems = useMemo(() => (items.length === 0 ? [{ name: 'Cliente', text: 'Excelente serviço!' }] : items), [items])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeItems.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [safeItems.length, intervalMs])

  return (
    <div className="relative card-glass p-6 overflow-hidden">
      <div className="h-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <p className="text-neutral-200">{safeItems[index].text}</p>
            <p className="mt-3 text-sm text-neutral-400">{safeItems[index].name}{safeItems[index].location ? ` · ${safeItems[index].location}` : ''}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center gap-2">
        {safeItems.map((_, i) => (
          <button
            aria-label={`Ir para depoimento ${i + 1}`}
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-emerald-400' : 'w-2 bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  )
}

