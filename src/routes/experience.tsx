import { createFileRoute } from '@tanstack/react-router';
import { BriefcaseIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { AnimatedBackground } from '~/components/ui/animated-background';
import { AnimatedTitle } from '~/components/ui/animated-title';

export const Route = createFileRoute('/experience')({
  component: ExperiencePage,
});

export function ExperiencePage() {
  const experiences = [
    {
      title: 'Web Front End Developer',
      company: 'Lao IT Dev Co., Ltd.',
      period: '',
      description:
        'Developed multiple web front-end projects including JDB Merchant, JDB E-Sign Document, JDB Mobile Banking Back Office, JDB FX Back Office, SMS Gateway, MK & Miyazaki Back Office, Miner Monitoring, and various management systems.',
      skills: ['React.js', 'TypeScript', 'Ant Design UI', 'Material UI'],
    },
    {
      title: 'Dharma Content Creator',
      company: '',
      period: '',
      description:
        "Built Progressive Web Application and Mobile Application for the dissemination of Dharma. Created and developed 'Lao Buddhaword' website and application. Designed Dhamma books, book covers, and collected sutras into book categories.",
      skills: [
        'Web Development',
        'Mobile App Development',
        'Content Creation',
        'Design',
      ],
    },
    {
      title: 'Network Infrastructure',
      company: '',
      period: '',
      description:
        'Installation of WIFI controller at Urbanite Apartment. Design and installation of Computer Network Infrastructure at CX.Ltd.',
      skills: ['Network Infrastructure', 'WIFI Installation', 'Network Design'],
    },
    {
      title: 'Internship',
      company: 'Ministry of Science and Technology',
      period: 'July 17 - September 15, 2017',
      description:
        'Undertook 3 months work experience internship in the Ministry of Science and Technology.',
      skills: ['Government Sector', 'Technology', 'Science'],
    },
    {
      title: 'Website Creation',
      company: '',
      period: '',
      description:
        "Participated in website creation of the project 'Re-Craft Laos'.",
      skills: ['Web Development', 'Project Collaboration'],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
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
  };

  const badgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className='py-20 pt-32 relative overflow-hidden'>
      <AnimatedBackground />

      <div className='container mx-auto px-4'>
        <AnimatedTitle
          title='Work Experience'
          subtitle='My professional journey and work experience'
        />

        <motion.div
          className='space-y-8 max-w-4xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover='hover'
              custom={index}
            >
              <Card>
                <CardHeader>
                  <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2'>
                    <div className='flex items-start gap-3'>
                      <motion.div
                        variants={iconVariants}
                        className='text-primary'
                      >
                        <BriefcaseIcon className='h-6 w-6 mt-1' />
                      </motion.div>
                      <div>
                        <CardTitle className='text-xl'>{exp.title}</CardTitle>
                        {exp.company && (
                          <motion.p
                            className='text-primary font-medium'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            {exp.company}
                          </motion.p>
                        )}
                      </div>
                    </div>
                    {exp.period && (
                      <motion.div
                        className='flex items-center text-sm text-muted-foreground'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <CalendarIcon className='h-4 w-4 mr-2' />
                        {exp.period}
                      </motion.div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <motion.p
                    className='mb-4'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {exp.description}
                  </motion.p>
                  <motion.div
                    className='flex flex-wrap gap-2'
                    variants={badgeContainerVariants}
                    initial='hidden'
                    animate='visible'
                  >
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        variants={badgeVariants}
                        whileHover='hover'
                        custom={skillIndex}
                      >
                        <Badge variant='secondary'>{skill}</Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
