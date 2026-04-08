import { useState } from 'react'

const profile = {
  name: 'Manuel Perez Gil',
  title: 'Computer Science Student, Software Developer, and Research Engineer',
  intro:
    "I'm a Computer Science student at Texas Tech University with interests in software engineering, full-stack web development, interactive data systems, and applied AI. I like building products that combine strong technical execution with interfaces people can actually use.",
  location: 'Lubbock, TX',
  email: 'mperezgi@ttu.edu',
  phone: '+1 (806) 283-3944',
  linkedin: 'https://linkedin.com/in/manuelantoperezgil/',
  github: 'https://github.com/MEMOMG8',
}

const education = {
  school: 'Texas Tech University',
  degree: 'Bachelor of Science in Computer Science',
  meta: 'Expected May 2027 | GPA: 3.49 / 4.0',
  coursework: [
    'Software Engineering',
    'Theory of Automata',
    'Computer Architecture',
    'Data Structures and Algorithms',
    'Object-Oriented Programming',
    'Mathematical Statistics',
    'Linear Algebra',
  ],
}

const skillSections = [
  {
    title: 'Web Development',
    text:
      'I build frontend and full-stack applications using React, Next.js, Node.js, JavaScript, TypeScript, HTML, CSS, SQL, MongoDB, Firebase, and deployment platforms such as Vercel and AWS.',
  },
  {
    title: 'Machine Learning and AI',
    text:
      'My work includes applied machine learning and AI tooling using Python, PyTorch, TensorFlow, Pandas, FastAPI, and the OpenAI API, with a focus on turning models into usable software.',
  },
  {
    title: 'Data Visualization and Analysis',
    text:
      'In research settings I have worked with Dash, Plotly, clustering, PCA, Pandas, and high-dimensional industrial data to build interactive systems that surface insights clearly.',
  },
  {
    title: 'Engineering Tools',
    text:
      'I regularly use Python, C, Java, Git, Docker, Linux, Postgres, MongoDB, Google Cloud Platform, AWS, Figma, Jupyter, and modern development workflows for shipping and maintaining software.',
  },
]

const projectSections = [
  {
    title: 'AnyLang',
    subtitle: 'Multi-Language Real-Time Chat Web Application',
    teaser: 'Real-time multilingual messaging with live conversations and secure communication.',
    description:
      'AnyLang is a real-time cross-language chat platform built around live communication, localization, and a responsive multi-panel interface. I developed the application using Next.js 14 and React 18, building a three-column layout that manages active conversations, threaded messaging, and user state in real time.',
    details:
      'On the backend, I engineered a Node.js and Socket.IO system for live messaging, typing indicators, and persistent conversation logging. I also implemented JWT-based authentication and AES-256-CBC encryption for secure communication, while supporting user profiles and production-oriented application behavior.',
    tech: ['Next.js 14', 'React 18', 'Node.js', 'Socket.IO', 'JWT', 'AES-256-CBC'],
    github: 'https://github.com/MEMOMG8',
    accentClass: 'project-anylang',
  },
  {
    title: 'Movie Recommendation System',
    subtitle: 'Machine Learning Web Application',
    teaser: 'Content-based recommendations powered by TMDB data and efficient similarity search.',
    description:
      'This project is a content-based recommendation engine built on a dataset of more than 5,000 films from TMDB. I used feature preprocessing and cosine similarity to generate relevant recommendations based on movie characteristics.',
    details:
      'I developed the front end in Streamlit and integrated the TMDB API to retrieve movie posters and metadata dynamically. To improve performance, I used precomputed similarity matrices and serialized artifacts for efficient recommendation retrieval at inference time.',
    tech: ['Python', 'Streamlit', 'TMDB API', 'Pandas', 'Cosine Similarity'],
    github: 'https://github.com/MEMOMG8',
    accentClass: 'project-movies',
  },
  {
    title: 'AI Resume Analyzer',
    subtitle: 'Machine Learning / AI Web Application',
    teaser: 'Resume parsing, job matching, and AI-generated feedback in a single workflow.',
    description:
      'The AI Resume Analyzer is a full-stack tool for evaluating how well a resume aligns with a job description. It parses PDF resumes, extracts useful text, and compares skills and keywords against job requirements to produce a practical alignment score.',
    details:
      'I built backend APIs with FastAPI and used the OpenAI API to generate targeted feedback such as missing skills and improved bullet suggestions. I also created a Streamlit interface for resume upload, analysis, scoring, and ATS-style recommendations.',
    tech: ['FastAPI', 'OpenAI API', 'Streamlit', 'Python', 'PDF Parsing'],
    github: 'https://github.com/MEMOMG8',
    accentClass: 'project-resume',
  },
]

