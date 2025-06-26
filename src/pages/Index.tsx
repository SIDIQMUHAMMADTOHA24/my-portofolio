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
    technical: ['Dart', 'Flutter', 'Golang', 'Java', 'HTML/CSS', 'REST API', 'Firebase', 'MySQL'],
    tools: ['Android Studio', 'Git', 'Docker', 'CI/CD', 'Burp Suite', 'JMeter'],
    architecture: ['Clean Architecture', 'MVC Pattern', 'State Management (BLoC)', 'Responsive Design']
  };

  const projects = [
    {
      title: 'Oltime Network',
      description: 'Cross-platform mobile application connecting job seekers with recruitment agencies in the US market. Successfully published to both App Store and Play Store.',
      tech: ['Flutter', 'Dart', 'Firebase', 'REST API', 'State Management'],
      type: 'Mobile App'
    },
    {
      title: 'CA Repository',
      description: 'Web platform for displaying CA documents and certificates from EJBCA, providing efficient access to Certificate Authority repositories.',
      tech: ['Flutter Web', 'EJBCA Integration', 'Document Management'],
      type: 'Web Application'
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
    }
  ];

  const certifications = [
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
    <div className="min-h-screen bg-white">
      {/* Navigation - Apple style */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-semibold text-lg text-gray-900">SMT</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100">
            <div className="px-6 pt-4 pb-6 space-y-2">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 rounded-lg hover:bg-gray-50"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Apple style */}
      <section id="home" className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="mb-12">
                <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/8418aaaa-30e3-4c93-ab70-05528f31419f.png" 
                    alt="Sidiq Muhammad Toha"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-5xl md:text-6xl font-semibold mb-4 text-gray-900 tracking-tight">
                  Sidiq Muhammad Toha
                </h1>
                <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-light">Flutter Developer</p>
                <p className="text-lg text-gray-500 flex items-center justify-center gap-2">
                  <MapPin size={18} />
                  Yogyakarta, Indonesia
                </p>
              </div>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                Software Developer with experience developing web and mobile applications using Flutter and Dart. 
                Contribute to improving system efficiency and security through CI/CD implementation and vulnerability testing.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="mr-2" size={18} />
                  Get In Touch
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full font-medium"
                >
                  <Download className="mr-2" size={18} />
                  Download CV
                </Button>
              </div>

              <div className="flex justify-center space-x-8">
                <a href="mailto:sidiqtoha2000@gmail.com" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Mail size={24} />
                </a>
                <a href="tel:+6283104846474" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Phone size={24} />
                </a>
                <a href="https://linkedin.com/in/sidiq-muhammad-toha" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/sidiqmuhammadtoha24" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-20">
          <ChevronDown className="animate-bounce text-gray-400 mx-auto" size={32} />
        </div>
      </section>

      {/* About Section - Apple style */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Passionate about creating innovative mobile and web solutions with a focus on clean architecture and user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Development</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Specialized in Flutter cross-platform development with published apps on both App Store and Play Store.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Building responsive web applications and backend systems with modern technologies and best practices.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">System Security</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Experienced in security testing, vulnerability assessment, and implementing CI/CD pipelines for secure deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Apple style */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">Experience</h2>
            <p className="text-xl text-gray-600 font-light">My professional journey in software development</p>
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{exp.role}</h3>
                    <p className="text-lg font-medium text-blue-600">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Calendar size={16} />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Apple style */}
      <section id="skills" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">Skills & Technologies</h2>
            <p className="text-xl text-gray-600 font-light">My technical expertise and tools</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.technical.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((tool, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Architecture & Patterns</h3>
              <div className="flex flex-wrap gap-3">
                {skills.architecture.map((arch, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {arch}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Apple style */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">Featured Projects</h2>
            <p className="text-xl text-gray-600 font-light">Some of my notable work and achievements</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                  <ExternalLink className="text-gray-400 group-hover:text-blue-600 transition-colors" size={20} />
                </div>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section - Apple style */}
      <section id="certifications" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">Certifications</h2>
            <p className="text-xl text-gray-600 font-light">Professional development and continuous learning</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 leading-tight mb-3">
                  {cert.name}
                </h3>
                <p className="text-gray-600 font-medium mb-1">{cert.org}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Apple style */}
      <section id="contact" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">Let's Work Together</h2>
          <p className="text-xl mb-16 opacity-80 font-light leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:sidiqtoha2000@gmail.com" className="opacity-80 hover:opacity-100 transition-opacity font-light">
                sidiqtoha2000@gmail.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+6283104846474" className="opacity-80 hover:opacity-100 transition-opacity font-light">
                +62 831-0484-6474
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="opacity-80 font-light">Yogyakarta, Indonesia</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/sidiq-muhammad-toha" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/sidiqmuhammadtoha24" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <Github size={20} />
            </a>
            <a href="mailto:sidiqtoha2000@gmail.com" 
               className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Apple style */}
      <footer className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 font-light">
            © 2024 Sidiq Muhammad Toha. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 font-light">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
