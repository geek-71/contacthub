import React from 'react';

interface LinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, label, onClick }) => {
  return (
    <a 
      href={href}
      onClick={(e) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        if (onClick) onClick();
      }}
      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
    >
      {label}
    </a>
  );
};