const experience = [
  {
    period: 'August 2025 - Present',
    role: 'IT Student Technician',
    org: 'Classroom Technology Services (IT Help Central), Texas Tech University',
    summary:
      'Manage hardware and software deployments for Windows and macOS classroom systems across campus and resolve technical escalations for faculty and students in high-availability teaching environments.',
  },
  {
    period: 'May 2025 - January 2026',
    role: 'Research Software Engineer',
    org: 'Data Visualization Lab (IDVL), Texas Tech University',
    summary:
      'Engineered an interactive analytics platform in Python, Dash, and Plotly to explore 324,000+ records across 64 features, applied PCA and clustering to uncover patterns, and led the end-to-end data pipeline and technical presentation of findings.',
  },
]

function App() {
  const [selectedProject, setSelectedProject] = useState(projectSections[0])

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="section-inner header-inner">
          <div className="brand-block">
            <div className="brand-mark" />
            <div>
              <p className="brand-name">{profile.name}</p>
              <p className="brand-role">Portfolio</p>
            </div>
          </div>
          <nav className="site-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#timeline">Timeline</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="section-inner">
            <div className="hero-inner">
              <p className="status-line">Portfolio | Manuel Perez Gil</p>
              <h1>{profile.name}</h1>
              <p className="hero-title">{profile.title}</p>
              <p className="hero-intro">{profile.intro}</p>
              <div className="hero-actions">
                <a className="hero-link primary" href="#projects">
                  Enter Portfolio
                </a>
                <a className="hero-link" href={profile.github} target="_blank" rel="noreferrer">
                  Visit GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section intro-section" id="about">
          <div className="section-inner">
            <div className="section-kicker">About</div>
            <div className="content-grid">
              <div className="main-column">
                <h2>{profile.title}</h2>
                <p>
                  {profile.name} is a developer and researcher focused on software design,
                  frontend and full-stack engineering, machine learning applications, and data
                  visualization. His work spans real-time web systems, interactive analytical
                  interfaces, and AI-assisted tools designed to solve practical problems.
                </p>
                <p>
                  He is currently completing his Bachelor of Science in Computer Science at Texas
                  Tech University and is interested in software engineering opportunities where he
                  can contribute to products with meaningful technical depth and strong user-facing
                  execution.
                </p>
              </div>
              <aside className="side-column">
                <div className="info-panel">
                  <h3>Education</h3>
                  <p className="panel-strong">{education.school}</p>
                  <p>{education.degree}</p>
                  <p>{education.meta}</p>
                </div>
                <div className="info-panel">
                  <h3>Relevant Coursework</h3>
                  <ul className="simple-list">
                    {education.coursework.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="content-section" id="skills">
          <div className="section-inner">
            <div className="section-kicker">Skills</div>
            <h2>Technical Areas</h2>
            <div className="stacked-sections">
              {skillSections.map((section) => (
                <article className="text-block" key={section.title}>
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="section-inner">
            <div className="section-kicker">Portfolio</div>
            <h2>Selected Projects</h2>
            <p className="section-note">
              These projects show my work across full-stack engineering, machine learning, and
              AI-assisted software.
            </p>

            <div className="project-gallery">
              {projectSections.map((project) => (
                <button
                  type="button"
                  className={`project-tile ${project.accentClass} ${
                    selectedProject.title === project.title ? 'is-active' : ''
                  }`}
                  key={project.title}
                  onClick={() => setSelectedProject(project)}
                >
                  <span className="project-tile-overlay" />
                  <span className="project-tile-copy">
                    <span className="project-tile-title">{project.title}</span>
                    <span className="project-tile-text">{project.teaser}</span>
                  </span>
                </button>
              ))}
            </div>

            <article className="project-detail-card">
              <div className="project-heading">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.subtitle}</p>
              </div>
              <div className="project-copy">
                <p>{selectedProject.description}</p>
                <p>{selectedProject.details}</p>
                <ul className="tag-row">
                  {selectedProject.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href={selectedProject.github} target="_blank" rel="noreferrer">
                  View this project on GitHub
                </a>
              </div>
            </article>
            <div className="project-hint">
              Click a project tile above to switch the detail view.
            </div>
          </div>
        </section>

        <section className="content-section" id="timeline">
          <div className="section-inner">
            <div className="section-kicker">Timeline</div>
            <h2>Experience</h2>
            <div className="timeline-list">
              {experience.map((item) => (
                <article className="timeline-entry" key={`${item.role}-${item.period}`}>
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-content">
                    <h3>{item.role}</h3>
                    <p className="timeline-org">{item.org}</p>
                    <p>{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="section-inner">
            <div className="section-kicker">Contact Me</div>
            <h2>Get in touch</h2>
            <div className="contact-grid">
              <div>
                <p>
                  For software engineering opportunities, internships, research collaboration, or
                  project discussions, feel free to reach out through any of the links below.
                </p>
              </div>
              <div className="contact-list">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>{profile.phone}</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
