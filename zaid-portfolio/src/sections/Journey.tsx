import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2018',
    title: 'Developer Foundations',
    detail: 'Built Apex services and Lightning Web Components for enterprise service clouds.',
    meta: 'Salesforce Developer'
  },
  {
    year: '2020',
    title: 'Consultant Mindset',
    detail: 'Led discovery workshops, OmniStudio design, and release strategy for healthcare clients.',
    meta: 'Functional Consultant'
  },
  {
    year: '2023',
    title: 'Product Thinking',
    detail: 'Mapped OKRs to product roadmaps and validated AI-powered experiences with stakeholders.',
    meta: 'Product-Focused Builder'
  }
];

const Journey = () => {
  return (
    <section id="journey" className="section-container">
      <div className="mb-14 flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.4em] text-tealGlow/70">Journey</p>
        <h2 className="section-title">Developer → Consultant → Future PM</h2>
        <p className="max-w-2xl text-slate-200">
          Every stop sharpened how I align process, people, and platforms. Hover to peek into each
          pivot.
        </p>
      </div>
      <div className="relative grid gap-8 md:grid-cols-3">
        {milestones.map((item, idx) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: idx * 0.15, duration: 0.8, ease: 'easeOut' }}
            className="group perspective"
          >
            <div className="glow-border rounded-3xl bg-white/5 p-6 text-left transition [transform-style:preserve-3d] group-hover:rotate-x-3">
              <p className="text-sm text-tealGlow/80">{item.year}</p>
              <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm text-slate-300">{item.meta}</p>
              <p className="mt-4 text-base text-slate-200 transition duration-300 group-hover:text-white">
                {item.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
