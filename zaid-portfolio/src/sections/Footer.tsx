const Footer = () => (
  <footer className="mt-16 border-t border-white/10 bg-[#081424]">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
      <p>© {new Date().getFullYear()} Zaid Shaikh. All rights reserved.</p>
      <div className="flex flex-wrap gap-4 text-white/80">
        <a href="mailto:hello@zaidshaikh.dev" className="hover:text-tealGlow">
          hello@zaidshaikh.dev
        </a>
        <a href="https://www.linkedin.com" className="hover:text-tealGlow">
          LinkedIn
        </a>
        <a href="https://github.com" className="hover:text-tealGlow">
          GitHub
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
