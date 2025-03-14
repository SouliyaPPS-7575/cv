import { createFileRoute } from '@tanstack/react-router'
import { BriefcaseIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Route = createFileRoute('/experience')({
  component: ExperiencePage,
});

 export function ExperiencePage() {
  const experiences = [
    {
      title: "Web Front End Developer",
      company: "Lao IT Dev Co., Ltd.",
      period: "",
      description:
        "Developed multiple web front-end projects including JDB Merchant, JDB E-Sign Document, JDB Mobile Banking Back Office, JDB FX Back Office, SMS Gateway, MK & Miyazaki Back Office, Miner Monitoring, and various management systems.",
      skills: ["React.js", "TypeScript", "Ant Design UI", "Material UI"],
    },
    {
      title: "Dharma Content Creator",
      company: "",
      period: "",
      description:
        "Built Progressive Web Application and Mobile Application for the dissemination of Dharma. Created and developed 'Lao Buddhaword' website and application. Designed Dhamma books, book covers, and collected sutras into book categories.",
      skills: ["Web Development", "Mobile App Development", "Content Creation", "Design"],
    },
    {
      title: "Network Infrastructure",
      company: "",
      period: "",
      description:
        "Installation of WIFI controller at Urbanite Apartment. Design and installation of Computer Network Infrastructure at CX.Ltd.",
      skills: ["Network Infrastructure", "WIFI Installation", "Network Design"],
    },
    {
      title: "Internship",
      company: "Ministry of Science and Technology",
      period: "July 17 - September 15, 2017",
      description: "Undertook 3 months work experience internship in the Ministry of Science and Technology.",
      skills: ["Government Sector", "Technology", "Science"],
    },
    {
      title: "Website Creation",
      company: "",
      period: "",
      description: "Participated in website creation of the project 'Re-Craft Laos'.",
      skills: ["Web Development", "Project Collaboration"],
    },
  ]

  return (
    <section className="py-20 pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and work experience</p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <BriefcaseIcon className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      {exp.company && <p className="text-primary font-medium">{exp.company}</p>}
                    </div>
                  </div>
                  {exp.period && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


