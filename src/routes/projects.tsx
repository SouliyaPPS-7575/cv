import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
});

export function ProjectsPage() {
  const projects = [
    {
      title: 'Lao Buddhaword',
      description:
        "A Progressive Web Application and Mobile Application for the dissemination of Dharma. Created to share Buddha's teachings.",
      image: '/placeholder.svg?height=400&width=600',
      technologies: ['React', 'Firebase', 'Mobile App', 'PWA'],
      liveLink: 'https://download-buddha.web.app',
      githubLink: '#',
    },
    {
      title: 'JDB Merchant',
      description:
        'A merchant management system for JDB with comprehensive features for tracking and managing merchant accounts.',
      image: '/placeholder.svg?height=400&width=600',
      technologies: ['React.js', 'TypeScript', 'Ant Design UI'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'JDB E-Sign Document',
      description:
        'Electronic document signing platform with secure authentication and document management features.',
      image: '/placeholder.svg?height=400&width=600',
      technologies: ['React.js', 'TypeScript', 'Document Management'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'JDB Mobile Banking Back Office',
      description:
        'Administrative interface for managing mobile banking operations, user accounts, and transactions.',
      image: '/placeholder.svg?height=400&width=600',
      technologies: ['React.js', 'TypeScript', 'Banking Systems'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Miner Monitoring',
      description:
        'System for monitoring cryptocurrency mining operations with real-time statistics and alerts.',
      image: '/placeholder.svg?height=400&width=600',
      technologies: ['React.js', 'Data Visualization', 'Real-time Monitoring'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'SMS Gateway',
      description:
        'Communication platform for sending and managing SMS messages with tracking and analytics.',
      image: '/placeholder.svg?height=400&width=600',
      technologies: ['React.js', 'Communication API', 'Analytics'],
      liveLink: '#',
      githubLink: '#',
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
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
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
                  <Button
                    variant='outline'
                    size='sm'
                    className='flex items-center gap-2'
                  >
                    <CodeBracketIcon className='h-4 w-4' />
                    Code
                  </Button>
                  <Button size='sm' className='flex items-center gap-2'>
                    <ArrowTopRightOnSquareIcon className='h-4 w-4' />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Button size='lg'>View All Projects</Button>
        </div>
      </div>
    </section>
  );
}

