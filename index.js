#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

// Parse command line arguments
const args = process.argv.slice(2);
const getArgValue = (flag) => {
  const index = args.findIndex(arg => arg === flag);
  return index !== -1 && args[index + 1] ? args[index + 1] : null;
};

// Configuration from command line arguments
const config = {
  skillFilter: getArgValue('--skills') || getArgValue('-s'),
  theme: getArgValue('--theme') || getArgValue('-t') || 'default',
  compact: args.includes('--compact') || args.includes('-c'),
  showHelp: args.includes('--help') || args.includes('-h')
};

// Theme configurations
const themes = {
  default: {
    primary: 'cyan',
    secondary: 'yellow',
    accent: 'green',
    text: 'white'
  },
  dark: {
    primary: 'magenta',
    secondary: 'blue',
    accent: 'gray',
    text: 'white'
  },
  minimal: {
    primary: 'white',
    secondary: 'gray',
    accent: 'white',
    text: 'white'
  }
};

const currentTheme = themes[config.theme] || themes.default;

// Resume data
const resume = {
  name: "Nandini Maheshwari",
  title: "Full Stack Developer",
  email: "nandinim1204@gmail.com",
  phone: "+91 81xxxxxx54",
  location: "Delhi NCR, India",
  linkedin: "linkedin.com/in/nandinim04",
  github: "github.com/Nandini-Maheshwari",
  website: "coming soon",

  summary: "Full Stack Developer with experience in building scalable web applications and real-time systems. Skilled in MERN stack, cloud deployment, and API integrations. Passionate about delivering high-performance solutions and contributing to open-source projects.",

  skills: {
    languages: ["C/C++", "JavaScript/TypeScript", "Python (Learning)"],
    frontend: ["React.js", "Next.js", "React Native", "Tailwind CSS", "HTML"],
    backend: ["Node.js", "Express.js", "REST APIs", "WebRTC", "Socket.io"],
    database: ["MongoDB", "PostgreSQL (Basic)"],
    tools: ["Git", "Postman", "Docker (Basic)"],
    cloud: ["Azure", "Vercel", "AWS (Learning)"]
  },

  experience: [
    {
      company: "Aum Group",
      position: "Full Stack Developer Intern",
      duration: "Aug. 2025 – Present",
      description: "Architected backend microservices with Node.js & MongoDB (500+ concurrent users). Built real-time analytics with React & Socket.io, reducing refresh latency from 30s to 2s. Automated API testing pipeline achieving 90% coverage. Delivered features 20% faster in agile team."
    },
    {
      company: "Icon Consulting Group",
      position: "Frontend Developer Freelance",
      duration: "Oct. 2024 – Nov. 2024",
      description: "Converted Figma designs into responsive React apps with 100% fidelity. Optimized performance via code splitting & lazy loading (15% faster). Delivered milestones 2 weeks early."
    },
    {
      company: "Corazor Technology Pvt Ltd",
      position: "Full Stack Developer Intern",
      duration: "May 2024 – July 2024",
      description: "Developed UI for 4 React/React Native apps. Integrated 15+ REST APIs for authentication & real-time sync. Shipped apps within agile sprint cycles."
    }
  ],

  education: [
    {
      institution: "KIET Group Of Institutions (AKTU)",
      degree: "B.Tech in Computer Science & Engineering",
      year: "Nov. 2021 – May 2025"
    }
  ],

  projects: [
    {
      name: "Griz - AI Therapist",
      description: "AI-powered mental health platform with Hugging Face API. Secure JWT auth & bcrypt.",
      tech: "MERN Stack, Hugging Face API"
    },
    {
      name: "Chatly - WebRTC Project",
      description: "Peer-to-peer video calling app to master WebRTC. Signaling server with Socket.io. Intuitive UI with camera/mic controls & connection indicators.",
      tech: "WebRTC, Socket.io, P2P"
    },
    {
      name: "DevTube - Video Streaming Backend",
      description: "RESTful API for video streaming platform. User auth, content management, subscriptions. Optimized MongoDB queries (20% faster). Cloudinary uploads & validation.",
      tech: "Node.js, Express.js, MongoDB"
    }
  ],

  achievements: [
    {
      title: "NASA Space Apps Challenge (Global Nominee)",
      description: "Selected among 47,000+ participants worldwide for innovative space tech solution (2022)."
    },
    {
      title: "Open Source Contributions",
      description: "Contributed to 5+ projects with 10+ PRs merged (SSOC 2023, Hacktoberfest 2022)."
    }
  ],

  certifications: [
    "Postman API Fundamentals Student Expert (Feb 2024)",
    "Azure Cloud Native Technologies (Mar 2024)"
  ]
};

// Help function
function showHelp() {
  console.log(chalk.bold.cyan('Nandini Maheshwari - Resume Package'));
  console.log(chalk.yellow('\nUsage: npx @nandinim04 [options]'));
  console.log('\nOptions:');
  console.log('  -s, --skills <category>    Filter skills by category (frontend, backend, database, tools, cloud, languages)');
  console.log('  -t, --theme <name>         Choose theme (default, dark, minimal)');
  console.log('  -c, --compact              Show compact version');
  console.log('  -h, --help                 Show this help message');
  console.log('\nExamples:');
  console.log('  npx @nandinim04 --skills backend');
  console.log('  npx @nandinim04 --theme dark');
  console.log('  npx @nandinim04 --compact');
  console.log('  npx @nandinim04 --skills frontend --theme minimal');
}

