"use client";

import Link from 'next/link';

interface Button3DProps {
  href: string;
  text: string;
  hoverText: string;
  variant?: 'black' | 'gold';
  external?: boolean;
}

export default function Button3D({ 
  href, 
  text, 
  hoverText, 
  variant = 'black',
  external = false 
}: Button3DProps) {

  const variantStyles = variant === 'gold' 
    ? {
        border: '#D4AF37',
        bg: '#D4AF37',
        textColor: '#FFFFFF',
        hoverTextColor: '#D4AF37',
        shadow: 'rgba(212, 175, 55, 0.4)'
      }
    : {
        border: '#1A1A1A',
        bg: '#1A1A1A',
        textColor: '#FFFFFF',
        hoverTextColor: '#1A1A1A',
        shadow: 'rgba(26, 26, 26, 0.4)'
      };

  const buttonContent = (
    <div 
      className="container-button-3d"
      style={{
        ['--btn-border' as any]: variantStyles.border,
        ['--btn-bg' as any]: variantStyles.bg,
        ['--btn-text-color' as any]: variantStyles.textColor,
        ['--btn-hover-text-color' as any]: variantStyles.hoverTextColor,
        ['--btn-shadow' as any]: variantStyles.shadow,
      }}
    >
      <div className="hover-area bt-1"></div>
      <div className="hover-area bt-2"></div>
      <div className="hover-area bt-3"></div>
      <div className="hover-area bt-4"></div>
      <div className="hover-area bt-5"></div>
      <div className="hover-area bt-6"></div>
      <div 
        className="button-3d-inner" 
        data-text={text}
        data-hover-text={hoverText}
      >
        {/* Text is rendered via ::after in CSS for original HTML effect */}
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {buttonContent}
    </Link>
  );
}
