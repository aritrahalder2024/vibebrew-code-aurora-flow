import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseStyles = 'font-medium transition-all duration-300 relative overflow-hidden';
  
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
      style={variant === 'primary' ? {
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
      } : {}}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      )}
    </button>
  );
};

export default Button; 