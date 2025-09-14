# Nandini Maheshwari - Interactive Resume Package

A dynamic, feature-rich npm package that displays my professional resume with customizable themes, skill filtering, and interactive CLI options.

## 🚀 Quick Start

```bash
# View full resume
npx @nandinim04

# Filter skills by category
npx @nandinim04 --skills backend

# Try different themes
npx @nandinim04 --theme dark

# Compact mode for quick overview
npx @nandinim04 --compact

# See all available options
npx @nandinim04 --help
```

## 📦 Installation

You can also install it globally for repeated use:

```bash
npm install -g @nandinim04
resume --skills frontend --theme minimal
```

## 🎨 Features

### **Dynamic Skill Filtering**
Filter skills by specific categories:
- `--skills frontend` - React.js, Next.js, React Native, Tailwind CSS, HTML
- `--skills backend` - Node.js, Express.js, REST APIs, WebRTC, Socket.io
- `--skills database` - MongoDB, PostgreSQL
- `--skills tools` - Git, Postman, Docker
- `--skills cloud` - Azure, Vercel, AWS
- `--skills languages` - C/C++, JavaScript/TypeScript, Python

### **Theme System**
Choose from multiple color schemes:
- `--theme default` - Professional cyan/yellow/green
- `--theme dark` - Sleek magenta/blue/gray
- `--theme minimal` - Clean white/gray

### **Display Modes**
- **Full Mode**: Complete resume with all sections
- **Compact Mode**: Condensed view with key highlights (`--compact`)
- **Filtered Mode**: Focus on specific skill categories

## 🛠️ Command Reference

| Command | Short | Description | Example |
|---------|-------|-------------|---------|
| `--skills <category>` | `-s` | Filter skills by category | `npx @nandinim04 -s backend` |
| `--theme <name>` | `-t` | Choose color theme | `npx @nandinim04 -t dark` |
| `--compact` | `-c` | Show condensed version | `npx @nandinim04 --compact` |
| `--help` | `-h` | Display help information | `npx @nandinim04 --help` |

### **Combining Options**
```bash
# Backend skills with dark theme in compact mode
npx @nandinim04 --skills backend --theme dark --compact

# Frontend skills with minimal theme
npx @nandinim04 -s frontend -t minimal
```

## 💼 Resume Highlights

- **Current Role**: Full Stack Developer Intern at Aum Group
- **Experience**: 3+ internships with real impact metrics
- **Projects**: AI Therapist, WebRTC Video Chat, Video Streaming Backend
- **Achievements**: NASA Space Apps Global Nominee, Open Source Contributor
- **Education**: B.Tech CSE from KIET Group of Institutions

## 🔧 Technical Implementation

This package demonstrates several backend development concepts:
- **CLI Argument Parsing**: Custom flag handling and validation
- **Dynamic Data Filtering**: Category-based content organization
- **Theme Management**: Configurable color schemes
- **Error Handling**: User-friendly error messages and guidance
- **Modular Architecture**: Separation of concerns and reusable functions

## 🌟 Why This Approach?

- **Developer-Friendly**: Familiar terminal interface for tech recruiters
- **Interactive**: Multiple viewing options for different contexts  
- **Memorable**: Unique way to showcase technical skills
- **Practical**: Demonstrates real CLI tool development experience
- **Fast**: Instant execution without web dependencies

## 📞 Connect With Me

- **Email**: nandinim1204@gmail.com
- **LinkedIn**: [nandinim04](https://linkedin.com/in/nandinim04)
- **GitHub**: [Nandini-Maheshwari](https://github.com/Nandini-Maheshwari)

## 🤝 Contributing

Want to create your own interactive resume package? Feel free to fork this approach and customize it with your information!

---

*Built with ❤️ using Node.js, Chalk, and Boxen*