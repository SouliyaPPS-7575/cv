import { createFileRoute } from '@tanstack/react-router';
import { Footer } from '~/components/footer';
import { AboutPage } from './about';
import { ContactPage } from './contact';
import { EducationPage } from './education';
import { ExperiencePage } from './experience';
import { HomePage } from './home';
import { ProjectsPage } from './projects';
import { SkillsPage } from './skills';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <main className='min-h-screen'>
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <EducationPage />
      <ExperiencePage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </main>
  );
}
