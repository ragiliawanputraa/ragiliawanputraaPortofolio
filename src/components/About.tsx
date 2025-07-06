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
          <div className="bg-white dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-amber-500/50 dark:hover:border-amber-400/30 transition-all duration-300 animate-fade-in-up max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <GraduationCap className="mr-3 text-amber-500 dark:text-amber-400" size={28} />
              Educational Background
            </h3>
            <div className="relative border-l-4 border-amber-500 dark:border-amber-400 pl-6 space-y-8">
              {/* Education Entry 1: Senior High School */}
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Senior High School 11 Bekasi</h4>
                    <p className="text-gray-600 dark:text-gray-300">High School in Mathematic and Natural Sciences</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Focused on a strong foundation in science and mathematics, preparing for higher education.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-300">Bekasi City, West Java</p>
                    <p className="text-amber-500 dark:text-amber-400 font-medium">Aug. 2019 – 2022</p>
                  </div>
                </div>
              </div>

              {/* Education Entry 2: State Polytechnic Of Jakarta */}
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">State Polytechnic Of Jakarta</h4>
                    <p className="text-gray-600 dark:text-gray-300">Diploma IV in Informatics Engineering</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Developing expertise in software development, data structures, and algorithms.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-300">Depok, West Java</p>
                    <p className="text-amber-500 dark:text-amber-400 font-medium">2022 – Present</p>
                  </div>
                </div>
              </div>

              {/* Education Entry 3: CEP CCIT-FTUI */}
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">CEP CCIT-FTUI</h4>
                    <p className="text-gray-600 dark:text-gray-300">Certification in Software Engineering</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Acquired industry-recognized skills in software engineering fundamentals and best practices.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-300">Depok, West Java</p>
                    <p className="text-amber-500 dark:text-amber-400 font-medium">2022 – 2024</p>
                  </div>
                </div>
              </div>

              {/* Education Entry 4: LBPP LIA GALAXY */}
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">LBPP LIA GALAXY</h4>
                    <p className="text-gray-600 dark:text-gray-300">General English and English for Specific Purposes</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Developed comprehensive English language skills for academic and professional contexts.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-300">Bekasi, West Java</p>
                    <p className="text-amber-500 dark:text-amber-400 font-medium">2019 – 2021</p>
                  </div>
                </div>
              </div>

              {/* Education Entry 5: Studi Independen Bangkit Academy 2024 */}
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Studi Independen Bangkit Academy 2024</h4>
                    <p className="text-gray-600 dark:text-gray-300">Mobile Development, Android Learning Path</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Intensive program focusing on mobile application development using Android technologies.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-300">September. 2024 – January 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Get me more better */}
          <div className="bg-white dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-amber-500/50 dark:hover:border-amber-400/30 transition-all duration-300 animate-fade-in-up max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <Code className="mr-3 text-amber-500 dark:text-amber-400" size={28} />
              Get to know me more !
            </h3>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                Hi, I'm Ragiliawan Putra Rencana — an Informatics Engineering student at Politeknik Negeri Jakarta with a strong interest in technology, especially in software development and exploring the world of Machine Learning.
              </p>
              <p>
                Throughout my studies, I've been actively learning and working on various things — from frontend and backend development to integrating machine learning models into real web applications. I also keep up with modern web trends, using technologies like React, TypeScript, and Tailwind CSS to build clean and responsive user interfaces.
              </p>
              <p>
                For me, technology isn't just about coding or tools — it's about creating real solutions that are useful and impactful. I enjoy solving problems, learning new things, and constantly exploring how systems work behind the scenes.
              </p>
              <p>
                Feel free to explore my website — you'll find some of the projects and experiences I've worked on here. Who knows, maybe there's something that sparks your interest, or even opens the door to a future collaboration!
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-amber-500/50 dark:hover:border-amber-400/30 transition-all duration-300 animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">My Technical Skills and My Tools Here !</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Python', 'SQL', 'JavaScript', 'HTML/CSS', 'R', 'Kotlin'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-400/20 dark:text-amber-400 rounded-full text-sm border border-amber-200 dark:border-amber-400/30 hover:bg-amber-200 dark:hover:bg-amber-400/30 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {['JUnit', 'WordPress', 'Hibernate', 'Php Native', 'Php Laravel', 'ReactJS', 'NodeJS', 'ReactTS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-400/20 dark:text-green-400 rounded-full text-sm border border-green-200 dark:border-green-400/30 hover:bg-green-200 dark:hover:bg-green-400/30 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Developer Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'VS Code', 'Visual Studio', 'Cursor', 'Google Firebase', 'Google Cloud', 'Vercel Host', 'Android Studio', 'Figma'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-400/20 dark:text-purple-400 rounded-full text-sm border border-purple-200 dark:border-purple-400/30 hover:bg-purple-200 dark:hover:bg-purple-400/30 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  {['JQuery', 'NumPy', 'Blackbox Testing', 'Whitebox Testing', 'Pandas'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-400/20 dark:text-blue-400 rounded-full text-sm border border-blue-200 dark:border-blue-400/30 hover:bg-blue-200 dark:hover:bg-blue-400/30 transition-colors duration-200">
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