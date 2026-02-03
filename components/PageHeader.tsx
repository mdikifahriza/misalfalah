import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
  bgPos?: string; // Optional: 'top', 'center', 'bottom'
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, image, bgPos = 'center' }) => {
  return (
    <div className="relative h-[350px] md:h-[450px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image with slight zoom effect on hover (optional) */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-no-repeat transition-transform duration-1000 ease-in-out hover:scale-105`}
        style={{ 
            backgroundImage: `url(${image})`,
            backgroundPosition: bgPos
        }}
      ></div>

      {/* Overlay Gradient: Darker at bottom for text readability, Green tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-primary/70 to-primary/90 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-green-50 max-w-2xl mx-auto drop-shadow-md font-medium leading-relaxed opacity-90">
            {subtitle}
          </p>
        )}
        {/* Decorative underline */}
        <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-6 rounded-full shadow-lg"></div>
      </div>

      {/* Bottom Wave Divider (SVG) - Matches bg-gray-50 of the content pages */}
      <div className="absolute bottom-0 left-0 right-0 z-20 leading-none">
        <svg
          className="relative block w-full h-[40px] md:h-[60px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-50"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default PageHeader;