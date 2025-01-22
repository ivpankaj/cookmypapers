"use client";
import React, { useState, useEffect, ReactNode, MouseEventHandler } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 

  Book, 
  Globe, 
  Award,

  Star,
  Clock,

} from 'lucide-react';

export default function WorkPage() {
  const [currentCategory, setCurrentCategory] = useState('websites');
  const [animatedStats, setAnimatedStats] = useState(false);


  // Animate stats when in view
  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && !animatedStats) {
          setAnimatedStats(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedStats]);


  // New data for additional components
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "Python", "Java", "SQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Firebase", "VS Code"] },
    { category: "Soft Skills", items: ["Team Leadership", "Project Management", "Communication", "Problem Solving"] }
  ];
  const statistics = [
    { icon: <Code className="w-6 h-6" />, value: "50+", label: "Projects Completed" },
    { icon: <Star className="w-6 h-6" />, value: "30+", label: "Client Reviews" },
    { icon: <Clock className="w-6 h-6" />, value: "5+", label: "Years Experience" },
    { icon: <Award className="w-6 h-6" />, value: "15+", label: "Awards" }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section with Parallax Effect */}
      <motion.div 
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/api/placeholder/1920/1080')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Coding Portfolio , cookmypapers</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Crafting digital experiences through code and creativity
          </p>
        </motion.div>
      </motion.div>

      {/* Statistics Section */}
      <motion.div
        id="stats-section"
        className="py-16 px-4 md:px-8"
        initial={{ opacity: 0 }}
        animate={animatedStats ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={animatedStats ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-lg p-6 text-center"
              >
                <div className="flex justify-center mb-4 text-purple-500">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className="bg-gray-700/50 rounded-full px-4 py-2 text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Categories Section - Previous implementation with responsive improvements */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Connect us for </h2>
          
          {/* Category Buttons - Now responsive */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <CategoryButton
              active={currentCategory === 'websites'}
              onClick={() => {
                setCurrentCategory('websites');
     
              }}
              icon={<Globe className="w-5 h-5" />}
            >
              Websites
            </CategoryButton>
            <CategoryButton
              active={currentCategory === 'assignments'}
              onClick={() => {
                setCurrentCategory('assignments');
          
              }}
              icon={<Code className="w-5 h-5" />}
            >
              Assignments
            </CategoryButton>
            <CategoryButton
              active={currentCategory === 'research'}
              onClick={() => {
                setCurrentCategory('research');
         
              }}
              icon={<Book className="w-5 h-5" />}
            >
              Research
            </CategoryButton>
          </div>

          {/* Carousel improvements for mobile */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="overflow-hidden rounded-xl"
              >
                {/* Previous carousel implementation with responsive improvements */}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-gray-300 mb-8">Let&lsquo;s turn your ideas into reality</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Get in Touch
          </button>
        </motion.div>
      </section>
    </div>
  );
}

interface CategoryButtonProps {
  children: ReactNode; // Represents the button's label/content
  active?: boolean; // Optional, determines active state
  onClick?: MouseEventHandler<HTMLButtonElement>; // Optional, click handler
  icon?: ReactNode; // Optional, icon to display
}

// CategoryButton component remains the same

const CategoryButton: React.FC<CategoryButtonProps> = ({ children, active, onClick, icon }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`
      flex items-center space-x-2 px-6 py-3 rounded-full
      transition-colors duration-200
      ${active 
        ? 'bg-purple-600 text-white' 
        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }
    `}
  >
    {icon}
    <span>{children}</span>
  </motion.button>
);