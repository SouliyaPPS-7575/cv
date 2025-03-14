import * as React from 'react';
import { cn } from '@/lib/utils';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export function Switch({ label, className, ...props }: SwitchProps) {
  const id = React.useId();

  return (
    <div className='flex items-center space-x-2'>
      <div className='relative'>
        <input type='checkbox' id={id} className='peer sr-only' {...props} />
        <label
          htmlFor={id}
          className={cn(
            'block h-6 w-11 cursor-pointer rounded-full bg-muted peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background peer-checked:bg-primary',
            className
          )}
        >
          <span className='absolute inset-y-0 left-0 flex h-6 w-6 items-center justify-center rounded-full bg-background transition-transform peer-checked:translate-x-5' />
        </label>
      </div>
      {label && (
        <label
          htmlFor={id}
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          {label}
        </label>
      )}
    </div>
  );
}
