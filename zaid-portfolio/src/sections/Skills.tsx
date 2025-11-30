import { motion } from 'framer-motion';

const skills = [
  {
    label: 'Salesforce',
    items: ['Apex', 'LWC', 'OmniStudio', 'Flows', 'Copado', 'Einstein AI']
  },
  {
    label: 'Data & AI',
    items: ['Python', 'AWS RDS', 'Flask']
  },
  {
    label: 'Web',
    items: ['React', 'HTML', 'CSS', 'JavaScript']
  },
  {
    label: 'PM Tools',
    items: ['Jira', 'Confluence', 'Figma']
  }
];

const Skills = () => (
  <section id="skills" className="section-container">
    <div className="mb-12 flex flex-col gap-4">
      <p className="text-sm uppercase tracking-[0.4em] text-tealGlow/70">Skills</p>
      <h2 className="section-title">Ecosystems I operate in</h2>
    </div>
    <div className="grid gap-6 md:grid-cols-2">
      {skills.map((group, idx) => (
        <motion.div
          key={group.label}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: idx * 0.1, duration: 0.7, ease: 'easeOut' }}
          className="rounded-3xl border border-white/5 bg-white/5 p-6 shadow-lg backdrop-blur"
        >
          <h3 className="text-xl font-semibold text-white">{group.label}</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {group.items.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:-translate-y-1 hover:border-tealGlow hover:shadow-[0_10px_40px_rgba(0,209,255,0.25)]"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
