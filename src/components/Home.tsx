import React from 'react';
import { 
  GraduationCap,
  Code,
  ChevronDown,
} from 'lucide-react';
import profileImage from '../assets/profile.jpg'; // Import the image

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400 dark:from-amber-400 dark:to-yellow-300">
                  Ragiliawan Putra Rencana
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                An informatics student who is passionate and curious about technology and software development.
              </p>
            </div>
            
            <div className="prose prose-lg text-gray-500 dark:text-gray-400 space-y-4">
              <p>
                Welcome to my portfolio! I'm currently studying Informatics Engineering at Politeknik Negeri Jakarta, 
                where I'm building my foundation in computer science and software development. I love exploring new 
                technologies, solving complex problems, and creating innovative solutions that make a difference.
              </p>
              <p>
                My journey in technology is driven by curiosity and a desire to continuously learn and grow. 
                I believe that great software is built through understanding both the technical challenges and 
                the human needs behind every project.
              </p>
            </div>

            <div className="pt-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="text-amber-500 dark:text-amber-400" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">Politeknik Negeri Jakarta</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="text-amber-500 dark:text-amber-400" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">Informatics Engineering</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center animate-fade-in-right">
            <div className="relative group">
              <div className="w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-300/10 dark:from-amber-400/20 dark:to-yellow-300/20 rounded-full flex items-center justify-center shadow-2xl border border-amber-400/20 dark:border-amber-400/30 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-amber-400/50 dark:group-hover:shadow-amber-400/20">
                <img 
                  src={profileImage} 
                  alt="Ragiliawan Putra Rencana" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Code size={32} className="text-gray-900" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-amber-500 dark:text-amber-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Home; 