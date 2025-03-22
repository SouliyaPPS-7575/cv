import { Button } from '@/components/ui/button';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './theme-toggle';
import { useDownloadCV } from '~/hooks/useDownloadCV';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const downloadCV = useDownloadCV();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Education', href: '/education' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-background/80 backdrop-blur-md shadow-sm'
          : 'bg-background/0 backdrop-blur-0'
      }`}
    >
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <Link to='/' className='text-xl font-bold'>
          Souliya<span className='text-primary'>.</span>
        </Link>

        <div className='flex items-center gap-4'>
          <ThemeToggle />

          <button
            onClick={toggleMenu}
            className='md:hidden'
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <XMarkIcon className='h-6 w-6' />
            ) : (
              <Bars3Icon className='h-6 w-6' />
            )}
          </button>

          <nav className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className='text-sm font-medium hover:text-primary transition-colors'
                activeProps={{ className: 'text-primary' }}
              >
                {link.name}
              </Link>
            ))}
            <Button onClick={downloadCV}>Download CV</Button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='fixed inset-0 top-16 bg-background/50 backdrop-blur-md z-40 p-4 md:hidden'
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.nav
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className='flex flex-col space-y-4 bg-background/100 p-6 rounded-lg shadow-lg'
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className='text-lg py-2 hover:text-primary transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                  activeProps={{ className: 'text-primary' }}
                >
                  {link.name}
                </Link>
              ))}
              <Button className='mt-4' onClick={downloadCV}>
                Download CV
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
