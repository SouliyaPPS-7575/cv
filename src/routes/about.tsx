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

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

export function AboutPage() {
  const downloadCV = useDownloadCV();

  return (
    <section className='py-20 pt-32 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-2'>About Me</h2>
          <div className='w-20 h-1 bg-primary mx-auto mb-6'></div>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Get to know more about me, my background, and what I do
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='relative'>
            <div className='relative z-10 overflow-hidden rounded-lg shadow-lg'>
              <img
                src={myphoto}
                alt='Souliya Phoupaseuth'
                className='w-full h-auto object-cover'
              />
            </div>
            <div className='absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-lg z-0'></div>
          </div>

          <div>
            <h3 className='text-2xl font-bold mb-4'>Who am I?</h3>
            <p className='mb-4'>
              I'm a <span className='font-medium'>Web Front-End Developer</span>{' '}
              with a passion for creating modern, responsive, and user-friendly
              web applications.
            </p>
            <p className='mb-6'>
              With expertise in React.js, TypeScript, and various modern
              frameworks, I build digital solutions that combine functionality
              with aesthetics. I'm also interested in Buddhawajana, health,
              science, sports, and artificial intelligence.
            </p>

            <div className='space-y-4 mb-6'>
              <div className='flex items-center gap-3'>
                <CalendarIcon className='h-5 w-5 text-primary' />
                <span>Born on September 16, 1997</span>
              </div>
              <div className='flex items-center gap-3'>
                <a
                  href='https://www.google.com/maps/search/?api=1&query=Pakhaow+Village,+Xaythany+District,+Vientiane+Capital,+Laos'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 hover:text-blue-500 transition-colors'
                >
                  <MapPinIcon className='h-5 w-5 text-primary' />
                  <span>
                    Pakhaow Village, Xaythany District, Vientiane Capital, Laos
                  </span>
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <a
                  href='https://wa.me/8562078287509'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 hover:text-green-500 transition-colors'
                >
                  <PhoneIcon className='h-5 w-5 text-primary' />
                  <span>(+856) 20-78287509</span>
                </a>
                <a
                  href='https://wa.me/8562091182391'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-green-500 transition-colors'
                >
                  <span>, 91182391</span>
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <EnvelopeIcon className='h-5 w-5 text-primary' />
                <span>souliyapps@gmail.com</span>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 mb-8'>
              <Card>
                <CardContent className='p-6 text-center'>
                  <h4 className='text-4xl font-bold text-primary mb-2'>5+</h4>
                  <p className='text-muted-foreground'>Years Experience</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='p-6 text-center'>
                  <h4 className='text-4xl font-bold text-primary mb-2'>10+</h4>
                  <p className='text-muted-foreground'>Projects Completed</p>
                </CardContent>
              </Card>
            </div>

            <Button size='lg' onClick={downloadCV}>
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
