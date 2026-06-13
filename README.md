# Prof. Dr. T. N. Ghorude - Academic & Research Portfolio

<!-- Banner Image Placeholder: ![Project Banner](./docs/banner.png) -->

A premium, comprehensive digital portfolio designed for **Prof. Dr. T. N. Ghorude**, Principal at Dnyandeep Mandal's St. Joseph College of Arts and Commerce. This academic and research identity platform showcases his academic journey, vast research publications, and professional achievements with an executive-level UI/UX.

---

## 🔗 Live Demo
**[View Live Project Here](https://prof-ghorude-tatyarao-namdevrao.netlify.app/)**

---

## ✨ Key Features

- **📊 Dynamic Publications Hub:** A highly interactive and filterable research database displaying over 55+ papers. Users can seamlessly filter publications by *International Journals*, *Conferences*, *National Publications*, or view all of them in a merged feed.
- **🖼️ Custom Lightbox Gallery:** A bespoke, responsive image gallery built with a full-screen slider using native browser APIs. Features categorized albums (Awards, Events, etc.) and infinite-scroll/boundary-disabled navigation for a fluid browsing experience.
- **🎓 Training & Courses Module:** Interactive cards showcasing Refresher Courses, Seminars, and Workshops, utilizing a custom color-coded badge system for quick visual distinction.
- **💎 Executive UI/UX:** Built with a premium aesthetic featuring custom SVG monograms, modern glass-morphism effects, dynamic hover states, and smooth gap-bridged navigation.

---

## 🛠️ Tech Stack

- **Frontend Framework:** [React.js](https://reactjs.org/) (Bootstrapped with [Vite](https://vitejs.dev/) for blazing-fast performance)
- **Styling:** Custom Vanilla CSS / CSS Variables (Includes full Dark/Light theme support)
- **Data Management:** Local JSON / JavaScript data structures (Stateless architecture without external database dependencies)

---

## 🚀 Local Installation & Setup

To get this project running locally on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nishidh-Dhodi/prof-tn-ghorude-portfolio.git
   cd prof-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📁 Folder Structure

The project follows a modular structure. Crucially, all the portfolio content is localized in the `src/data` folder to allow easy updates without touching the UI components.

```text
prof-portfolio/
├── public/                 # Static assets (favicons, manifest, etc.)
├── src/
│   ├── assets/             # Images, SVGs, and other media
│   ├── components/         # Reusable UI components (Buttons, Cards, Lightbox)
│   ├── data/               # 📂 Data layer (portfolioData.js/json) - UPDATE CONTENT HERE
│   ├── pages/              # Page components (HomePage, ContactPage, etc.)
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global CSS variables and base styles
│   └── main.jsx            # Application entry point
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

---

## 📄 Contact

**Contact:**
- **Developer:** [Nishidh S. Dhodi](https://github.com/Nishidh-Dhodi)
- **Client:** Chinmiya Mam

For any inquiries or to report an issue, please open an issue on the repository or reach out directly.
