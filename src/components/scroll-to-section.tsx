import { ArrowDownIcon } from '@heroicons/react/24/outline';

interface ScrollToSectionProps {
  targetId: string;
}

export function ScrollToSection({ targetId }: ScrollToSectionProps) {
  const scrollToSection = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      onClick={scrollToSection}
      className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer'
      aria-label={`Scroll to ${targetId} section`}
      role='button'
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          scrollToSection();
        }
      }}
    >
      <ArrowDownIcon className='h-6 w-6' />
    </div>
  );
}
