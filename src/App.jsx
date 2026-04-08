import { useEffect, useState } from 'react'

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
      'I built AnyLang as a real-time cross-language chat platform focused on live communication, localization, and a responsive multi-panel interface. Using Next.js 14 and React 18, I developed a three-column layout that manages active conversations, threaded messaging, and user state in real time.',
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
      'I built this content-based recommendation engine on a dataset of more than 5,000 films from TMDB. I used feature preprocessing and cosine similarity to generate relevant recommendations based on movie characteristics.',
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
      'I built the AI Resume Analyzer as a full-stack tool for evaluating how well a resume aligns with a job description. It parses PDF resumes, extracts useful text, and compares skills and keywords against job requirements to produce a practical alignment score.',
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
      'I manage hardware and software deployments for Windows and macOS classroom systems across campus and resolve technical escalations for faculty and students in high-availability teaching environments.',
  },
  {
    period: 'May 2025 - January 2026',
    role: 'Research Software Engineer',
    org: 'Data Visualization Lab (IDVL), Texas Tech University',
    summary:
      'I engineered an interactive analytics platform in Python, Dash, and Plotly to explore 324,000+ records across 64 features, applied PCA and clustering to uncover patterns, and led the end-to-end data pipeline and technical presentation of findings.',
  },
]

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.5V19H3.45V8.5h3.49ZM7.16 5.26c0 1-.74 1.8-1.97 1.8-1.18 0-1.92-.8-1.92-1.8 0-1.03.76-1.81 1.95-1.81 1.2 0 1.93.78 1.94 1.81ZM20.55 12.58V19h-3.48v-6.02c0-1.51-.54-2.54-1.89-2.54-1.03 0-1.64.69-1.91 1.36-.1.24-.12.57-.12.91V19H9.66s.05-9.72 0-10.5h3.49v1.49l-.02.03h.02v-.03c.46-.71 1.28-1.72 3.11-1.72 2.27 0 3.98 1.48 3.98 4.65Z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.7.5 12.12c0 5.14 3.3 9.5 7.9 11.03.58.11.79-.25.79-.56 0-.27-.01-1.18-.02-2.13-3.22.71-3.9-1.38-3.9-1.38-.52-1.35-1.28-1.7-1.28-1.7-1.05-.73.08-.72.08-.72 1.16.08 1.78 1.21 1.78 1.21 1.03 1.79 2.7 1.27 3.36.97.1-.76.4-1.27.72-1.56-2.57-.3-5.27-1.3-5.27-5.78 0-1.28.45-2.33 1.19-3.16-.12-.3-.52-1.5.11-3.13 0 0 .97-.31 3.19 1.2a10.97 10.97 0 0 1 5.81 0c2.21-1.51 3.18-1.2 3.18-1.2.64 1.63.24 2.83.12 3.13.74.83 1.19 1.88 1.19 3.16 0 4.49-2.7 5.48-5.28 5.77.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.21.68.8.56 4.59-1.53 7.88-5.89 7.88-11.03C23.5 5.7 18.35.5 12 .5Z" />
    </svg>
  )
}

function App() {
  const [selectedProject, setSelectedProject] = useState(projectSections[0])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = document.querySelectorAll('[data-reveal]')

    if (reduceMotion) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

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
                  <span className="icon-badge" aria-hidden="true">
                    <GitHubIcon />
                  </span>
                  Visit GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section intro-section" id="about">
          <div className="section-inner">
            <div className="section-kicker reveal reveal-fade" data-reveal>
              About
            </div>
            <div className="content-grid">
              <div className="main-column reveal reveal-up" data-reveal>
                <h2>{profile.title}</h2>
                <p>
                  I am a developer and researcher focused on software design, frontend and
                  full-stack engineering, machine learning applications, and data visualization.
                  My work spans real-time web systems, interactive analytical interfaces, and
                  AI-assisted tools designed to solve practical problems.
                </p>
                <p>
                  I am currently completing my Bachelor of Science in Computer Science at Texas
                  Tech University, and I am interested in software engineering opportunities where
                  I can contribute to products with meaningful technical depth and strong
                  user-facing execution.
                </p>
              </div>
              <aside className="side-column">
                <div className="info-panel reveal reveal-right reveal-delay-1" data-reveal>
                  <h3>Education</h3>
                  <p className="panel-strong">{education.school}</p>
                  <p>{education.degree}</p>
                  <p>{education.meta}</p>
                </div>
                <div className="info-panel reveal reveal-right reveal-delay-2" data-reveal>
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
            <div className="section-kicker reveal reveal-fade" data-reveal>
              Skills
            </div>
            <h2 className="reveal reveal-up" data-reveal>
              Technical Areas
            </h2>
            <div className="stacked-sections">
              {skillSections.map((section, index) => (
                <article
                  className={`text-block reveal reveal-up reveal-delay-${Math.min(index + 1, 4)}`}
                  data-reveal
                  key={section.title}
                >
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="section-inner">
            <div className="section-kicker reveal reveal-fade" data-reveal>
              Portfolio
            </div>
            <h2 className="reveal reveal-up" data-reveal>
              Selected Projects
            </h2>
            <p className="section-note reveal reveal-up reveal-delay-1" data-reveal>
              These projects show my work across full-stack engineering, machine learning, and
              AI-assisted software.
            </p>

            <div className="project-gallery">
              {projectSections.map((project, index) => (
                <button
                  type="button"
                  className={`project-tile reveal reveal-up reveal-delay-${Math.min(index + 1, 3)} ${project.accentClass} ${
                    selectedProject.title === project.title ? 'is-active' : ''
                  }`}
                  key={project.title}
                  data-reveal
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

            <article className="project-detail-card reveal reveal-up reveal-delay-2" data-reveal>
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
            <div className="project-hint reveal reveal-fade reveal-delay-3" data-reveal>
              Click a project tile above to switch the detail view.
            </div>
          </div>
        </section>

        <section className="content-section" id="timeline">
          <div className="section-inner">
            <div className="section-kicker reveal reveal-fade" data-reveal>
              Timeline
            </div>
            <h2 className="reveal reveal-up" data-reveal>
              Experience
            </h2>
            <div className="timeline-list">
              {experience.map((item, index) => (
                <article
                  className={`timeline-entry reveal reveal-left reveal-delay-${Math.min(index + 1, 2)}`}
                  data-reveal
                  key={`${item.role}-${item.period}`}
                >
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
            <div className="section-kicker reveal reveal-fade" data-reveal>
              Contact Me
            </div>
            <h2 className="reveal reveal-up" data-reveal>
              Get in touch
            </h2>
            <div className="contact-grid reveal reveal-up reveal-delay-1" data-reveal>
              <div>
                <p>
                  For software engineering opportunities, internships, research collaboration, or
                  project discussions, feel free to reach out through any of the links below.
                </p>
              </div>
              <div className="contact-list">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>{profile.phone}</a>
                <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                  <span className="icon-badge" aria-hidden="true">
                    <LinkedInIcon />
                  </span>
                  LinkedIn
                </a>
                <a className="social-link" href={profile.github} target="_blank" rel="noreferrer">
                  <span className="icon-badge" aria-hidden="true">
                    <GitHubIcon />
                  </span>
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
