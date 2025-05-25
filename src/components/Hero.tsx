import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Get in touch with our <span className="text-blue-600">expert team</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Have questions or need assistance? Our dedicated team is ready to help you with any inquiries or feedback.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-500 opacity-20 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 opacity-20 rounded-full"></div>
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team collaborating" 
              className="rounded-xl shadow-xl w-full h-auto object-cover z-10 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;