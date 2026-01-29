import { useState } from 'react';

function Navigation({
  isScrolled,
  activeSection,
  scrollToSection,
}: {
  isScrolled: boolean;
  activeSection: string;
  scrollToSection: (section: string) => void;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50  ${
        isScrolled || isMobileMenuOpen
          ? 'bg-zinc-950 backdrop-blur-sm border-b border-zinc-800'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <span className='text-lg font-bold'>
            <span className='text-lime-400'>&lt;</span>stenix
            <span className='text-lime-400'>.dev</span>&#47;&gt;
          </span>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8'>
          {['about', 'journey', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-sm hover:text-lime-400 transition-colors capitalize ${activeSection === item ? 'text-lime-400' : 'text-white-400'}`}
            >
              {item}
            </button>
          ))}
          <a
            href='https://github.com/StenixDev'
            target='_blank'
            rel='noopener noreferrer'
            className='px-4 py-2 bg-lime-400/10 text-lime-400 rounded border border-lime-400/20 hover:bg-lime-400/20 transition-colors text-sm'
          >
            Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='md:hidden text-white-400 hover:text-lime-400 transition-colors'
          aria-label='Toggle menu'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className='flex flex-col gap-4 p-6'>
          {['about', 'journey', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`text-left text-base hover:text-lime-400 transition-colors capitalize ${
                activeSection === item ? 'text-lime-400' : 'text-white-400'
              }`}
            >
              {item}
            </button>
          ))}
          <a
            href='https://github.com/StenixDev'
            target='_blank'
            rel='noopener noreferrer'
            className='px-4 py-2 bg-lime-400/10 text-lime-400 rounded border border-lime-400/20 hover:bg-lime-400/20 transition-colors text-sm text-center mt-2'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
