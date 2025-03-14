import { createFileRoute } from '@tanstack/react-router';
import {
  CodeBracketIcon,
  GlobeAltIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  CommandLineIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';
import { Card, CardContent } from '@/components/ui/card';

export const Route = createFileRoute('/skills')({
  component: SkillsPage,
});

export function SkillsPage() {
  const frontendSkills = [
    { name: 'JavaScript', icon: <CodeBracketIcon className='h-6 w-6' /> },
    { name: 'TypeScript', icon: <CodeBracketIcon className='h-6 w-6' /> },
    { name: 'React.js', icon: <GlobeAltIcon className='h-6 w-6' /> },
    { name: 'Next.js', icon: <ServerIcon className='h-6 w-6' /> },
    { name: 'HTML/CSS', icon: <CodeBracketIcon className='h-6 w-6' /> },
    { name: 'Tailwind CSS', icon: <PaintBrushIcon className='h-6 w-6' /> },
    { name: 'Ant Design UI', icon: <PaintBrushIcon className='h-6 w-6' /> },
    { name: 'Material UI', icon: <PaintBrushIcon className='h-6 w-6' /> },
    { name: 'React Redux', icon: <GlobeAltIcon className='h-6 w-6' /> },
    { name: 'Tanstack Query', icon: <CircleStackIcon className='h-6 w-6' /> },
    { name: 'Tanstack Router', icon: <GlobeAltIcon className='h-6 w-6' /> },
    { name: 'TRPC', icon: <ServerIcon className='h-6 w-6' /> },
    { name: 'Vinxi', icon: <ServerIcon className='h-6 w-6' /> },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <CommandLineIcon className='h-6 w-6' /> },
    { name: 'Golang', icon: <CommandLineIcon className='h-6 w-6' /> },
    { name: 'Supabase', icon: <CircleStackIcon className='h-6 w-6' /> },
    { name: 'Firebase', icon: <CircleStackIcon className='h-6 w-6' /> },
    { name: 'MongoDB', icon: <CircleStackIcon className='h-6 w-6' /> },
    { name: 'MySQL', icon: <CircleStackIcon className='h-6 w-6' /> },
    { name: 'PostgreSQL', icon: <CircleStackIcon className='h-6 w-6' /> },
  ];

  const mobileSkills = [
    {
      name: 'Flutter/Dart',
      icon: <DevicePhoneMobileIcon className='h-6 w-6' />,
    },
    { name: 'HiveDB', icon: <CircleStackIcon className='h-6 w-6' /> },
    {
      name: 'React Native',
      icon: <DevicePhoneMobileIcon className='h-6 w-6' />,
    },
  ];

  const otherSkills = [
    { name: 'GitLab', icon: <CodeBracketIcon className='h-6 w-6' /> },
    { name: 'Linux', icon: <CommandLineIcon className='h-6 w-6' /> },
    { name: 'Windows Server', icon: <ServerIcon className='h-6 w-6' /> },
    { name: 'VMware', icon: <ServerIcon className='h-6 w-6' /> },
    { name: 'Docker', icon: <ServerIcon className='h-6 w-6' /> },
    { name: 'Canva', icon: <PaintBrushIcon className='h-6 w-6' /> },
    { name: 'Adobe Photoshop', icon: <PaintBrushIcon className='h-6 w-6' /> },
    { name: 'Illustrator', icon: <PaintBrushIcon className='h-6 w-6' /> },
    { name: 'Microsoft Office', icon: <CodeBracketIcon className='h-6 w-6' /> },
  ];

  return (
    <section className='py-20 pt-32'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-2'>My Skills</h2>
          <div className='w-20 h-1 bg-primary mx-auto mb-6'></div>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Here are my technical skills and technologies I've been working with
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-2'>
          <div>
            <h3 className='text-xl font-bold mb-6 flex items-center'>
              <GlobeAltIcon className='mr-2 h-5 w-5 text-primary' />
              Frontend Development
            </h3>
            <div className='grid grid-cols-2 gap-4'>
              {frontendSkills.map((skill) => (
                <Card key={skill.name}>
                  <CardContent className='p-4 flex items-center'>
                    <div className='mr-3 text-primary'>{skill.icon}</div>
                    <span className='font-medium'>{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-6 flex items-center'>
              <ServerIcon className='mr-2 h-5 w-5 text-primary' />
              Backend Development
            </h3>
            <div className='grid grid-cols-2 gap-4'>
              {backendSkills.map((skill) => (
                <Card key={skill.name}>
                  <CardContent className='p-4 flex items-center'>
                    <div className='mr-3 text-primary'>{skill.icon}</div>
                    <span className='font-medium'>{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-6 flex items-center'>
              <DevicePhoneMobileIcon className='mr-2 h-5 w-5 text-primary' />
              Mobile Development
            </h3>
            <div className='grid grid-cols-2 gap-4'>
              {mobileSkills.map((skill) => (
                <Card key={skill.name}>
                  <CardContent className='p-4 flex items-center'>
                    <div className='mr-3 text-primary'>{skill.icon}</div>
                    <span className='font-medium'>{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-6 flex items-center'>
              <PaintBrushIcon className='mr-2 h-5 w-5 text-primary' />
              Other Skills
            </h3>
            <div className='grid grid-cols-2 gap-4'>
              {otherSkills.map((skill) => (
                <Card key={skill.name}>
                  <CardContent className='p-4 flex items-center'>
                    <div className='mr-3 text-primary'>{skill.icon}</div>
                    <span className='font-medium'>{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
