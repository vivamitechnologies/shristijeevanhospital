import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BookAppointmentButtonProps {
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  text?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function BookAppointmentButton({ className = '', onClick, size = 'md', text = 'Book Appointment', type, disabled }: BookAppointmentButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs sm:text-sm',
    md: 'px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base',
    lg: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold'
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5 sm:w-4 sm:h-4',
    md: 'w-4 h-4 sm:w-5 sm:h-5',
    lg: 'w-5 h-5 sm:w-6 sm:h-6'
  };

  const buttonContent = (
    <>
      <Calendar className={`${iconSizes[size]} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`} />
      <span>{text}</span>
    </>
  );

  const baseClasses = `
    group relative inline-flex items-center justify-center gap-2 
    bg-gradient-to-r from-[#0047AB] via-[#0057D9] to-[#0070FF] hover:bg-gradient-to-r hover:from-[#003B91] hover:via-[#0046B0] hover:to-[#005CCC]
    text-white 
    rounded-full 
    overflow-hidden 
    shadow-[0_4px_15px_rgba(0,87,217,0.3)] 
    hover:shadow-[0_8px_25px_rgba(0,87,217,0.4)]
    active:shadow-[0_2px_10px_rgba(0,87,217,0.3)]
    active:scale-[0.98]
    transition-all duration-300 ease-out
    font-medium font-sans tracking-wide
    hover:-translate-y-0.5
    ${sizeClasses[size]} 
    ${className}
  `;

  const shineEffect = (
    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
      <div className="relative h-full w-12 bg-white/20 blur-[2px]" />
    </div>
  );

  if (onClick || type === 'submit' || type === 'button' || type === 'reset') {
    return (
      <button onClick={onClick} type={type || 'button'} disabled={disabled} className={`${baseClasses} ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`}>
        {!disabled && shineEffect}
        <span className="relative z-10 flex items-center gap-2">{buttonContent}</span>
      </button>
    );
  }

  return (
    <Link to="/appointment" className={baseClasses}>
      {shineEffect}
      <span className="relative z-10 flex items-center gap-2">{buttonContent}</span>
    </Link>
  );
}
