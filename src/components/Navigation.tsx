function Navigation({ isScrolled, activeSection, scrollToSection }) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800' : 'bg-transparent'}`}
    >
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <span className='text-lg font-bold'>
            <span className='text-lime-400'>&lt;</span>stenix
            <span className='text-lime-400'>.dev</span>&#47;&gt;
          </span>
        </div>
        <div className='hidden md:flex items-center gap-8'>
          {['about', 'journey', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-sm hover:text-emerald-400 transition-colors capitalize ${activeSection === item ? 'text-emerald-400' : 'text-zinc-400'}`}
            >
              {item}
            </button>
          ))}
          <a
            href='https://github.com/StenixDev'
            target='_blank'
            rel='noopener noreferrer'
            className='px-4 py-2 bg-emerald-400/10 text-emerald-400 rounded border border-emerald-400/20 hover:bg-emerald-400/20 transition-colors text-sm'
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
