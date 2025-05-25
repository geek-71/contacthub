import React from 'react';
import { Users, Sparkles, Clock } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're dedicated to providing exceptional service and support to all our clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Feature 
            icon={<Users className="h-6 w-6 text-blue-600" />}
            title="Expert Team"
            description="Our experienced professionals are ready to assist you with any questions or concerns."
          />
          <Feature 
            icon={<Sparkles className="h-6 w-6 text-blue-600" />}
            title="Quality Service"
            description="We pride ourselves on delivering top-notch service that exceeds expectations."
          />
          <Feature 
            icon={<Clock className="h-6 w-6 text-blue-600" />}
            title="Quick Response"
            description="Our team responds promptly to all inquiries, ensuring you get timely assistance."
          />
        </div>
      </div>
    </section>
  );
};

export default About;