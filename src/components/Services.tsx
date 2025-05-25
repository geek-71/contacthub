import React from 'react';
import { Laptop, PenTool, BarChart4, Headphones } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <div className="group">
      <div className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm group-hover:shadow-md group-hover:border-blue-100 transition-all duration-300">
        <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of professional services designed to help your business succeed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Service 
            icon={<Laptop className="h-7 w-7 text-blue-600" />}
            title="Web Development"
            description="Custom websites built with the latest technologies to enhance your online presence."
          />
          <Service 
            icon={<PenTool className="h-7 w-7 text-blue-600" />}
            title="Graphic Design"
            description="Eye-catching visuals and branding that communicate your unique identity."
          />
          <Service 
            icon={<BarChart4 className="h-7 w-7 text-blue-600" />}
            title="Digital Marketing"
            description="Strategies to increase your visibility and grow your audience across platforms."
          />
          <Service 
            icon={<Headphones className="h-7 w-7 text-blue-600" />}
            title="Customer Support"
            description="Dedicated assistance to ensure your continued satisfaction and success."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;