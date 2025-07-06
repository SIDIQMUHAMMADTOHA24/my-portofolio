
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Calendar,
  Award,
  Code,
  Smartphone,
  Globe,
  Download,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    technical: ['Dart', 'Flutter', 'Golang', 'Java', 'HTML/CSS', 'REST API', 'Firebase', 'MySQL', 'Gradle'],
    tools: ['Android Studio', 'Git', 'Docker', 'CI/CD', 'Burp Suite', 'JMeter', 'Ms.Word'],
    architecture: ['Clean Architecture', 'MVC Pattern', 'MVVM Pattern', 'State Management (BLoC, Provider, GetX)', 'Responsive Design']
  };

  const projects = [
    {
      title: 'Siqma Field',
      description: 'A reusable and secure form field widget with customizable design and input sanitization. Published to pub.dev and available as an open-source Flutter package.',
      tech: ['Flutter', 'Dart'],
      type: 'Packages',
      gradient: 'gradient-blue',
      src: 'https://pub.dev/packages/siqma_field'
    },
    {
      title: 'Oltime Network',
      description: 'Cross-platform mobile application connecting job seekers with recruitment agencies in the US market. Successfully published to both App Store and Play Store.',
      tech: ['Flutter', 'Dart', 'Firebase', 'REST API', 'State Management'],
      type: 'Mobile App',
      gradient: 'gradient-purple',
      src: 'https://apps.apple.com/id/app/oltime-network/id6476977843'
    },
    {
      title: 'CA Repository',
      description: 'Web platform for displaying CA documents and certificates from EJBCA, providing efficient access to Certificate Authority repositories.',
      tech: ['Flutter Web', 'EJBCA Integration', 'Document Management'],
      type: 'Web Application',
      gradient: 'gradient-blue',
      src: 'https://repository.enkripa.id/'
    }
  ];

  const experience = [
    {
      company: 'PT Enkripa Teknologi Indonesia',
      role: 'Fulltime Software Developer',
      period: 'Aug 2024 – May 2025',
      location: 'Jakarta Selatan',
      achievements: [
        'Developed and launched websites and backend systems using Flutter, significantly improving internal company efficiency',
        'Strengthened system security by resolving bugs identified in penetration testing',
        'Streamlined deployment processes with CI/CD pipelines on Ubuntu and Windows Server VMs',
        'Enhanced application security through thorough testing with Burp Suite and JMeter'
      ]
    },
    {
      company: 'PT Nordspec Mandala Persada',
      role: 'Fulltime Mobile Developer Flutter',
      period: 'Jan 2024 – Dec 2024',
      location: 'Yogyakarta',
      achievements: [
        'Elevated user experience by integrating push notifications and real-time Firebase updates',
        'Optimized app performance by reducing loading times and improving responsiveness',
        'Improved memory and energy efficiency for smoother user experience',
        'Built and deployed Flutter-based website and app to both App Store and Play Store'
      ]
    },
    {
      company: 'CV Karya Hidup Sentosa',
      role: 'Fulltime Warehouse Admin',
      period: 'Jul 2022 - Sep 2023',
      location: 'Yogyakarta',
      achievements: [
        'Enhanced warehouse efficiency by optimizing delivery and request-handling processes, noticeably reducing turnaround times.',
        'Supported loading and unloading operations by coordinating material handling with forklift (CAT GP20-35N, CAT DP20-35N3, Toyota 62-8FD30 certified), ensuring timely and accurate delivery of goods to meet operational schedules.',
        'Ensured inventory accuracy by meticulously tracking incoming and outgoing goods using Oracle E-Bussines Suite Applications, aligning stock quantities with documentation and minimizing discrepancies.',
        'Optimized delivery processes by streamlining request handling and stock reporting, reducing turnaround times and supporting on-time Proof of Delivery (POD) submission.',
        'Adhered to warehouse safety standards by consistently using Personal Protective Equipment (APD) and following operational protocols, contributing to a secure working environment.',
        'Demonstrated strong communication and responsibility by collaborating with teams to maintain operational efficiency and resolve discrepancies promptly.'
      ]
    },
    {
      company: 'Kopi Westprog',
      role: 'Partime Cashier & Waiters',
      period: 'Apr 2021 - Jul 2022',
      location: 'Yogyakarta',
      achievements: [
        'Accelerated beverage production speed, cutting down processing time and improving service flow.',
        'Boosted customer satisfaction and loyalty, as shown by a noticeable increase in repeat visits.'
      ]
    },
    {
      company: 'Kecamatan Minggir',
      role: 'Internship Civil Service Staff',
      period: 'Feb 2021 - Apr 2021',
      location: 'Yogyakarta',
      achievements: [
        'Streamlined personnel reporting by compiling and submitting accurate reports to district and higher authorities on time.',
        'Improved administrative processes by maintaining employee records, attendance lists, and correspondence with full compliance.',
        'Organized personnel archives per regulatory standards, ensuring efficient data retrieval and management.'
      ]
    }
  ];

  const certifications = [
    { name: 'Standar Menajemen Resiko - ISO 31000', org: 'PT. Inspirasi Duta Energi Abadi', date: 'May 2025' },
    { name: 'Environment Management System - ISO 14001', org: 'PT. Inspirasi Duta Energi Abadi', date: 'May 2025' },
    { name: 'Quality Management System - ISO 9001', org: 'PT. Inspirasi Duta Energi Abadi', date: 'May 2025' },
    { name: 'Safety Management System - ISO 45001', org: 'PT. Inspirasi Duta Energi Abadi', date: 'May 2025' },
    { name: 'Information Security Management System - ISO/IEC 27001:2022', org: 'CBQA Global', date: 'Aug 2024' },
    { name: 'Personal Data Protection Law No.27/2022', org: 'CBQA Global', date: 'Nov 2024' },
    { name: 'Project Based Internship Mobile Developer Bank Mandiri', org: 'Rakamin Academy & Mandiri', date: 'Nov 2023' },
    { name: 'Flutter & Dart - The Complete Guide', org: 'Udemy', date: 'May 2023' },
    { name: 'State Management Bloc Flutter', org: 'Udemy', date: 'May 2023' }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation - Modern Dark */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-white">SMT</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-gray-800">
            <div className="px-6 pt-4 pb-6 space-y-2">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-purple-400 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Modern Dark with Gradient */}
      <section id="home" className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="mb-12">
                <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl glow-effect">
                  <img 
                    src="/lovable-uploads/8418aaaa-30e3-4c93-ab70-05528f31419f.png" 
                    alt="Sidiq Muhammad Toha"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                  Sidiq Muhammad Toha
                </h1>
                <p className="text-3xl md:text-4xl text-gradient mb-6 font-semibold">Flutter Developer</p>
                <p className="text-lg text-gray-400 flex items-center justify-center gap-2">
                  <MapPin size={18} />
                  Yogyakarta, Indonesia
                </p>
              </div>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                Software Developer with experience developing web and mobile applications using Flutter and Dart. 
                Contribute to improving system efficiency and security through CI/CD implementation and vulnerability testing.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="mr-2" size={18} />
                  Get In Touch
                </Button>
                <Button 
                  size="lg" 
                  className="bg-gray-800 border-2 border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600 px-8 py-4 rounded-xl font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://sidiqmuhammadtoha24.github.io/CV/SidiqMuhammadTohaCV.pdf', '_blank')}
                >
                  <Download className="mr-2" size={18} />
                  Download CV
                </Button>
              </div>

              <div className="flex justify-center space-x-8">
                <a href="mailto:sidiqtoha2000@gmail.com" className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110">
                  <Mail size={28} />
                </a>
                <a href="tel:+6283104846474" className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110">
                  <Phone size={28} />
                </a>
                <a href="https://www.linkedin.com/in/sidiq-muhammad-toha-60747a1b7/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110">
                  <Linkedin size={28} />
                </a>
                <a href="https://github.com/sidiqmuhammadtoha24" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110">
                  <Github size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-20">
          <ChevronDown className="animate-bounce text-purple-400 mx-auto" size={32} />
        </div>
      </section>

      {/* About Section - Dark Cards */}
      <section id="about" className="py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative mobile and web solutions with a focus on clean architecture and user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-3xl p-8 card-hover border border-gray-700">
              <div className="w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Specialized in Flutter cross-platform development with published apps on both App Store and Play Store.
              </p>
            </div>

            <div className="bg-gray-800 rounded-3xl p-8 card-hover border border-gray-700">
              <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Building responsive web applications and backend systems with modern technologies and best practices.
              </p>
            </div>

            <div className="bg-gray-800 rounded-3xl p-8 card-hover border border-gray-700">
              <div className="w-16 h-16 gradient-pink rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">System Security</h3>
              <p className="text-gray-300 leading-relaxed">
                Experienced in security testing, vulnerability assessment, and implementing CI/CD pipelines for secure deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Experience</h2>
            <p className="text-xl text-gray-300">My professional journey in software development</p>
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-800 rounded-3xl p-8 card-hover border border-gray-700">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-lg font-semibold text-purple-400">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-300 mb-1">
                      <Calendar size={16} />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="text-gray-300 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Skills & Technologies</h2>
            <p className="text-xl text-gray-300">My technical expertise and tools</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-3xl p-8 card-hover border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.technical.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium hover:bg-purple-500 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-3xl p-8 card-hover border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((tool, index) => (
                  <span key={index} className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-500 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-3xl p-8 card-hover border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Architecture & Patterns</h3>
              <div className="flex flex-wrap gap-3">
                {skills.architecture.map((arch, index) => (
                  <span key={index} className="px-4 py-2 bg-pink-600 text-white rounded-full text-sm font-medium hover:bg-pink-500 transition-colors">
                    {arch}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Featured Projects</h2>
            <p className="text-xl text-gray-300">Some of my notable work and achievements</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-3xl p-8 card-hover border border-gray-700 group">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 ${project.gradient} text-white rounded-full text-sm font-medium`}>
                      {project.type}
                    </span>
                  </div>
                    <a 
                      href={project.src}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink
                          className="text-gray-400 group-hover:text-purple-400 transition-colors"
                          size={20}
                        />
                    </a>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Certifications</h2>
            <p className="text-xl text-gray-300">Professional development and continuous learning</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 rounded-3xl p-6 card-hover border border-gray-700">
                <div className="w-12 h-12 gradient-orange rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white leading-tight mb-3">
                  {cert.name}
                </h3>
                <p className="text-purple-400 font-medium mb-1">{cert.org}</p>
                <p className="text-gray-400 text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Let's Work Together</h2>
          <p className="text-xl mb-16 text-gray-300 leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Email</h3>
              <a href="mailto:sidiqtoha2000@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                sidiqtoha2000@gmail.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Phone</h3>
              <a href="tel:+6283104846474" className="text-gray-300 hover:text-purple-400 transition-colors">
                +62 831-0484-6474
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Location</h3>
              <p className="text-gray-300">Yogyakarta, Indonesia</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/sidiq-muhammad-toha-60747a1b7/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-14 h-14 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <Linkedin size={24} className="text-white" />
            </a>
            <a href="https://github.com/sidiqmuhammadtoha24" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-14 h-14 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <Github size={24} className="text-white" />
            </a>
            <a href="mailto:sidiqtoha2000@gmail.com" 
               className="w-14 h-14 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <Mail size={24} className="text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Sidiq Muhammad Toha. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
