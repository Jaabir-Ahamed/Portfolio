import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/lib/resume-data";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 pb-24">
      <Container>
        <Section className="pt-32">
          <div className="space-y-12 max-w-3xl mx-auto">
            <div className="space-y-4 text-center">
              <h1 className="text-5xl font-bold text-zinc-100 tracking-tight">
                Get in Touch
              </h1>
              <p className="text-xl text-zinc-400 tracking-tight">
                I&apos;m always open to discussing new opportunities and interesting projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-zinc-100" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${resumeData.contact.email}`}
                      className="text-zinc-400 hover:text-zinc-100 transition-colors tracking-tight"
                    >
                      {resumeData.contact.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-zinc-100" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-1">
                      Phone
                    </h3>
                    <a
                      href={`tel:${resumeData.contact.phone}`}
                      className="text-zinc-400 hover:text-zinc-100 transition-colors tracking-tight"
                    >
                      {resumeData.contact.phone}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Github className="w-6 h-6 text-zinc-100" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-1">
                      GitHub
                    </h3>
                    <a
                      href={`https://${resumeData.contact.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-100 transition-colors tracking-tight"
                    >
                      {resumeData.contact.github}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-zinc-100" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-1">
                      LinkedIn
                    </h3>
                    <a
                      href={`https://${resumeData.contact.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-100 transition-colors tracking-tight"
                    >
                      {resumeData.contact.linkedin}
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-zinc-100" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-1">
                    Location
                  </h3>
                  <p className="text-zinc-400 tracking-tight">
                    {resumeData.location}
                  </p>
                </div>
              </div>
            </Card>

            <div className="text-center pt-8">
              <a href={`mailto:${resumeData.contact.email}`}>
                <Button variant="primary" size="lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
              </a>
            </div>
          </div>
        </Section>
      </Container>
    </main>
  );
}

