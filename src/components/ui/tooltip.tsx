import * as React from 'react';
import { cn } from '@/lib/utils';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
}

export function Tooltip({
  content,
  children,
  side = 'top',
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const calculatePosition = () => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();

    switch (side) {
      case 'top':
        setPosition({
          x: rect.left + rect.width / 2,
          y: rect.top,
        });
        break;
      case 'right':
        setPosition({
          x: rect.right,
          y: rect.top + rect.height / 2,
        });
        break;
      case 'bottom':
        setPosition({
          x: rect.left + rect.width / 2,
          y: rect.bottom,
        });
        break;
      case 'left':
        setPosition({
          x: rect.left,
          y: rect.top + rect.height / 2,
        });
        break;
    }
  };

  const handleMouseEnter = () => {
    calculatePosition();
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const tooltipStyles: React.CSSProperties = {
    position: 'fixed',
    transform: (() => {
      switch (side) {
        case 'top':
          return `translate(-50%, calc(-100% - 5px))`;
        case 'right':
          return `translate(5px, -50%)`;
        case 'bottom':
          return `translate(-50%, 5px)`;
        case 'left':
          return `translate(calc(-100% - 5px), -50%)`;
      }
    })(),
    left: `${position.x}px`,
    top: `${position.y}px`,
    zIndex: 50,
  };

  return (
    <div
      ref={triggerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='inline-block'
    >
      {children}
      {isVisible && (
        <div
          role='tooltip'
          style={tooltipStyles}
          className={cn(
            'rounded bg-primary px-2 py-1 text-xs font-medium text-primary-foreground shadow animate-in fade-in-0 zoom-in-95',
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
