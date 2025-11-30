import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Modal from '../components/ui/modal';

const projects = [
  {
    title: 'eHS Portal Automation',
    description: 'Unified member onboarding with Apex micro-services, OmniStudio flexcards, and guided flows.',
    tags: ['Apex', 'LWC', 'OmniStudio'],
    impact: 'Cut provisioning time by 38% and enabled reusable health templates.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Wellnify.ai Recommendation Engine',
    description: 'Personalized wellness bundles via Flask APIs powered by Einstein Discovery insights.',
    tags: ['Flask', 'AWS', 'Python'],
    impact: 'Lifted upsell conversion by 22% through AI-curated offers.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Bucket List App',
    description: 'Vision board for experiences built on Salesforce + Einstein AI to prioritize next best action.',
    tags: ['Salesforce', 'Einstein AI'],
    impact: 'Gamified adoption inside a 200-person field team with nudges and reports.',
    image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=800&q=60'
  }
];

const Projects = () => {
  const [selected, setSelected] = useState<typeof projects[number] | null>(null);

  return (
    <section id="projects" className="section-container">
      <div className="mb-12 flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.4em] text-tealGlow/70">Projects</p>
        <h2 className="section-title">Case studies with measurable impact</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: idx * 0.12, duration: 0.9, ease: 'easeOut' }}
          >
            <Card className="group h-full overflow-hidden border-white/5 bg-white/5 p-0">
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d2e] to-transparent" />
              </div>
              <CardHeader className="p-6">
                <CardTitle>{project.title}</CardTitle>
                <p className="text-slate-300">{project.description}</p>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 px-6 pb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200">
                    {tag}
                  </span>
                ))}
              </CardContent>
              <div className="flex items-center justify-between border-t border-white/5 px-6 py-4">
                <p className="text-sm text-tealGlow/80">{project.impact}</p>
                <button
                  onClick={() => setSelected(project)}
                  className="text-sm font-semibold text-white transition hover:text-tealGlow"
                >
                  View Case Study
                </button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      <Modal
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        title={selected?.title ?? ''}
      >
        <p>{selected?.description}</p>
        <p className="text-sm text-slate-300">{selected?.impact}</p>
        <div className="flex flex-wrap gap-2">
          {selected?.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200">
              {tag}
            </span>
          ))}
        </div>
      </Modal>
    </section>
  );
};

export default Projects;
