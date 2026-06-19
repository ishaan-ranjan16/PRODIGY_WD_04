# Ishaan Ranjan | Personal Portfolio Website

A modern, animated personal portfolio website built with React, Vite, and Tailwind CSS — showcasing skills, projects, and professional background as a web developer.

🔗 **Live Demo:** _add your deployed link here_

---

## ✨ Features

- **Home** — Captivating headline, intro, and call-to-action buttons
- **About** — Detailed background, education, experience, and skills list
- **Projects** — Card-based project showcase pulled from a single data source
- **Contact** — Working contact form UI (ready to connect to a backend)
- Smooth page transitions and micro-animations with Framer Motion
- Fully responsive (mobile, tablet, desktop)
- Material Icons used throughout — no extra icon library needed

---

## 🛠 Tech Stack

- **React.js** – UI library
- **Vite** – build tool / dev server
- **Tailwind CSS** – utility-first styling
- **JavaScript (JSX)**
- **React Router** – client-side navigation
- **Framer Motion** – animations
- **Google Material Icons** – iconography

---

## 📁 Project Structure

\`\`\`
portfolio-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProjectCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── projects.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
\`\`\`

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

\`\`\`bash
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website
npm install
\`\`\`

### Run locally

\`\`\`bash
npm run dev
\`\`\`

Visit **http://localhost:5173** in your browser.

### Build for production

\`\`\`bash
npm run build
\`\`\`

Output is generated in the `dist/` folder.

### Preview production build

\`\`\`bash
npm run preview
\`\`\`

---

## ⚙️ Customization

| What to change            | File                          |
|----------------------------|-------------------------------|
| Name, headline, intro text | `src/pages/Home.jsx`          |
| About / Education / Skills | `src/pages/About.jsx`         |
| Project list                | `src/data/projects.js`        |
| Social links / email        | `src/components/Footer.jsx`   |
| Contact form behavior        | `src/pages/Contact.jsx`       |
| Colors / theme               | `tailwind.config.js`          |
| Global styles                | `src/index.css`               |

To connect the contact form to a real email service, wire up the `handleSubmit` function in `src/pages/Contact.jsx` to a service like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/).

---

## 📦 Deployment

This project can be deployed for free on:
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

Example (Vercel):
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

---

<!-- ## 📄 License

This project is open source and available under the [MIT License](LICENSE).

--- -->

## 🙋‍♂️ Author

**Ishaan Ranjan**
GitHub: [@ishaan-ranjan16](https://github.com/ishaan-ranjan16)