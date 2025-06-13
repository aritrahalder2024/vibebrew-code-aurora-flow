
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  style,
}) => {
  const baseStyles = 'font-medium transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-0 active:ring-0';
  
  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border border-gray-400 text-gray-800 hover:bg-gray-50',
  };
  
  const sizeStyles = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  // Custom styles for the glowing waitlist button
  const waitlistButtonStyles = variant === 'primary' ? 
    'rounded-full shadow-lg flex items-center justify-center' : '';
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${waitlistButtonStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
