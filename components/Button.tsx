import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'solid' | 'text';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'solid', 
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "px-6 py-3 font-bold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center";
  
  const variants = {
    outline: "border border-white/20 hover:border-white hover:bg-white hover:text-black text-white",
    solid: "bg-white text-black hover:bg-gray-200 border border-transparent",
    text: "text-white hover:text-gray-300 underline-offset-4 hover:underline padding-0 bg-transparent"
  };

  const width = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};