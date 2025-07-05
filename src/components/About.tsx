import React from 'react';
import { 
  GraduationCap,
  Code,
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 dark:bg-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Get to know me better</p>
        </div>

        <div className="space-y-12">
          {/* Educational Background */}
          <div className="bg-white dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-amber-500/50 dark:hover:border-amber-400/30 transition-all duration-300 animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <GraduationCap className="mr-3 text-amber-500 dark:text-amber-400" size={28} />
              Educational Background
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 dark:border-amber-400 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Informatics Engineering</h4>
                <p className="text-amber-500 dark:text-amber-400 font-medium">State Polytechnic of Jakarta</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Currently pursuing my degree in Informatics Engineering, where I'm developing a strong foundation 
                  in computer science principles, software development, and modern programming practices.
                </p>
              </div>
            </div>
          </div>

          {/* Interests & Passions */}
          <div className="bg-white dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-amber-500/50 dark:hover:border-amber-400/30 transition-all duration-300 animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <Code className="mr-3 text-amber-500 dark:text-amber-400" size={28} />
              Interests & Passions
            </h3>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                I am deeply interested in web development, especially using modern frameworks like React and Next.js. 
                The ability to create interactive, user-friendly applications that solve real-world problems fascinates me.
              </p>
              <p>
                I also have a growing interest in cloud computing and DevOps practices. Understanding how to build 
                scalable, maintainable systems and automate deployment processes is crucial in today's tech landscape.
              </p>
              <p>
                Beyond technical skills, I'm passionate about learning new technologies, contributing to open-source 
                projects, and staying up-to-date with industry trends. I believe that continuous learning is key to 
                success in the rapidly evolving field of technology.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-amber-500/50 dark:hover:border-amber-400/30 transition-all duration-300 animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-400/20 dark:text-amber-400 rounded-full text-sm border border-amber-200 dark:border-amber-400/30 hover:bg-amber-200 dark:hover:bg-amber-400/30 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'Java', 'SQL'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-400/20 dark:text-green-400 rounded-full text-sm border border-green-200 dark:border-green-400/30 hover:bg-green-200 dark:hover:bg-green-400/30 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Tools & Others</h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'AWS', 'Linux'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-400/20 dark:text-purple-400 rounded-full text-sm border border-purple-200 dark:border-purple-400/30 hover:bg-purple-200 dark:hover:bg-purple-400/30 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 