"use client";

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-[99999] hidden md:block"
      style={{ 
        transform: `translate3d(calc(${position.x}px - 50%), calc(${position.y}px - 50%), 0)`,
        willChange: 'transform'
      }}
    >
      <div className={`transition-transform duration-200 flex items-center justify-center ${isHovering ? 'scale-150 rotate-12' : 'scale-100 rotate-0'}`}>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Detailed Lettuce Leaf */}
          <path 
            d="M50 95C65 95 88 82 92 55C96 28 75 8 50 5C25 8 4 28 8 55C12 82 35 95 50 95Z" 
            fill="#4ade80" 
            stroke="#166534" 
            strokeWidth="3"
          />
          <path d="M50 90V25" stroke="#166534" strokeWidth="3" strokeLinecap="round" />
          <path d="M50 80C60 70 75 65 85 60" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
          <path d="M50 80C40 70 25 65 15 60" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
