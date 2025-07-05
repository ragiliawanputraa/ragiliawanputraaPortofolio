import React from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Instagram, 
} from 'lucide-react';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      name: "Email",
      value: "ragiliawanputraa@gmail.com",
      link: "mailto:ragiliawanputraa@gmail.com",
      icon: Mail,
      color: "text-red-500 dark:text-red-400"
    },
    {
        name: "Campus Email",
        value: "ragiliawan.putra.rencana.tik22@mhsw.pnj.ac.id",
        link: "mailto:ragiliawan.putra.rencana.tik22@mhsw.pnj.ac.id",
        icon: Mail,
        color: "text-red-500 dark:text-red-400"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/ragiliawanputraa",
      link: "https://linkedin.com/in/ragiliawanputraa",
      icon: Linkedin,
      color: "text-blue-500 dark:text-blue-400"
    },
    {
      name: "GitHub",
      value: "github.com/ragiliawanputraa",
      link: "https://github.com/ragiliawanputraa",
      icon: Github,
      color: "text-gray-800 dark:text-white"
    },
    {
      name: "Instagram",
      value: "@ragiliawanputra",
      link: "https://instagram.com/ragiliawanputra",
      icon: Instagram,
      color: "text-pink-500 dark:text-pink-400"
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Let's connect and collaborate</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.link}
                className="bg-gray-50 dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-gray-200 dark:border-gray-800 hover:border-amber-500/50 dark:hover:border-amber-400/30 animate-fade-in-up"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full bg-gray-200 dark:bg-gray-800 ${contact.color}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{contact.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{contact.value}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-400 dark:from-amber-400 dark:to-yellow-300 text-black rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-lg mb-6 opacity-90">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to chat about technology, feel free to reach out!
            </p>
            <a
              href="mailto:ragiliawan@example.com"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white dark:bg-black dark:text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              <Mail size={20} className="mr-2" />
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 