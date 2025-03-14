import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router';
import {
  ArrowDownIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { useTypewriter } from '../hooks/use-typewriter';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/home')({
  component: HomePage,
});

export function HomePage() {
  const text = useTypewriter({
    words: ['Web Front-End Developer', 'React Developer', 'TypeScript Expert'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <div className='relative min-h-screen'>
      <div className='pt-20 flex flex-col justify-center items-center text-center px-4 min-h-screen'>
        <div className='max-w-3xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Hi, I'm <span className='text-primary'>Souliya Phoupaseuth</span>
          </h1>
          <h2 className='text-2xl md:text-3xl font-medium mb-6 h-10'>
            {text}
            <span className='animate-blink'>|</span>
          </h2>
          <p className='text-muted-foreground text-lg mb-8 max-w-2xl mx-auto'>
            A passionate Web Developer with expertise in React, TypeScript, and
            modern web technologies. Building exceptional digital experiences
            that combine functionality and aesthetics.
          </p>
          <div className='flex flex-wrap justify-center gap-4 mb-12'>
            <Button size='lg' className='rounded-full' asChild>
              <Link to='/projects'>View My Work</Link>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='rounded-full'
              asChild
            >
              <Link to='/contact'>Contact Me</Link>
            </Button>
          </div>
          <div className='flex justify-center space-x-6 mb-12'>
            <a
              href='https://github.com'
              className='rounded-full p-2 hover:bg-muted transition-colors'
              aria-label='GitHub'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
            </a>
            <a
              href='https://linkedin.com'
              className='rounded-full p-2 hover:bg-muted transition-colors'
              aria-label='LinkedIn'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
            </a>
            <a
              href='tel:+85620-78287509'
              className='rounded-full p-2 hover:bg-muted transition-colors'
              aria-label='Phone'
            >
              <PhoneIcon className='h-5 w-5' />
            </a>
            <a
              href='mailto:souliyapps@gmail.com'
              className='rounded-full p-2 hover:bg-muted transition-colors'
              aria-label='Email'
            >
              <EnvelopeIcon className='h-5 w-5' />
            </a>
          </div>
        </div>
      </div>
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <Link
          to='/about'
          className='rounded-full p-2 hover:bg-muted transition-colors'
          aria-label='Scroll Down'
        >
          <ArrowDownIcon className='h-6 w-6' />
        </Link>
      </div>
    </div>
  );
}

