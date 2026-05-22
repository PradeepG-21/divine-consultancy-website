import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1], staggerChildren: 0.04, delayChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] } },
  exit: { opacity: 0, x: -8, transition: { duration: 0.15 } },
};

const navLinks = [
  { label: 'About', anchor: '#about' },
  { label: 'Services', anchor: '#services' },
  { label: 'Process', anchor: '#process' },
  { label: 'Why Choose Us', anchor: '#why-us' },
  { label: 'Clients', anchor: '#clients' },
  { label: 'Contact', anchor: '#contact' },
];

export const Nav = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const scrollToSection = (anchor: string) => {
    const target = document.querySelector(anchor) as HTMLElement | null;
    if (!target) return;
    const navHeight = (navRef.current?.firstElementChild as HTMLElement)?.offsetHeight ?? 80;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;
    animate(window.scrollY, targetTop, {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1],
      onUpdate: (value) => window.scrollTo(0, value),
    });
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(anchor);
    history.pushState(null, '', anchor);
  };

  const handleDesktopNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    scrollToSection(anchor);
    history.pushState(null, '', anchor);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) =>
        document.querySelector(link.anchor)
      );

      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;

      if (atBottom) {
        setActiveSection(navLinks[navLinks.length - 1].anchor);
        return;
      }

      const threshold = window.innerHeight * 0.4;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= threshold) {
            setActiveSection(navLinks[i].anchor);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-ivory-50 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-2 md:py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 rounded">
            <div className="hidden md:flex bg-navy-900 rounded-full p-1.5 items-center justify-center">
              <img src="/logo.png" alt="Divine Consultancy Services" className="h-8 md:h-10" />
            </div>
            <div>
              <div className="font-serif text-20 text-navy-900 leading-tight">
                Divine Consultancy
              </div>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.anchor}
                href={link.anchor}
                onClick={(e) => handleDesktopNavClick(e, link.anchor)}
                className={`relative text-14 uppercase tracking-wide font-medium transition-colors duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 rounded ${
                  activeSection === link.anchor
                    ? 'text-gold-500'
                    : 'text-navy-900 hover:text-gold-500'
                }`}
              >
                {link.label}
                {activeSection === link.anchor && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-500"
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden p-2 text-navy-900 hover:text-gold-500 transition-colors duration-base"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiX className="text-28" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMenu className="text-28" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden overflow-hidden bg-ivory-50 border-t border-ivory-100 shadow-md"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col">
              {navLinks.map((link) => (
                <motion.a
                  key={link.anchor}
                  variants={mobileLinkVariants}
                  href={link.anchor}
                  onClick={(e) => handleMobileNavClick(e, link.anchor)}
                  className={`py-4 text-16 uppercase tracking-wide font-medium border-b border-ivory-100 last:border-b-0 transition-colors duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 rounded ${
                    activeSection === link.anchor
                      ? 'text-gold-500'
                      : 'text-navy-900 hover:text-gold-500'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
