import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className='absolute inset-0 -z-10 overflow-hidden'>
      <motion.div
        className='absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl'
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className='absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl'
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
        }}
      />
    </div>
  );
}
