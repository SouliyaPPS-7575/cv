import { createFileRoute } from '@tanstack/react-router';
import { AcademicCapIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export const Route = createFileRoute('/education')({
  component: EducationPage,
});

export function EducationPage() {
  const educationHistory = [
    {
      degree: 'Bachelor Degree of Engineering in Computer Engineering',
      institution: '',
      period: '2019-2021',
    },
    {
      degree: 'Diploma of Computer Science',
      institution: 'Soutsaka College of Management and Technology',
      period: '2015-2018',
    },
    {
      degree: 'High School Diploma',
      institution: 'Vientiane High School',
      period: '2008-2015',
    },
    {
      degree: 'Primary Education',
      institution:
        'Nahaidiw Primary School, Sokpaluang Primary School, Sunshine International School',
      period: '2002-2008',
    },
  ];

  const timelineRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: (isEven: boolean) => ({
      opacity: 0,
      x: isEven ? -50 : 50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -5,
      boxShadow:
        '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <section className='py-20 pt-32 bg-muted/30 overflow-hidden'>
      {/* Animated background elements */}
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

      <div className='container mx-auto px-4'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-3xl font-bold mb-2'>Education</h2>
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
            My academic journey and educational background
          </motion.p>
        </motion.div>

        <div className='relative max-w-4xl mx-auto'>
          <motion.div
            className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block'
            ref={timelineRef}
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
            }}
          ></motion.div>

          <motion.div
            className='space-y-12'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            {educationHistory.map((edu, index) => (
              <div key={index} className='relative'>
                <motion.div
                  className={`md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:w-5 md:h-5 md:rounded-full md:bg-primary md:border-4 md:border-background md:z-10 hidden md:block`}
                  variants={dotVariants}
                  custom={index}
                  whileHover={{ scale: 1.2 }}
                ></motion.div>

                <motion.div
                  variants={cardVariants}
                  custom={index % 2 === 0}
                  whileHover='hover'
                  className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} relative z-20`}
                >
                  <Card>
                    <CardHeader className='flex flex-row items-start gap-4'>
                      <motion.div
                        variants={iconVariants}
                        className='text-primary'
                      >
                        <AcademicCapIcon className='h-6 w-6 mt-1' />
                      </motion.div>
                      <div>
                        <CardTitle className='text-xl'>{edu.degree}</CardTitle>
                        {edu.institution && (
                          <p className='text-muted-foreground'>
                            {edu.institution}
                          </p>
                        )}
                        <motion.div
                          className='flex items-center mt-2 text-sm text-muted-foreground'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <CalendarIcon className='h-4 w-4 mr-2' />
                          {edu.period}
                        </motion.div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
