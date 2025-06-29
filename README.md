# Darshan V G - Developer Portfolio

A modern, responsive developer portfolio built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Interactive**: Hover effects, typewriter animations, and smooth scrolling
- **Fast**: Optimized for performance and SEO

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🏃‍♂️ Quick Start

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/DARSHAN-V-G/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Deployment

This portfolio is configured for GitHub Pages deployment:

1. **Update repository name** in `next.config.js`:
   \`\`\`js
   basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   \`\`\`

2. **Push to GitHub**:
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as source
   - The site will automatically deploy on every push to main

## 🎨 Customization

### Colors
The portfolio uses an orange theme. To change colors, update the Tailwind classes in:
- Hero section gradients
- Button colors
- Accent colors

### Content
Update your information in the data objects at the bottom of `app/page.tsx`:
- `projects`: Your project information
- `skillCategories`: Your skills and technologies
- `achievements`: Your accomplishments
- `contactInfo`: Your contact details

### Sections
Add or remove sections by modifying the main component structure and navigation.

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first design approach
- Flexible grid layouts
- Optimized typography scaling
- Touch-friendly interactions

## ⚡ Performance

- Static site generation for fast loading
- Optimized images and assets
- Minimal JavaScript bundle
- Efficient CSS with Tailwind

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Email**: darshanguna22@gmail.com
- **LinkedIn**: [linkedin.com/in/darshan-v-g](https://linkedin.com/in/darshan-v-g)
- **GitHub**: [github.com/DARSHAN-V-G](https://github.com/DARSHAN-V-G)

---

⭐ Star this repo if you like it!