// Formatting functions
function formatHeader() {
  const header = `${chalk.bold[currentTheme.primary](resume.name)}
  ${chalk[currentTheme.secondary](resume.title)}

  📧 ${resume.email}
  📱 ${resume.phone}
  📍 ${resume.location}
  💼 ${resume.linkedin}
  🌐 ${resume.github}
  🔗 ${resume.website}`;

  return boxen(header, {
    padding: config.compact ? 0 : 1,
    margin: config.compact ? 0 : 1,
    borderStyle: 'double',
    borderColor: currentTheme.primary
  });
}

function formatSection(title, content) {
  const separator = config.compact ? '─'.repeat(30) : '═'.repeat(50);
  return `\n${chalk.bold[currentTheme.secondary](separator)}
${chalk.bold[currentTheme.secondary](title.toUpperCase())}
${chalk.bold[currentTheme.secondary](separator)}

${content}`;
}

function formatSummary() {
  return chalk[currentTheme.text](resume.summary);
}

function formatSkills() {
  // Dynamic skills filtering based on command line arguments
  if (config.skillFilter) {
    const category = config.skillFilter.toLowerCase();
    const skillsToShow = resume.skills[category];
    
    if (!skillsToShow) {
      return chalk.red(`❌ Category "${category}" not found. Available: ${Object.keys(resume.skills).join(', ')}`);
    }
    
    return `${chalk.bold[currentTheme.accent](`${category.toUpperCase()} SKILLS:`)}
${skillsToShow.map(skill => chalk[currentTheme.accent](`▪ ${skill}`)).join('\n')}

${chalk.dim('💡 Tip: Use --skills <category> to filter other skill categories')}
${chalk.dim('Available categories: ' + Object.keys(resume.skills).join(', '))}`;
  }

  // Show all skills grouped by category
  return Object.entries(resume.skills).map(([category, skills]) => {
    return `${chalk.bold[currentTheme.accent](category.toUpperCase() + ':')}
${skills.map(skill => chalk[currentTheme.accent](`▪ ${skill}`)).join('\n')}`;
  }).join('\n\n');
}

function formatExperience() {
  return resume.experience.map((job, index) => {
    const content = `${chalk.bold[currentTheme.secondary](job.company)} - ${chalk.bold[currentTheme.text](job.position)}
${chalk.dim(job.duration)}
${chalk[currentTheme.text](job.description)}`;

    return config.compact && index > 1 ? '' : content;
  }).filter(Boolean).join('\n\n');
}

function formatEducation() {
  return resume.education.map(edu => {
    return `${chalk.bold[currentTheme.secondary](edu.institution)}
${chalk[currentTheme.text](edu.degree)} - ${chalk.dim(edu.year)}`;
  }).join('\n\n');
}

function formatProjects() {
  const projectsToShow = config.compact ? resume.projects.slice(0, 1) : resume.projects;
  
  return projectsToShow.map(project => {
    return `${chalk.bold[currentTheme.secondary](project.name)}
${chalk[currentTheme.text](project.description)}
${chalk.dim('Tech: ' + project.tech)}`;
  }).join('\n\n');
}

function formatAchievements() {
  const achievementsToShow = config.compact ? resume.achievements.slice(0, 1) : resume.achievements;
  
  return achievementsToShow.map(ach => {
    return `${chalk.bold[currentTheme.secondary](ach.title)}
${chalk[currentTheme.text](ach.description)}`;
  }).join('\n\n');
}

function formatCertifications() {
  const certsToShow = config.compact ? resume.certifications.slice(0, 1) : resume.certifications;
  
  return certsToShow.map(cert => chalk[currentTheme.accent](`▪ ${cert}`)).join('\n');
}

function formatFooter() {
  const footer = `${chalk.bold[currentTheme.primary]('Thanks for checking out my resume!')}
${chalk.dim('Run')} ${chalk[currentTheme.primary]('npm install -g @nandinim04')} ${chalk.dim('to install globally')}
${chalk.dim('Theme:')} ${chalk[currentTheme.secondary](config.theme)} ${chalk.dim('| Use --help for more options')}
${chalk.dim('Connect with me:')} ${chalk[currentTheme.secondary]('nandinim1204@gmail.com')}`;

  return boxen(footer, {
    padding: config.compact ? 0 : 1,
    margin: config.compact ? 0 : 1,
    borderStyle: 'single',
    borderColor: currentTheme.primary,
    textAlignment: 'center'
  });
}


// Main function to display resume
function displayResume() {
  console.clear();

  // Show help if requested
  if (config.showHelp) {
    showHelp();
    return;
  }

  console.log(formatHeader());
  console.log(formatSection('Summary', formatSummary()));
  console.log(formatSection('Skills', formatSkills()));
  
  // Show other sections unless compact mode with skills filter
  if (!config.compact || !config.skillFilter) {
    console.log(formatSection('Experience', formatExperience()));
    console.log(formatSection('Education', formatEducation()));
    console.log(formatSection('Projects', formatProjects()));
    console.log(formatSection('Achievements', formatAchievements()));
    console.log(formatSection('Certifications', formatCertifications()));
  }
  
  console.log(formatFooter());
}

displayResume();
