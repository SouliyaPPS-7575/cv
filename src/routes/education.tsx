import { createFileRoute } from '@tanstack/react-router'
import { AcademicCapIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

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

  return (
    <section className='py-20 pt-32 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-2'>Education</h2>
          <div className='w-20 h-1 bg-primary mx-auto mb-6'></div>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            My academic journey and educational background
          </p>
        </div>

        <div className='relative max-w-4xl mx-auto'>
          <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block'></div>

          <div className='space-y-12'>
            {educationHistory.map((edu, index) => (
              <div key={index} className='relative'>
                <div
                  className={`md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:w-5 md:h-5 md:rounded-full md:bg-primary md:border-4 md:border-background md:z-10 hidden md:block`}
                ></div>

                <Card
                  className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} relative z-20`}
                >
                  <CardHeader className='flex flex-row items-start gap-4'>
                    <AcademicCapIcon className='h-6 w-6 text-primary mt-1' />
                    <div>
                      <CardTitle className='text-xl'>{edu.degree}</CardTitle>
                      {edu.institution && (
                        <p className='text-muted-foreground'>
                          {edu.institution}
                        </p>
                      )}
                      <div className='flex items-center mt-2 text-sm text-muted-foreground'>
                        <CalendarIcon className='h-4 w-4 mr-2' />
                        {edu.period}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

