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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
              An Informatics Engineering student from Politeknik Negeri Jakarta who's passionate about building things with code.
              </p>
            </div>
            
            <div className="prose prose-lg text-gray-500 dark:text-gray-400 space-y-4">
              <p className="text-gray-900 dark:text-white font-bold">Welcome to my portfolio !</p>
              <p>
                I enjoy creating useful digital solutions, from designing clean interfaces to integrating machine learning into real-world applications. I'm always curious about how things work and love diving into new technologies.
              </p>
              <p>
                Feel free to explore my website to see some of the projects I've worked on!
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
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-amber-400/10 to-yellow-300/10 dark:from-amber-400/20 dark:to-yellow-300/20 rounded-full flex items-center justify-center shadow-2xl border border-amber-400/20 dark:border-amber-400/30 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-amber-400/50 dark:group-hover:shadow-amber-400/20">
                <img 
                  src={profileImage} 
                  alt="Ragiliawan Putra Rencana" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Code size={32} className="text-gray-900" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pt-20 text-center">
            <a href="#about" aria-label="Scroll to next section" className="inline-block animate-bounce cursor-pointer">
                <ChevronDown className="text-amber-500 dark:text-amber-400" size={32} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Home; 