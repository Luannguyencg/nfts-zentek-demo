'use client';

import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  variant = 'primary',
  disabled = false,
  children,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        'py-2 rounded-full font-bold text-sm transition-all duration-200 sm:h-10 sm:w-[114px] h-[36px] w-[98px]',
        {
          // Primary styles
          'bg-yellow-400 text-black': variant === 'primary' && !disabled,
          'bg-yellow-600 text-black': variant === 'primary' && !disabled && 'hover',
          'bg-yellow-600 opacity-60 text-black cursor-not-allowed': variant === 'primary' && disabled,

          // Secondary styles
          'border border-yellow-400 text-yellow-400 bg-black': variant === 'secondary' && !disabled,
          'hover:border-white hover:text-white': variant === 'secondary' && !disabled,
          'border border-yellow-400 text-gray-500 bg-black cursor-not-allowed opacity-50': variant === 'secondary' && disabled,
        },
        className
      )}
    >
      {children}
    </button>
  );
}
