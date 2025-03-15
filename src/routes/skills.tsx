import { createFileRoute } from '@tanstack/react-router';
import {
  GlobeAltIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { Card, CardContent } from '@/components/ui/card';
import {
  ExternalLink,
  Code,
  FileJson,
  Braces,
  LayoutGrid,
  Workflow,
  Boxes,
  Layers,
  Rocket,
  Paintbrush,
  Palette,
  SquareStack,
  Database,
  Server,
  Github,
  Gitlab,
  Terminal,
  MonitorSmartphone,
  Smartphone,
  Sparkles,
  Brain,
  Bot,
  Cpu,
  Flame,
  Zap,
} from 'lucide-react';

export const Route = createFileRoute('/skills')({
  component: SkillsPage,
});

export function SkillsPage() {
  const frontendSkills = [
    {
      name: 'HTML/CSS',
      icon: <Code className='h-6 w-6' />,
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      name: 'JavaScript',
      icon: <Braces className='h-6 w-6' />,
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      name: 'TypeScript',
      icon: <FileJson className='h-6 w-6' />,
      url: 'https://www.typescriptlang.org/',
    },
    {
      name: 'React.js',
      icon: <Workflow className='h-6 w-6' />,
      url: 'https://react.dev/',
    },
    {
      name: 'Tanstack Start',
      icon: <LayoutGrid className='h-6 w-6' />,
      url: 'https://tanstack.com/',
    },
    {
      name: 'Next.js',
      icon: <Rocket className='h-6 w-6' />,
      url: 'https://nextjs.org/',
    },
    {
      name: 'TRPC',
      icon: <Boxes className='h-6 w-6' />,
      url: 'https://trpc.io/',
    },
    {
      name: 'Vinxi',
      icon: <Zap className='h-6 w-6' />,
      url: 'https://github.com/nksaraf/vinxi',
    },
    {
      name: 'Bun',
      icon: <Flame className='h-6 w-6' />,
      url: 'https://bun.sh/',
    },
    {
      name: 'Tailwind CSS',
      icon: <Paintbrush className='h-6 w-6' />,
      url: 'https://tailwindcss.com/',
    },
    {
      name: 'HeroUI',
      icon: <Palette className='h-6 w-6' />,
      url: 'https://www.heroui.com/',
    },
    {
      name: 'Ant Design UI',
      icon: <SquareStack className='h-6 w-6' />,
      url: 'https://ant.design/',
    },
    {
      name: 'Material UI',
      icon: <Layers className='h-6 w-6' />,
      url: 'https://mui.com/',
    },
    {
      name: 'Tanstack Query',
      icon: <LayoutGrid className='h-6 w-6' />,
      url: 'https://tanstack.com/query/latest',
    },
    {
      name: 'Tanstack Router',
      icon: <LayoutGrid className='h-6 w-6' />,
      url: 'https://tanstack.com/router/latest',
    },
    {
      name: 'React Redux',
      icon: <Workflow className='h-6 w-6' />,
      url: 'https://redux.js.org/',
    },
  ];

  const backendSkills = [
    {
      name: 'Supabase',
      icon: <Database className='h-6 w-6' />,
      url: 'https://supabase.com/',
    },
    {
      name: 'PocketBase',
      icon: <Database className='h-6 w-6' />,
      url: 'https://pocketbase.io/',
    },
    {
      name: 'Firebase',
      icon: <Flame className='h-6 w-6' />,
      url: 'https://firebase.google.com/',
    },
    {
      name: 'MongoDB',
      icon: <Database className='h-6 w-6' />,
      url: 'https://www.mongodb.com/',
    },
    {
      name: 'HiveDB',
      icon: <Database className='h-6 w-6' />,
      url: 'https://hivedb.dev/',
    },
    {
      name: 'MySQL',
      icon: <Database className='h-6 w-6' />,
      url: 'https://www.mysql.com/',
    },
    {
      name: 'PostgreSQL',
      icon: <Database className='h-6 w-6' />,
      url: 'https://www.postgresql.org/',
    },
    {
      name: 'Node.js',
      icon: <Server className='h-6 w-6' />,
      url: 'https://nodejs.org/',
    },
    {
      name: 'Golang',
      icon: <Terminal className='h-6 w-6' />,
      url: 'https://golang.org/',
    },
  ];

  const mobileSkills = [
    {
      name: 'React Native',
      icon: <Smartphone className='h-6 w-6' />,
      url: 'https://reactnative.dev/',
    },
    {
      name: 'Flutter/Dart',
      icon: <MonitorSmartphone className='h-6 w-6' />,
      url: 'https://flutter.dev/',
    },
    {
      name: 'AppSheet',
      icon: <Smartphone className='h-6 w-6' />,
      url: 'https://www.appsheet.com/',
    },
  ];

  // AI skills section with specific icons and URLs
  const aiSkills = [
    {
      name: 'OpenAI GPT',
      icon: <Brain className='h-6 w-6' />,
      url: 'https://openai.com/',
    },
    {
      name: 'v0.dev AI',
      icon: <Sparkles className='h-6 w-6' />,
      url: 'https://v0.dev/',
    },
    {
      name: 'Claude AI',
      icon: <Bot className='h-6 w-6' />,
      url: 'https://claude.ai/',
    },
    {
      name: 'LangChain',
      icon: <Workflow className='h-6 w-6' />,
      url: 'https://langchain.com/',
    },
    {
      name: 'Hugging Face',
      icon: <Sparkles className='h-6 w-6' />,
      url: 'https://huggingface.co/',
    },
    {
      name: 'TensorFlow',
      icon: <Cpu className='h-6 w-6' />,
      url: 'https://www.tensorflow.org/',
    },
    {
      name: 'PyTorch',
      icon: <Flame className='h-6 w-6' />,
      url: 'https://pytorch.org/',
    },
  ];

  const otherSkills = [
    {
      name: 'GitLab',
      icon: <Gitlab className='h-6 w-6' />,
      url: 'https://gitlab.com/',
    },
    {
      name: 'GitHub',
      icon: <Github className='h-6 w-6' />,
      url: 'https://github.com/',
    },
    {
      name: 'Linux',
      icon: <Terminal className='h-6 w-6' />,
      url: 'https://www.linux.org/',
    },
    {
      name: 'Windows Server',
      icon: <Server className='h-6 w-6' />,
      url: 'https://www.microsoft.com/en-us/windows-server',
    },
    {
      name: 'VMware',
      icon: <Boxes className='h-6 w-6' />,
      url: 'https://www.vmware.com/',
    },
    {
      name: 'Docker',
      icon: <Boxes className='h-6 w-6' />,
      url: 'https://www.docker.com/',
    },
    {
      name: 'Canva',
      icon: <Palette className='h-6 w-6' />,
      url: 'https://www.canva.com/',
    },
    {
      name: 'Adobe Photoshop',
      icon: <Paintbrush className='h-6 w-6' />,
      url: 'https://www.adobe.com/products/photoshop.html',
    },
    {
      name: 'Illustrator',
      icon: <Paintbrush className='h-6 w-6' />,
      url: 'https://www.adobe.com/products/illustrator.html',
    },
    {
      name: 'Microsoft Office',
      icon: <FileJson className='h-6 w-6' />,
      url: 'https://www.microsoft.com/microsoft-365',
    },
  ];

  interface Skill {
    name: string;
    icon: React.ReactNode;
    url: string;
  }

  // Reusable skill card component
  const SkillCard = ({ skill }: { skill: Skill }) => (
    <a
      href={skill.url}
      target='_blank'
      rel='noopener noreferrer'
      className='block transition-all hover:scale-105'
    >
      <Card className='hover:border-primary hover:shadow-md transition-all'>
        <CardContent className='p-4 flex items-center'>
          <div className='mr-3 text-primary'>{skill.icon}</div>
          <span className='font-medium'>{skill.name}</span>
          <ExternalLink className='h-4 w-4 ml-auto text-muted-foreground' />
        </CardContent>
      </Card>
    </a>
  );

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
                <SkillCard key={skill.name} skill={skill} />
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
                <SkillCard key={skill.name} skill={skill} />
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
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* AI Skills Section */}
          <div>
            <h3 className='text-xl font-bold mb-6 flex items-center'>
              <SparklesIcon className='mr-2 h-5 w-5 text-primary' />
              Generative AI
            </h3>
            <div className='grid grid-cols-2 gap-4'>
              {aiSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
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
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
