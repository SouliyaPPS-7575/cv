import type React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  ServerIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import {
  Bot,
  Boxes,
  Braces,
  Brain,
  Cloud,
  Code,
  Database,
  ExternalLink,
  FileJson,
  Flame,
  Github,
  Gitlab,
  Globe,
  Layers,
  LayoutGrid,
  MonitorSmartphone,
  Paintbrush,
  Palette,
  Rocket,
  Search,
  Server,
  Smartphone,
  Sparkles,
  SquareStack,
  Terminal,
  Workflow,
  Zap,
} from 'lucide-react';
import { useRef } from 'react';

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

  // Hosting & Deployment skills
  const hostingSkills = [
    {
      name: 'Netlify',
      icon: <Server className='h-6 w-6' />,
      url: 'https://www.netlify.com/',
    },
    {
      name: 'Railway',
      icon: <Server className='h-6 w-6' />,
      url: 'https://railway.app/',
    },
    {
      name: 'Firebase Hosting',
      icon: <Flame className='h-6 w-6' />,
      url: 'https://firebase.google.com/docs/hosting',
    },
  ];

  // AI skills section with specific icons and URLs
  const aiSkills = [
    {
      name: 'Codex OpenAI AI Agent',
      icon: <Brain className='h-6 w-6' />,
      url: 'https://openai.com/codex/',
    },
    {
      name: 'Gemini CLI Google AI Agent',
      icon: <Bot className='h-6 w-6' />,
      url: 'https://google-gemini.github.io/gemini-cli/',
    },
    {
      name: 'Claude AI Agents Anthropic',
      icon: <Bot className='h-6 w-6' />,
      url: 'https://www.anthropic.com/solutions/agents',
    },
    {
      name: 'Windsurf AI Coding Assistant',
      icon: <Bot className='h-6 w-6' />,
      url: 'https://windsurf.com/',
    },
    {
      name: 'GitHub Copilot in VS Code',
      icon: <Bot className='h-6 w-6' />,
      url: 'https://code.visualstudio.com/docs/copilot/overview',
    },
    {
      name: 'Warp Terminal AI Agent',
      icon: <Terminal className='h-6 w-6' />,
      url: 'https://www.warp.dev/',
    },
    {
      name: 'Microsoft Copilot: Your AI companion',
      icon: <Sparkles className='h-6 w-6' />,
      url: 'https://copilot.microsoft.com/chats/tDL42Qp3xkC5zVk2VAF96',
    },
    {
      name: 'v0.dev AI',
      icon: <Sparkles className='h-6 w-6' />,
      url: 'https://v0.dev/',
    },
    {
      name: 'Bolt AI App Builder',
      icon: <Sparkles className='h-6 w-6' />,
      url: 'https://bolt.new/',
    },
    {
      name: 'n8n AI workflow automation',
      icon: <Workflow className='h-6 w-6' />,
      url: 'https://n8n.io/',
    },
    {
      name: 'LangChain',
      icon: <Workflow className='h-6 w-6' />,
      url: 'https://langchain.com/',
    },
  ];

  // Domains & DNS skills
  const domainSkills = [
    {
      name: 'Namecheap',
      icon: <Globe className='h-6 w-6' />,
      url: 'https://www.namecheap.com/',
    },
    {
      name: 'Cloudflare',
      icon: <Cloud className='h-6 w-6' />,
      url: 'https://www.cloudflare.com/',
    },
    {
      name: 'Netlify Domains',
      icon: <Globe className='h-6 w-6' />,
      url: 'https://docs.netlify.com/domains-https/custom-domains/',
    },
  ];

  // App publishing skills
  const publishingSkills = [
    {
      name: 'Google Play Console',
      icon: <Smartphone className='h-6 w-6' />,
      url: 'https://play.google.com/console/',
    },
    {
      name: 'Apple App Store Connect',
      icon: <MonitorSmartphone className='h-6 w-6' />,
      url: 'https://developer.apple.com/account',
    },
  ];

  // SEO skills
  const seoSkills = [
    {
      name: 'Google Search Console',
      icon: <Search className='h-6 w-6' />,
      url: 'https://search.google.com/search-console/about',
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
      name: 'Adobe Illustrator',
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -10 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      rotate: 5,
      scale: 1.1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Reusable skill card component with animations
  const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => (
    <motion.a
      href={skill.url}
      target='_blank'
      rel='noopener noreferrer'
      className='block'
      variants={itemVariants}
      whileHover={{
        scale: 1.05,
        transition: { type: 'spring', stiffness: 300, damping: 10 },
      }}
      custom={index}
    >
      <Card className='hover:border-primary hover:shadow-md transition-all h-full'>
        <CardContent className='p-4 flex items-center'>
          <motion.div
            className='mr-3 text-primary'
            variants={iconVariants}
            whileHover='hover'
          >
            {skill.icon}
          </motion.div>
          <span className='font-medium'>{skill.name}</span>
          <motion.div
            className='ml-auto'
            initial={{ opacity: 0.5 }}
            whileHover={{
              opacity: 1,
              x: 2,
              transition: { duration: 0.2 },
            }}
          >
            <ExternalLink className='h-4 w-4 text-muted-foreground' />
          </motion.div>
        </CardContent>
      </Card>
    </motion.a>
  );

  // Background animation elements
  const backgroundRef = useRef<HTMLDivElement>(null);

  return (
    <section className='py-20 pt-32 relative overflow-hidden'>
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
          <h2 className='text-3xl font-bold mb-2'>My Skills</h2>
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
            Here are my technical skills and technologies I've been working with
          </motion.p>
        </motion.div>

        {/* Skills Section */}

        {/* Frontend Development Section */}
        <motion.div
          className='grid gap-8 md:grid-cols-2 lg:grid-cols-2'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          ref={backgroundRef}
        >
          <motion.div variants={sectionVariants}>
            <motion.h3
              className='text-xl font-bold mb-6 flex items-center'
              variants={itemVariants}
            >
              <motion.div variants={iconVariants} className='text-primary mr-2'>
                <GlobeAltIcon className='h-5 w-5' />
              </motion.div>
              Frontend Development
            </motion.h3>
            <motion.div
              className='grid grid-cols-2 gap-4'
              variants={containerVariants}
            >
              {frontendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Hosting & Deployment Section */}
          <motion.div variants={sectionVariants}>
            <motion.h3
              className='text-xl font-bold mb-6 flex items-center'
              variants={itemVariants}
            >
              <motion.div variants={iconVariants} className='text-primary mr-2'>
                <ServerIcon className='h-5 w-5' />
              </motion.div>
              Hosting & Deployment
            </motion.h3>
            <motion.div
              className='grid grid-cols-2 gap-4'
              variants={containerVariants}
            >
              {hostingSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Domains & DNS Section */}
          <motion.div variants={sectionVariants}>
            <motion.h3
              className='text-xl font-bold mb-6 flex items-center'
              variants={itemVariants}
            >
              <motion.div variants={iconVariants} className='text-primary mr-2'>
                <GlobeAltIcon className='h-5 w-5' />
              </motion.div>
              Domains & DNS
            </motion.h3>
            <motion.div
              className='grid grid-cols-2 gap-4'
              variants={containerVariants}
            >
              {domainSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* SEO Section */}
          <motion.div variants={sectionVariants}>
            <motion.h3
              className='text-xl font-bold mb-6 flex items-center'
              variants={itemVariants}
            >
              <motion.div variants={iconVariants} className='text-primary mr-2'>
                <SparklesIcon className='h-5 w-5' />
              </motion.div>
              SEO
            </motion.h3>
            <motion.div
              className='grid grid-cols-2 gap-4'
              variants={containerVariants}
            >
              {seoSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile Development Section */}
          <motion.div variants={sectionVariants}>
            <motion.h3
              className='text-xl font-bold mb-6 flex items-center'
              variants={itemVariants}
            >
              <motion.div variants={iconVariants} className='text-primary mr-2'>
                <DevicePhoneMobileIcon className='h-5 w-5' />
              </motion.div>
              Mobile Development
            </motion.h3>
            <motion.div
              className='grid grid-cols-2 gap-4'
              variants={containerVariants}
            >
              {mobileSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* App Publishing Section */}
          <motion.div variants={sectionVariants}>
            <motion.h3
              className='text-xl font-bold mb-6 flex items-center'
              variants={itemVariants}
            >
              <motion.div variants={iconVariants} className='text-primary mr-2'>
                <DevicePhoneMobileIcon className='h-5 w-5' />
              </motion.div>
              App Publishing
            </motion.h3>
            <motion.div
              className='grid grid-cols-2 gap-4'
              variants={containerVariants}
            >
              {publishingSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Backend Development Section */}
          <motion.div variants={sectionVariants}>
            <motion.h3
              className='text-xl font-bold mb-6 flex items-center'
              variants={itemVariants}
            >
              <motion.div variants={iconVariants} className='text-primary mr-2'>
                <ServerIcon className='h-5 w-5' />
              </motion.div>
              Backend Development
            </motion.h3>
            <motion.div
              className='grid grid-cols-2 gap-4'
              variants={containerVariants}
            >
              {backendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* AI Skills Section */}
          <motion.div variants={sectionVariants}>
            <motion.h3
              className='text-xl font-bold mb-6 flex items-center'
              variants={itemVariants}
            >
              <motion.div variants={iconVariants} className='text-primary mr-2'>
                <SparklesIcon className='h-5 w-5' />
              </motion.div>
              Agentic AI
            </motion.h3>
            <motion.div
              className='grid grid-cols-2 gap-4'
              variants={containerVariants}
            >
              {aiSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            className='md:col-span-2 lg:col-span-1'
          >
            <motion.h3
              className='text-xl font-bold mb-6 flex items-center'
              variants={itemVariants}
            >
              <motion.div variants={iconVariants} className='text-primary mr-2'>
                <PaintBrushIcon className='h-5 w-5' />
              </motion.div>
              Other Skills
            </motion.h3>
            <motion.div
              className='grid grid-cols-2 gap-4'
              variants={containerVariants}
            >
              {otherSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
