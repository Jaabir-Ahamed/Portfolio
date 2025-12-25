import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { resumeData } from "@/lib/resume-data";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 pb-24">
      <Container>
        <Section className="pt-32">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-zinc-100 tracking-tight">
                Projects
              </h1>
              <p className="text-xl text-zinc-400 tracking-tight max-w-2xl">
                A collection of my recent work and side projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {resumeData.projects.map((project) => (
                <Card key={project.name} className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-zinc-100 tracking-tight mb-2">
                        {project.name}
                      </h3>
                      <p className="text-zinc-400 tracking-tight">
                        {project.dates.start} - {project.dates.end}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <p
                          key={index}
                          className="text-zinc-400 tracking-tight leading-relaxed"
                        >
                          {highlight}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 tracking-tight"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      </Container>
    </main>
  );
}

