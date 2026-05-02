"use client";

import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
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
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:block"
      style={{ 
        willChange: 'transform',
        marginLeft: '-12px',
        marginTop: '-12px'
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
