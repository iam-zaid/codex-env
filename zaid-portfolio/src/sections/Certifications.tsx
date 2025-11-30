import { motion } from 'framer-motion';

const certs = [
  {
    title: 'Platform Developer I',
    badge: 'https://res.cloudinary.com/dm4wfkipp/image/upload/v1706133749/salesforce-badges/pdi.svg',
    credentialId: 'PD1-103928'
  },
  {
    title: 'OmniStudio Consultant',
    badge: 'https://res.cloudinary.com/dm4wfkipp/image/upload/v1706133749/salesforce-badges/omnistudio.svg',
    credentialId: 'OMNI-88344'
  },
  {
    title: 'AI Associate',
    badge: 'https://res.cloudinary.com/dm4wfkipp/image/upload/v1706133749/salesforce-badges/ai-associate.svg',
    credentialId: 'AIA-55234'
  },
  {
    title: 'AI Specialist',
    badge: 'https://res.cloudinary.com/dm4wfkipp/image/upload/v1706133749/salesforce-badges/ai-specialist.svg',
    credentialId: 'AIS-77231'
  }
];

const Certifications = () => (
  <section id="certifications" className="section-container">
    <div className="mb-10 flex flex-col gap-4">
      <p className="text-sm uppercase tracking-[0.4em] text-tealGlow/70">Certifications</p>
      <h2 className="section-title">Trailhead-backed credibility</h2>
    </div>
    <motion.div
      className="flex gap-6 overflow-x-auto pb-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {certs.map((cert) => (
        <div
          key={cert.title}
          className="min-w-[220px] rounded-3xl border border-white/5 bg-white/5 p-4 text-center shadow-lg transition hover:-translate-y-2"
        >
          <img src={cert.badge} alt={cert.title} className="mx-auto h-20 w-20" />
          <p className="mt-4 text-lg font-semibold text-white">{cert.title}</p>
          <p className="text-xs text-slate-300">Credential ID: {cert.credentialId}</p>
        </div>
      ))}
    </motion.div>
  </section>
);

export default Certifications;
