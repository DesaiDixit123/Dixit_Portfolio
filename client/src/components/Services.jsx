import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Concept',
    description: 'Conceptualize Your Dream.',
    points: [
      'Reviewing any existing branding',
      'Target audience and competitors research',
      'Developing a strategy'
    ]
  },
  {
    title: 'Design',
    description: 'Craft a Stunning Design.',
    points: [
      'Developing wireframes and mockup',
      'Choosing typography, color palettes',
      'Refining the design'
    ]
  },
  {
    title: 'Webflow',
    description: 'Bring it to Life with Webflow.',
    points: [
      'Testing the website thoroughly launch',
      'Choosing typography, color palettes',
      'Refining the design'
    ]
  }
];

const ServiceBox = ({ title, description, points }) => {
  return (
    <motion.div
      className="p-6 rounded-lg shadow-lg bg-white border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#F0F8FF',
        borderColor: '#4CAF50',
      }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-[30px] font-bold mb-2 text-gray-800">{title}</h2>
      <p className="mb-4 text-gray-600 font-semibold">{description}</p>
      <ul className="list-disc pl-5 ">
        {points.map((point, index) => (
          <li key={index} className="text-gray-500">{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">
      <h1 className="text-[45px] font-bold mb-8 flex flex-col text-gray-600">Your Dream Website In Just <span className='text-center'> Few Steps 
      </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 md:w-3/4">
        {services.map((service, index) => (
          <ServiceBox 
            key={index} 
            title={service.title} 
            description={service.description} 
            points={service.points} 
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
