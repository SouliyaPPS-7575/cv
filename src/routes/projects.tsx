import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';
import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedBackground } from '~/components/ui/animated-background';
import { AnimatedTitle } from '~/components/ui/animated-title';

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
});

export function ProjectsPage() {
  const projects = [
    {
      title: 'Lao Buddhaword',
      description:
        "A Progressive Web Application and Mobile Application for the dissemination of Dharma. Created to share Buddha's teachings. Built with Flutter, AppSheet and React Tanstack",
      image: 'https://i.ibb.co/wZqTfj8S/app-001.png',
      technologies: [
        'React',
        'Tanstack',
        'Flutter',
        'AppSheet',
        'HeroUI',
        'Firebase',
        'Mobile App',
        'PWA',
      ],
      liveLink: 'https://buddha-nature.firebaseapp.com/',
      githubLink: 'https://github.com/SouliyaPPS-7575/buddha-nature-web',
    },
    {
      title: 'JDB Merchant',
      description:
        'JDB with comprehensive features for tracking and managing merchant accounts. Built with React Typescript and Ant Design UI.',
      image: 'https://i.ibb.co/ZpK1p6nX/merchant2.png',
      technologies: [
        'React.js',
        'React Redux',
        'Antd UI',
        'TypeScript',
        'Ant Design UI',
      ],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'JDB E-Sign Document',
      description:
        'Electronic document signing platform with secure authentication and document management features. Built with React Typescript and Material UI.',
      image: 'https://i.ibb.co/p6yfxtTn/esign.png',
      technologies: [
        'React.js',
        'Tanstack',
        'MUI',
        'TypeScript',
        'Document Management',
      ],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'JDB Mobile Banking Back Office',
      description:
        'Administrative interface for managing mobile banking operations, user accounts, and transactions. Built with Next.js Typescript and Material UI.',
      image: 'https://i.ibb.co/XRfVNyx/jdb-app-bo.png',
      technologies: [
        'Next.js',
        'TRPC',
        'Tanstack',
        'MUI',
        'TypeScript',
        'Banking Systems',
      ],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'JDB FX Back Office',
      description:
        'Administrative interface for managing mobile banking operations, user accounts, and transactions. Built with React Typescript and Material UI.',
      image: 'https://i.ibb.co/Qvm3Yb6D/jdbfx.png',
      technologies: [
        'React.js',
        'React Redux',
        'MUI',
        'TypeScript',
        'Banking Systems',
      ],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Miner Monitoring',
      description:
        'System for monitoring cryptocurrency mining operations with real-time statistics and alerts. Built with React Typescript and Material UI.',
      image: 'https://i.ibb.co/xScpTYG0/Mining3.png',
      technologies: [
        'React.js',
        'React Redux',
        'MUI',
        'Data Visualization',
        'Real-time Monitoring',
      ],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'SMS Gateway',
      description:
        'Communication platform for sending and managing SMS messages with tracking and analytics. Built with Next.js Typescript and Material UI.',
      image: 'https://i.ibb.co/mFcjcDxb/SMS-Gateway2.png',
      technologies: [
        'Next.js',
        'Tanstack',
        'MUI',
        'Communication API',
        'Analytics',
      ],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'CIN ສະຖາບັນຂົງຈື ມະຫາວິທະຍາໄລເເຫ່ງຊາດ',
      description:
        'A website for Student Registration System & Student and Teacher Information System. Built with React Redux and Ant Design UI.',
      image: 'https://i.ibb.co/VpCct78B/kongjue1.png',
      technologies: [
        'React.js',
        'React Redux',
        'Antd UI',
        'Communication API',
        'Analytics',
      ],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'MK Restaurant Member Card System',
      description:
        'Management of Restaurant Member Card System. Built with React Redux and Material UI.',
      image: 'https://i.ibb.co/QzgZZbq/mk2.png',
      technologies: [
        'React.js',
        'React Redux',
        'MUI',
        'Communication API',
        'Analytics',
      ],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Miyazaki Restaurant Member Card System',
      description:
        'Management of Restaurant Member Card System. Built with React Redux and Material UI.',
      image: 'https://i.ibb.co/Q77Xf5B6/mk3.png',
      technologies: [
        'React.js',
        'React Redux',
        'Antd UI',
        'Communication API',
        'Analytics',
      ],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'SMG E-Document Management System',
      description:
        'E-Document Management System. Built with React Redux and Ant Design UI.',
      image: 'https://i.ibb.co/Jjq642X8/smg2.png',
      technologies: [
        'React.js',
        'React Redux',
        'Antd UI',
        'Communication API',
        'Analytics',
      ],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'SML Loan Management System',
      description:
        'Website Loan Management System. Built with React Redux and Ant Design UI.',
      image: 'https://i.ibb.co/svXccjvh/sml2.png',
      technologies: [
        'React.js',
        'React Redux',
        'Antd UI',
        'Communication API',
        'Analytics',
      ],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Template Web Back Office of LaoITDev, Ant Design UI',
      description:
        'A website Back Office of LaoITDev. Built with React, Tanstack and Ant Design UI.',
      image: 'https://i.ibb.co/vvRVSsw0/template-antd.png',
      technologies: ['React.js', 'Tanstack', 'Antd UI'],
      liveLink: 'https://template-antd-b03322.gitlab.io/',
      githubLink:
        'https://gitlab.com/souliya_pps/template-antd/-/tree/fix?ref_type=heads',
    },
    {
      title: 'Re-Craft Laos',
      description:
        'Participate in website creation of the project "Re-Craft Laos" Recycle, and Circular Economy Through the products made from fabric scrap. Built with Next.js, Sanity.io and Tailwind CSS.',
      image: 'https://i.ibb.co/d4bnrB4m/Screenshot-2025-03-15-at-12-27-05.png',
      technologies: ['Next.js', 'Sanity.io', 'Tailwind CSS'],
      liveLink: 'https://re-craft.vercel.app/Home',
      githubLink: '#',
    },
    {
      title: '2Earn Royalty Platform',
      description:
        'Royalty Platform Points accumulation & Gift Redeem. Built with Tantack Start, Material UI, HeroUI and Tailwind CSS.',
      image: 'https://i.ibb.co/23hjTCFX/Screenshot-2025-03-15-at-12-50-57.png',
      technologies: [
        'React.js',
        'Tanstack Start',
        'MUI',
        'HeroUI',
        'Tailwind CSS',
      ],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'E-Commerce Web App',
      description:
        'E-Commerce Shops Order Products and Add Cart. Built with Tantack Start, Material UI and Pocketbase.',
      image: 'https://i.ibb.co/GfZ15sX7/Screenshot-2025-06-28-at-10-43-37.png',
      technologies: ['React Typescript', 'Tanstack Start', 'MUI', 'Pocketbase'],
      liveLink: 'http://soysouvanhsbrown.com/',
      githubLink: 'https://github.com/SouliyaPPS-7575/e-commerce-customer',
    },
    {
      title: 'Admin Web E-Commerce',
      description:
        'Admin E-Commerce Shops Order Products and Add Cart. Built with React Admin UI, Material UI and Pocketbase.',
      image: 'https://i.ibb.co/93qCSh9x/Screenshot-2025-06-28-at-12-07-24.png',
      technologies: ['React Typescript', 'React Admin UI', 'MUI', 'Pocketbase'],
      liveLink: 'http://soysb.com/',
      githubLink: 'https://github.com/SouliyaPPS-7575/bo-e-commerce',
    },
    {
      title: 'Laundry Back Office Web App',
      description:
        'Laundry Back Office Web App. Built with React Typescript, Ant Design UI, Tanstack Router, Tanstack Query',
      image: 'https://i.ibb.co/S43DFV5D/Screenshot-2025-06-28-at-12-16-29.png',
      technologies: [
        'React Typescript',
        'Ant Design UI',
        'Tanstack Router',
        'Tanstack Query',
      ],
      liveLink: 'https://laundry-bo-7bf8fc.gitlab.io/',
      githubLink: 'https://gitlab.com/souliyapps-dev/laundry-bo',
    },
    {
      title: '8Hex Trading Platform',
      description:
        'Revolutionize trading by providing an intelligent, automated platform that empowers traders to navigate the complexities of financial markets with confidence and efficiency',
      image: 'https://i.ibb.co/gZLk9qNz/Screenshot-2025-06-28-at-12-23-45.png',
      technologies: ['Next.js', 'Ant Design UI', 'Supabase'],
      liveLink: 'https://web.8hex.pro/',
      githubLink: '#',
    },
    {
      title: 'Laundry Miss Clean and Spa Web App',
      description:
        'Laundry Miss Clean and Spa Web App. Built with React Typescript, Ant Design UI, Tanstack Router, Tanstack Query',
      image: 'https://i.ibb.co/5Wqk2V84/Screenshot-2025-08-09-at-19-10-08.jpg',
      technologies: ['React Typescript', 'Tanstack Start', 'MUI', 'Pocketbase'],
      liveLink: 'https://laundry-miss-clean.com/',
      githubLink: 'https://github.com/SouliyaPPS-7575/front-miss-clean-spa',
    },
    {
      title: 'Admin Web Laundry Miss Clean and Spa',
      description:
        'Laundry Miss Clean and Spa Admin Web. Built with React Typescript, Ant Design UI, Tanstack Router, Tanstack Query',
      image: 'https://i.ibb.co/yFCJyB7h/Screenshot-2025-08-09-at-20-15-56.jpg',
      technologies: ['React Typescript', 'React Admin UI', 'MUI', 'Pocketbase'],
      liveLink: 'https://miss-clean-spa.firebaseapp.com/',
      githubLink: 'https://github.com/SouliyaPPS-7575/bo-miss-clean-spa',
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

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
      y: -10,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
        delay: 0.3 + i * 0.05,
      },
    }),
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
        delay: 0.5,
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

  return (
    <section className='py-20 pt-32 bg-muted/30 relative overflow-hidden'>
      <AnimatedBackground />

      <div className='container mx-auto px-4'>
        <AnimatedTitle
          title='My Projects'
          subtitle='Here are some of my recent projects. Each project is a unique piece of development'
        />

        <motion.div
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          ref={containerRef}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover='hover'
              custom={index}
              viewport={{ once: true, margin: '-50px' }}
            >
              <Card className='overflow-hidden h-full flex flex-col'>
                <div className='relative overflow-hidden h-48'>
                  <motion.img
                    src={project.image || '/myphoto.jpg'}
                    alt={project.title}
                    className='w-full h-full aspect-[4/3] object-contain'
                    loading='lazy'
                    onError={(e) => (e.currentTarget.src = '/placeholder.svg')}
                    variants={imageVariants}
                  />
                </div>
                <CardContent className='p-6 flex flex-col flex-grow'>
                  <motion.h3
                    className='text-xl font-bold mb-2'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className='text-muted-foreground mb-4'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    className='flex flex-wrap gap-2 mb-4'
                    initial='hidden'
                    animate='visible'
                    variants={containerVariants}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        variants={badgeVariants}
                        custom={techIndex}
                        whileHover='hover'
                      >
                        <Badge variant='outline'>{tech}</Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div
                    className='flex gap-4 mt-auto'
                    initial='hidden'
                    animate='visible'
                    variants={containerVariants}
                  >
                    {project.githubLink !== '#' && (
                      <motion.div
                        variants={buttonVariants}
                        whileHover='hover'
                        whileTap='tap'
                      >
                        <Link
                          to={project.githubLink}
                          target='_blank'
                          className='flex items-center gap-2'
                        >
                          <Button
                            variant='outline'
                            size='sm'
                            className='flex items-center gap-2'
                          >
                            <CodeBracketIcon className='h-4 w-4' />
                            Code
                          </Button>
                        </Link>
                      </motion.div>
                    )}
                    {project.liveLink !== '#' && (
                      <motion.div
                        variants={buttonVariants}
                        whileHover='hover'
                        whileTap='tap'
                      >
                        <Link
                          to={project.liveLink}
                          target='_blank'
                          className='flex items-center gap-2'
                        >
                          <Button size='sm' className='flex items-center gap-2'>
                            <ArrowTopRightOnSquareIcon className='h-4 w-4' />
                            Live Demo
                          </Button>
                        </Link>
                      </motion.div>
                    )}
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
