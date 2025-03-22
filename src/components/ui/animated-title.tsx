import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedTitleProps {
  title: string;
  subtitle?: string | ReactNode;
}

export function AnimatedTitle({ title, subtitle }: AnimatedTitleProps) {
  return (
    <motion.div
      className='text-center mb-16'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className='text-3xl font-bold mb-2'>{title}</h2>
      <motion.div
        className='w-20 h-1 bg-primary mx-auto mb-6'
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      {subtitle && (
        <motion.div
          className='text-muted-foreground max-w-2xl mx-auto'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {subtitle}
        </motion.div>
      )}
    </motion.div>
  );
}
