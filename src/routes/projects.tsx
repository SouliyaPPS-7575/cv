import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';
import { createFileRoute, Link } from '@tanstack/react-router';

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
      liveLink: 'https://buddhaword.netlify.app',
      githubLink: 'https://gitlab.com/souliya_pps/buddhaword',
    },
    {
      title: 'JDB Merchant',
      description:
        'A merchant management system for JDB with comprehensive features for tracking and managing merchant accounts. Built with React Typescript and Ant Design UI.',
      image: 'https://i.ibb.co/ZpK1p6nX/merchant2.png',
      technologies: [
        'React.js',
        'React Redux',
        'Antd UI',
        'TypeScript',
        'Ant Design UI',
      ],
      liveLink: 'https://jdb-merchant.jdbbank.com.la',
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
      liveLink: 'https://mobilebo.jdbbank.com.la/',
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
      liveLink: 'https://fx.jdbbank.com.la/',
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
      liveLink: 'https://sms-gateway-bfes7.ondigitalocean.app/login',
      githubLink: 'https://gitlab.com/souliya_pps/sms-gateway',
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
      liveLink: 'https://enroll.cinuollaos.com/',
      githubLink: '#',
    },
    {
      title: 'MK Restaurant Member Card System',
      description:
        'A website for Management of Restaurant Member Card System. Built with React Redux and Material UI.',
      image: 'https://i.ibb.co/QzgZZbq/mk2.png',
      technologies: [
        'React.js',
        'React Redux',
        'MUI',
        'Communication API',
        'Analytics',
      ],
      liveLink: 'https://member.mkrestaurant.la/',
      githubLink: '#',
    },
    {
      title: 'Miyazaki Restaurant Member Card System',
      description:
        'A website for Management of Restaurant Member Card System. Built with React Redux and Material UI.',
      image: 'https://i.ibb.co/Q77Xf5B6/mk3.png',
      technologies: [
        'React.js',
        'React Redux',
        'Antd UI',
        'Communication API',
        'Analytics',
      ],
      liveLink: 'https://member.mkrestaurant.la/',
      githubLink: '#',
    },
    {
      title: 'SMG E-Document Management System',
      description:
        'A website E-Document Management System. Built with React Redux and Ant Design UI.',
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
        'A website Loan Management System. Built with React Redux and Ant Design UI.',
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
        'A website for Management of Royalty Platform Points accumulation & Gift Redeem. Built with Tantack Start, Material UI, HeroUI and Tailwind CSS.',
      image: 'https://i.ibb.co/23hjTCFX/Screenshot-2025-03-15-at-12-50-57.png',
      technologies: [
        'React.js',
        'Tanstack Start',
        'MUI',
        'HeroUI',
        'Tailwind CSS',
      ],
      liveLink: 'http://2earn-customer.netlify.app/',
      githubLink: 'https://github.com/SouliyaPPS-7575/2earn',
    },
  ];

  return (
    <section className='py-20 pt-32 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-2'>My Projects</h2>
          <div className='w-20 h-1 bg-primary mx-auto mb-6'></div>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Here are some of my recent projects. Each project is a unique piece
            of development
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <Card key={index} className='overflow-hidden group'>
              <div className='relative overflow-hidden h-48'>
                <img
                  src={project.image || '/myphoto.jpg'}
                  alt={project.title}
                  className='w-full h-full aspect-[4/3] object-contain transition-transform duration-500 group-hover:scale-110'
                  loading='lazy'
                  onError={(e) => (e.currentTarget.src = '/placeholder.svg')}
                />
              </div>
              <CardContent className='p-6'>
                <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                <p className='text-muted-foreground mb-4'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant='outline'>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className='flex gap-4'>
                  {project.githubLink !== '#' && (
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
                  )}
                  {project.liveLink !== '#' && (
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
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
