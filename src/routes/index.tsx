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
      <div id='about'>
        <AboutPage />
      </div>
      <div id='skills'>
        <SkillsPage />
      </div>
      <div id='education'>
        <EducationPage />
      </div>
      <div id='experience'>
        <ExperiencePage />
      </div>
      <div id='projects'>
        <ProjectsPage />
      </div>
      <div id='contact'>
        <ContactPage />
      </div>
      <Footer />
    </main>
  );
}
