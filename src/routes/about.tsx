import { createFileRoute } from '@tanstack/react-router';
import {
  CalendarIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import myphoto from '@/assets/myphoto.jpg';
import { useDownloadCV } from '~/hooks/useDownloadCV';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: 0.2,
    },
  },
};

const borderVariants = {
  hidden: { opacity: 0, x: 20, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: 0.4,
    },
  },
};

const linkVariants = {
  hover: {
    scale: 1.02,
    x: 5,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
};

const buttonVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 0.8,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

// Counter animation component
function AnimatedCounter({
  target,
  duration = 2000,
}: {
  target: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <>{count}+</>;
}

export function AboutPage() {
  const downloadCV = useDownloadCV();

  return (
    <section className='py-20 pt-32 bg-muted/30 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-3xl font-bold mb-2'>About Me</h2>
          <motion.div
            className='w-20 h-1 bg-primary mx-auto mb-6'
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <motion.p
            className='text-muted-foreground max-w-2xl mx-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get to know more about me, my background, and what I do
          </motion.p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='relative'>
            <motion.div
              className='relative z-10 overflow-hidden rounded-lg shadow-lg'
              variants={imageVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              <img
                src={myphoto || '/placeholder.svg'}
                alt='Souliya Phoupaseuth'
                className='w-full h-auto object-cover'
              />
            </motion.div>
            <motion.div
              className='absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-lg z-0'
              variants={borderVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            ></motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <motion.h3
              className='text-2xl font-bold mb-4'
              variants={itemVariants}
            >
              Who am I?
            </motion.h3>
            <motion.p className='mb-4' variants={itemVariants}>
              I'm a <span className='font-medium'>Web Front-End Developer</span>{' '}
              with a passion for creating modern, responsive, and user-friendly
              web applications.
            </motion.p>
            <motion.p className='mb-6' variants={itemVariants}>
              With expertise in React.js, TypeScript, and various modern
              frameworks, I build digital solutions that combine functionality
              with aesthetics. I'm also interested in Buddhawajana, health,
              science, sports, and artificial intelligence.
            </motion.p>

            <motion.div className='space-y-4 mb-6' variants={containerVariants}>
              <motion.div
                className='flex items-center gap-3'
                variants={itemVariants}
              >
                <CalendarIcon className='h-5 w-5 text-primary' />
                <span>Born on September 16, 1997</span>
              </motion.div>

              <motion.div variants={itemVariants} whileHover='hover'>
                <motion.a
                  href='https://www.google.com/maps/search/?api=1&query=Pakhaow+Village,+Xaythany+District,+Vientiane+Capital,+Laos'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 hover:text-blue-500 transition-colors'
                  variants={linkVariants}
                >
                  <MapPinIcon className='h-5 w-5 text-primary' />
                  <span>
                    Pakhaow Village, Xaythany District, Vientiane Capital, Laos
                  </span>
                </motion.a>
              </motion.div>

              <motion.div
                className='flex items-center gap-3'
                variants={itemVariants}
              >
                <motion.a
                  href='https://wa.me/8562078287509'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 hover:text-green-500 transition-colors'
                  whileHover='hover'
                  variants={linkVariants}
                >
                  <PhoneIcon className='h-5 w-5 text-primary' />
                  <span>(+856) 20-78287509</span>
                </motion.a>
                <motion.a
                  href='https://wa.me/8562091182391'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-green-500 transition-colors'
                  whileHover='hover'
                  variants={linkVariants}
                >
                  <span>, 91182391</span>
                </motion.a>
              </motion.div>

              <motion.div
                className='flex items-center gap-3'
                variants={itemVariants}
              >
                <EnvelopeIcon className='h-5 w-5 text-primary' />
                <span>souliyapps@gmail.com</span>
              </motion.div>
            </motion.div>

            <motion.div
              className='grid grid-cols-2 gap-4 mb-8'
              variants={containerVariants}
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card>
                  <CardContent className='p-6 text-center'>
                    <h4 className='text-4xl font-bold text-primary mb-2'>
                      <AnimatedCounter target={5} />
                    </h4>
                    <p className='text-muted-foreground'>Years Experience</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card>
                  <CardContent className='p-6 text-center'>
                    <h4 className='text-4xl font-bold text-primary mb-2'>
                      <AnimatedCounter target={10} />
                    </h4>
                    <p className='text-muted-foreground'>Projects Completed</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover='hover'
              whileTap='tap'
            >
              <Button size='lg' onClick={downloadCV}>
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
