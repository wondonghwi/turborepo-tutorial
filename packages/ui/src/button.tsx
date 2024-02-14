'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

console.log('여기 로그추가!');

export const Button = ({ children, className, appName }: ButtonProps) => {
  console.log(appName);

  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}>
      {children}
    </button>
  );
};
