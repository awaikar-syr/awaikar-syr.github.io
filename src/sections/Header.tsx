"use client";

import { useState, useEffect } from 'react';

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Custom scroll function with slower animation
  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;
    
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    
    // Longer duration for slower animation (1500ms = 1.5 seconds)
    const duration = 1250;
    let startTime: number | null = null;
    
    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function for smoother animation
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    
    // Cubic easing function for smoother start and end
    function easeInOutCubic(t: number): number {
      return t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    
    requestAnimationFrame(animation);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className={`nav-item ${activeSection === 'home' ? 'bg-white text-gray-900' : ''}`}
        >
          Home
        </a>
        <a 
          href="#projects" 
          onClick={(e) => handleNavClick(e, 'projects')}
          className={`nav-item ${activeSection === 'projects' ? 'bg-white text-gray-900' : ''}`}
        >
          Projects
        </a>
        <a 
          href="#about" 
          onClick={(e) => handleNavClick(e, 'about')}
          className={`nav-item ${activeSection === 'about' ? 'bg-white text-gray-900' : ''}`}
        >
          About
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')}
          className={`nav-item ${activeSection === 'contact' ? 'bg-white text-gray-900' : ''}`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};