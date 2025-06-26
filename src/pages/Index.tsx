
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-navy-900">SMT</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-navy-600 ${
                    activeSection === item.toLowerCase() ? 'text-navy-600' : 'text-slate-600'
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
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-600 hover:text-navy-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-navy-600 to-navy-800 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  SMT
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  <span className="text-gradient">Sidiq Muhammad Toha</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 mb-2">Flutter Developer</p>
                <p className="text-lg text-slate-500 flex items-center justify-center gap-2">
                  <MapPin size={20} />
                  Yogyakarta, Indonesia
                </p>
              </div>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Software Developer with experience developing web and mobile applications using Flutter and Dart. 
                Contribute to improving system efficiency and security through CI/CD implementation and vulnerability testing.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button size="lg" className="bg-navy-600 hover:bg-navy-700" onClick={() => scrollToSection('contact')}>
                  <Mail className="mr-2" size={20} />
                  Get In Touch
                </Button>
                <Button size="lg" variant="outline" className="border-navy-600 text-navy-600 hover:bg-navy-50">
                  <Download className="mr-2" size={20} />
                  Download CV
                </Button>
              </div>

              <div className="flex justify-center space-x-6">
                <a href="mailto:sidiqtoha2000@gmail.com" className="text-slate-600 hover:text-navy-600 transition-colors">
                  <Mail size={24} />
                </a>
                <a href="tel:+6283104846474" className="text-slate-600 hover:text-navy-600 transition-colors">
                  <Phone size={24} />
                </a>
                <a href="https://linkedin.com/in/sidiq-muhammad-toha" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-navy-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/sidiqmuhammadtoha24" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-navy-600 transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <ChevronDown className="animate-bounce text-slate-400 mx-auto" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">About Me</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Passionate about creating innovative mobile and web solutions with a focus on clean architecture and user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-navy-600 mx-auto mb-4" />
                <CardTitle>Mobile Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Specialized in Flutter cross-platform development with published apps on both App Store and Play Store.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-12 h-12 text-navy-600 mx-auto mb-4" />
                <CardTitle>Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Building responsive web applications and backend systems with modern technologies and best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="w-12 h-12 text-navy-600 mx-auto mb-4" />
                <CardTitle>System Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Experienced in security testing, vulnerability assessment, and implementing CI/CD pipelines for secure deployments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Experience</h2>
            <p className="text-xl text-slate-600">My professional journey in software development</p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <CardTitle className="text-xl text-navy-800">{exp.role}</CardTitle>
                      <CardDescription className="text-lg font-medium text-navy-600">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Calendar size={16} />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 mt-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-navy-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Skills & Technologies</h2>
            <p className="text-xl text-slate-600">My technical expertise and tools</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-navy-800">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-navy-100 text-navy-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-navy-800">Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <Badge key={index} variant="secondary" className="bg-navy-100 text-navy-800">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-navy-800">Architecture & Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.architecture.map((arch, index) => (
                    <Badge key={index} variant="secondary" className="bg-navy-100 text-navy-800">
                      {arch}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600">Some of my notable work and achievements</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-navy-800 group-hover:text-navy-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="mt-2">
                        {project.type}
                      </Badge>
                    </div>
                    <ExternalLink className="text-slate-400 group-hover:text-navy-600 transition-colors" size={20} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-navy-100 text-navy-800 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Certifications</h2>
            <p className="text-xl text-slate-600">Professional development and continuous learning</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Award className="w-8 h-8 text-navy-600 mb-2" />
                  <CardTitle className="text-lg text-navy-800 leading-tight">
                    {cert.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 font-medium">{cert.org}</p>
                  <p className="text-slate-500 text-sm">{cert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 gradient-bg text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 opacity-80" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:sidiqtoha2000@gmail.com" className="opacity-80 hover:opacity-100 transition-opacity">
                sidiqtoha2000@gmail.com
              </a>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 opacity-80" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+6283104846474" className="opacity-80 hover:opacity-100 transition-opacity">
                +62 831-0484-6474
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 opacity-80" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="opacity-80">Yogyakarta, Indonesia</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/sidiq-muhammad-toha" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/sidiqmuhammadtoha24" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:sidiqtoha2000@gmail.com" 
               className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="opacity-70">
            © 2024 Sidiq Muhammad Toha. All rights reserved.
          </p>
          <p className="opacity-50 text-sm mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
