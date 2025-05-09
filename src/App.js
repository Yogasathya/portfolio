import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronRight, Download, ArrowUp, ExternalLink, Flame, Award, BookOpen, Code, Database, FileText, Briefcase, Zap, User, GraduationCap, Clock, CheckCircle } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative bg-gray-50 font-sans text-gray-800">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-indigo-600" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-40 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
              YR
            </div>
            <h1 className="ml-3 text-xl font-bold text-gray-800">Yogasathyandrun R</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'experience', 'skills', 'projects', 'publications', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-medium transition-colors ${
                  activeSection === section ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-500'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['home', 'about', 'experience', 'skills', 'projects', 'publications', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-medium p-2 rounded transition-colors ${
                  activeSection === section ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="mb-4">
                  <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                    Data Scientist
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                  Yogasa<span className="text-indigo-600">thyandrun</span> R
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                 Leveraging AI, data science, and full-stack development to drive impactful solutions and transform complex challenges into actionable insights
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                    Contact Me <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                 <a href="/MY_RESUME.pdf"     
                  download                      
                  className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
                  >
                  Download CV
                  <Download className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/Yogasathya" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com/in/yogasathyandrun" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:sathyayoga559@gmail.com" className="text-gray-700 hover:text-indigo-600 transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
             <div className="order-1 md:order-2 flex justify-center">
  <div className="relative">
    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl bg-indigo-100 flex items-center justify-center">
      <img
        src="/MY_IMG.jpg" // 👉 Replace with your actual image path
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
      <div className="text-gray-800 font-medium flex items-center">
        <MapPin className="w-4 h-4 mr-1 text-indigo-600" />
        Chennai, India
      </div>
    </div>
  </div>
</div>

            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <User className="w-6 h-6 mr-2 text-indigo-600" />
                  Professional Summary
                </h3>
                <p className="text-gray-700 mb-4">
                  AI and Data Science student with expertise in machine learning, 
                  data modeling, statistical analysis, predictive analytics, and data visualization.
                </p>
                <p className="text-gray-700">
                   Proficient in Python, SQL, and Java, with a strong 
                   interest for applying AI and NLP techniques to solve complex 
                   business problems and contribute to data-driven decision-making
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-indigo-600" />
                  Education
                </h3>
                <div className="mb-6">
                  <div className="text-xl font-semibold">B.Tech in Artificial Intelligence and Data Science</div>
                  <div className="text-gray-600">Panimalar Engineering College, Chennai, India</div>
                  <div className="flex items-center text-gray-500 mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    <span> October 2022 – Present | CGPA: 8.40 (up to 5th semester)</span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-xl font-semibold">Higher Secondary (Class XII)</div>
                  <div className="text-gray-600">Narayana E-Techno School, Chennai, India</div>
                  <div className="flex items-center text-gray-500 mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    <span> June 2021 – February 2022 | 87% (CBSE Board)</span>
                  </div>
                </div>
                <div>
                  <div className="text-xl font-semibold"> Secondary (Class X)</div>
                  <div className="text-gray-600">Narayana E-Techno School, Chennai, India</div>
                  <div className="flex items-center text-gray-500 mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    <span> June 2019 – April 2020 | 90.2% (CBSE Board)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="relative pl-8 border-l-2 border-indigo-200">
                {/* Job 1 */}
                <div className="mb-12 relative">
                  <div className="absolute -left-[25px] w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg ml-6">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold"> Data Science Intern</h3>
                        <p className="text-indigo-600">Unified Mentor Pvt Ltd, Gurugram, India</p>
                      </div>
                      <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded text-sm">
                        June 2024 – July 2024
                      </div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Applied data preprocessing techniques including feature scaling, encoding, 
                          and data transformation to ensure 100% of high-quality 
                          data for analysis.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Built predictive models using Scikit-learn and TensorFlow, resulting
                          in a 15% improvement in model performance compared to baseline models</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Technical Skills */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Code className="w-6 h-6 mr-2 text-indigo-600" />
                  Programming
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Python</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Java</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">SQL</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">JavaScript</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                     <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">PHP</span>
                      <span>70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Data Science Skills */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Database className="w-6 h-6 mr-2 text-indigo-600" />
                  Web Development
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">HTML</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">CSS</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">React</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tools & Frameworks */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-indigo-600" />
                  Machine Learning & AI
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Machine Learning (ML)</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Prompt Engineering</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Data Preprocessing</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Cloud Platforms */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Database className="w-6 h-6 mr-2 text-indigo-600" />
                   Tools & Platforms
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Jupyter Notebook</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Git</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">CI/CD</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Certifications */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-indigo-600" />
                  Certifications
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    <span> Oracle Cloud Infrastructure Generative 
                      AI Certified Professional |
                       Oracle Corporation, July 2024</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    <span>Acquiring Data Certification 
                      | Futureskills, June 2024 
                      | Gold-certified, Score: 84%</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-15 h-15 mr-2 text-green-500" />
                    <span> Cybersecurity Fundamentals Certification | Futureskills, November 2023 | Silver-certified, Score: 64.5%</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    <span> Python Programming Essentials
                      Infosys Springboard, April 2024</span>
                  </li>
                    <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    <span>  Foundations of Data Science
                      Infosys Springboard, April 2024</span>
                  </li>
                </ul>
              </div>
              
              {/* Achievements */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Flame className="w-6 h-6 mr-2 text-indigo-600" />
                  Achievements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Award className="w-5 h-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Hack-Overflow 2.0 | Participant, March 2024 Pillai HOC College, Mumbai</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Created a highly efficient transportation app using Python and GUI, 
                      integrating live map tracking and real-time fare calculation,improving user engagement by 40%.</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Optimized backend algorithms to reduce data processing latency by 
                      25%, resulting in faster response times and improved user experience.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="h-48 bg-indigo-100 flex items-center justify-center">
                  <Database className="w-16 h-16 text-indigo-500" />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      WEB DEVELOPMENT
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Consultancy Website for Maverick Nest</h3>
                  <p className="text-gray-600 mb-4">
 Engineered a consultancy website using HTML, CSS, JavaScript, and 
PHP, delivering a seamless user experience that increased client 
engagement by 40%.
<br></br>
<br></br>
 Incorporated PHP/MySQL for content management, enhancing 
website functionality and enabling real-time data updates, resulting 
in a 25% improvement in operational efficiency.
                  </p>
                  <div className="flex space-x-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">HTML</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">CSS</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">JAVASCRIPT</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">PHP</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">MYSQL</span>
                  </div>
                  <div className="flex space-x-2">
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                      Demo <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                    
                  </div>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="h-48 bg-purple-100 flex items-center justify-center">
                  <Database className="w-16 h-16 text-purple-500" />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                       WEB DEVELOPMENT
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">College Aptitude Software</h3>
                  <p className="text-gray-600 mb-4">
                      Designed an interactive aptitude software with an integrated 
programming language compiler using HTML, CSS, JavaScript, 
improving user engagement by 35% and reducing response time by 
20% through efficient backend optimization.
<br></br>
<br></br>
 Focused on improving user experience and system performance, 
with 75% of the project currently complete and undergoing testing.
                  </p>
                  <div className="flex space-x-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">HTML</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">CSS</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">JAVASCRIPT</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">PHP</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">MYSQL</span>
                  </div>
                  <div className="flex space-x-2">
                    <a href="https://github.com/Yogasathya/Online-Aptitude-Exam-Platform" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                      Code <Github className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <Database className="w-16 h-16 text-blue-500" />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Software Application
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Fair Fare</h3>
                  <p className="text-gray-600 mb-4">
                     Built a transparent transportation platform ensuring fair pricing 
for both customers and drivers, using real-time data and fare 
calculation, which reduced pricing disputes by 40% and improved 
customer satisfaction by 25%.
<br></br>
<br></br>
 Successfully merged a negotiation-free system that maintained fair 
profit margins for drivers, reducing customer compl
                  </p>
                  <div className="flex space-x-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Python</span>
                  </div>
                  <div className="flex space-x-2">
                 
                    <a href="https://github.com/Yogasathya/Fair_fare" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                      Code <Github className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="h-48 bg-green-100 flex items-center justify-center">
                  <Database className="w-16 h-16 text-green-500" />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      DEEP LEARNING
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Hand gesture recognition system</h3>
                  <p className="text-gray-600 mb-4">
 This project is a real-time hand gesture recognition system using 
Python, OpenCV, and MediaPipe. 
<br></br>
<br></br>
 It enables the system to recognize and track human hands, allowing 
interaction based on hand gestures — laying the foundation for 
gesture-controlled applications
                  </p>
                  <div className="flex space-x-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">PYTHON</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">OPEN-CV</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">MEDIAPIPE</span>
                  </div>
                  <div className="flex space-x-2">
                   
                    <a href="https://github.com/Yogasathya/Hand_gesture_recognition" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                      Code <Github className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project 5 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="h-48 bg-yellow-100 flex items-center justify-center">
                  <Database className="w-16 h-16 text-yellow-500" />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      MACHINE LEARNING
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2"> Phishing url detector</h3>
                  <p className="text-gray-600 mb-4">
 A Flask-based web application that detects phishing URLs using 
machine learning. 
<br></br>
<br></br>
 It extracts 15+ technical and content-based features from the given 
URL and applies a trained model to classify it as phishing or 
legitimate. Includes PCA and domain analysis for accuracy
                  </p>
                  <div className="flex space-x-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Python</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">HTML</span>
                  </div>
                  <div className="flex space-x-2">
                    
                    <a href="https://github.com/Yogasathya/Phising_url_detector" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                      Code <Github className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project 6 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="h-48 bg-pink-100 flex items-center justify-center">
                  <Database className="w-16 h-16 text-pink-500" />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                      MACHINE LEARNING
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">ADHD detection in ASD children using Handwriting analysis</h3>
                  <p className="text-gray-600 mb-4">
 A robust, GPU-powered deep learning system designed to detect 
ADHD, ASD in children by analyzing handwriting samples. 
<br></br>
<br></br>
 This project leverages ResNet50V2 with custom CNN layers and was 
inspired by the need for early, accessible, and non-invasive ADHD 
diagnosis support—especially for children with Autism Spectrum 
Disorder (ASD)
                  </p>
                  <div className="flex space-x-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Python</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">HTML</span>
                   
                  </div>
                  <div className="flex space-x-2">
  
                    <a href="https://github.com/Yogasathya/ADHD-DETECTION-IN-ASD-CHILDREN-USING-HANDWRITING-ANALYSIS" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                      Code <Github className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a href="https://github.com/Yogasathya" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                View All Projects <Github className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Publications</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Publication 1 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">ChatBot for Combating Cyberbullying: A Comprehensive Approach with AI Technologies</h3>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded text-sm">TIJER-2024</span>
                </div>
                <p className="text-gray-700 mb-4">
                  TIJER - TIJER - INTERNATIONAL RESEARCH 
JOURNAL (www.TIJER.org ), ISSN:2349-9249, Vol.11, Issue 7, page 
no.196-198, July-2024, Available 
                </p>
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-indigo-600" />
                  <a href="https://tijer.org/tijer/papers/TIJERC001026.pdf" className="text-indigo-600 hover:text-indigo-800 font-medium">Read Publication</a>
                </div>
              </div>
              
              {/* Publication 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <h3 className="text-xl font-bold"> ADHD Detection in ASD Children Using Handwriting Analysis</h3>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded text-sm">SCOPUS-2025</span>
                </div>
                <p className="text-gray-700 mb-4">
                  This study proposes a machine learning approach to detect ADHD in 
children with ASD using handwriting analysis.
<br></br>
 Features like tremors, stroke velocity, and pen pressure are extracted 
and analyzed. 
                </p>
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-indigo-600" />
                  <a className="text-indigo-600 hover:text-indigo-800 font-medium">Under Publication</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-white mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-lg text-gray-800">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-4 text-indigo-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:sathyayoga559@gmail.com" className="text-indigo-600 hover:text-indigo-800">sathyayoga559@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-4 text-indigo-600" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+917397414176" className="text-indigo-600 hover:text-indigo-800">+91 7397414176</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 mr-4 text-indigo-600" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p>Chennai, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Github className="w-6 h-6 mr-4 text-indigo-600" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a href="https://github.com/Yogasathya" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">github.com/Yogasathya</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin className="w-6 h-6 mr-4 text-indigo-600" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a href="https://linkedin.com/in/yogasathyandrun" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">linkedin.com/in/yogasathyandrun</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg text-gray-800">
                <h3 className="text-2xl font-bold mb-6">Send Message</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea id="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                  </div>
                  
                  <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                  YR
                </div>
                <h2 className="ml-3 text-xl font-bold">Yogasathyandrun R</h2>
              </div>
              <p className="text-gray-400">Data Scientist | Machine Learning Enthusiast</p>
            </div>
            
            <div className="flex space-x-6 mb-8 md:mb-0">
              <a href="https://github.com/Yogasathya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/yogasathyandrun" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:sathyayoga559@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+917397414176" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>
            
            <div>
              <p className="text-gray-400">&copy; {new Date().getFullYear()} Yogasathyandrun R. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 bg-indigo-600 hover:bg-indigo-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-opacity ${
          scrollProgress > 20 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default App;