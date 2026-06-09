# Professional Portfolio - Prof. Dr. T. N. Ghorude

This is a professional academic portfolio web application built for Prof. Dr. T. N. Ghorude, Vice-Principal & Head of the Department of Physics at Rajiv Gandhi College of Arts, Science & Commerce, Mumbai. It showcases his distinguished academic journey, research publications, awards, and career milestones.

## 🚀 Tech Stack

- **React 19** - UI Library
- **Vite** - Fast frontend build tool
- **React Router DOM v7** - Client-side routing
- **Lucide React** - Icon library
- **Vanilla CSS** - Custom styling with CSS variables for theming

## ✨ Features

- **Responsive Design**: Fully responsive layout that works beautifully across all devices.
- **Dark/Light Mode**: User-toggleable theme with preferences saved to local storage.
- **Profile Details**: Sections for About, Academic Credentials, and Institutional Roles.
- **Research & Guidance**: Showcase of Publications, Ph.D. Scholars supervised, and Funded Research Projects.
- **Professional Milestones**: Interactive Career Timeline and Training Courses.
- **Media Gallery**: Image gallery categorized by events, awards, and book covers, featuring a custom full-screen Lightbox.
- **Contact**: Contact information and quick links to ResearchGate and Google Scholar.

## 🔄 Data Flow & State Management

The application utilizes a centralized data architecture to separate content from presentation logic. Instead of hardcoding text into React components or relying on an external database/API, all portfolio content is managed within a single data file (`src/data/portfolioData.js`). 

This approach makes it incredibly simple to update the portfolio (e.g., adding a new publication or a new award) without needing to touch the UI code.

### How Data is Fetched and Displayed

The data is exported as structured JavaScript constants (Objects and Arrays). React components directly import the required data modules and use the `.map()` function to render lists dynamically. 

**Example Code:**

*1. Centralized Data (`src/data/portfolioData.js`):*
```javascript
export const RESEARCH_PROJECTS = [
  {
    id: 'rp1',
    title: 'Synthesis and Characterization of Polypyrrole-Metal Nanocomposites',
    type: 'Minor Research Project',
    fundedBy: 'BCUD, University of Mumbai',
    status: 'Completed',
  },
  // ...more projects
];
```

*2. Component Rendering (`src/pages/ResearchProjectsPage/ResearchProjectsPage.jsx`):*
```javascript
import React from 'react';
import { RESEARCH_PROJECTS } from '../../data/portfolioData';

export default function ResearchProjectsPage() {
  return (
    <section className="projects-section">
      <h2>Research Projects</h2>
      <div className="projects-grid">
        {RESEARCH_PROJECTS.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p><strong>Type:</strong> {project.type}</p>
            <p><strong>Funded By:</strong> {project.fundedBy}</p>
            <span className="status-badge">{project.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
```

## 🛠️ Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Build for production: `npm run build`
