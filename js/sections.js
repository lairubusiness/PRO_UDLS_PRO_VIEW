// Load remaining sections dynamically
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadExperience();
    loadEducation();
    loadContact();
    loadFooter();
});

function loadProjects() {
    const container = document.getElementById('projects-section');
    if (!container) return;
    
    container.innerHTML = `
<section class="projects" id="projects">
    <div class="container">
        <div class="section-header">
            <span class="section-label">My Work</span>
            <h2 class="section-title">Featured Projects</h2>
            <div class="title-underline"></div>
        </div>
        <div class="projects-grid">
            ${createProjectCard('AI Chatbot', 'Real-time AI chatbot with authentication, chat history, and responsive UI. Built with Next.js, Vercel, Supabase, and integrated with OpenAI API for intelligent conversations.', ['Next.js', 'Vercel', 'Supabase', 'OpenAI'], 'https://github.com/lairubusiness/nextjs-ai-chatbot', '38569e')}
            ${createProjectCard('Green Grow Manager', 'Agricultural management system with role-based access, PDF reporting, and climate data tracking. Built for efficient farm management.', ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'], 'https://github.com/lairubusiness/Green_Grow_Manager', '293f72')}
            ${createProjectCard('Smart Campus', 'Web-based campus management system with automated email notifications (SendGrid) and dynamic PDF report generation (TCPDF). Complete student and course management solution.', ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'], 'https://github.com/lairubusiness/smart_campus_web.git', '2e4681')}
            ${createProjectCard('Game Lounge', 'Mobile app for exploring and sharing games with Google Sign-in, media sharing, and real-time data synchronization. Community-driven gaming platform.', ['Flutter', 'Firebase', 'REST APIs'], 'https://github.com/lairubusiness/Game-Lounge-app.git', '334e8f')}
            ${createProjectCard('Pizza Ordering System', 'Desktop-based ordering and billing system with intuitive GUI built using Java Swing and OOP principles. Complete order management solution.', ['Java', 'Swing', 'OOP'], 'https://github.com/lairubusiness/com.pizza.system.git', '4366bb')}
            ${createProjectCard('EASYNEWS App', 'Cross-platform news aggregation app providing real-time news feeds from multiple sources with category filtering and bookmarking features.', ['Flutter', 'React Native', 'REST APIs'], 'https://github.com/lairubusiness/EASYNEWS-App', '38569e')}
            ${createProjectCard('MySimpleNote', 'Multi-platform note-taking app with offline data storage using SQLite. Features rich text editing, categories, and sync capabilities.', ['Flutter', 'Dart', 'SQLite'], 'https://github.com/lairubusiness/MySimpleNote-.git', '243764')}
            ${createProjectCard('U.DL.SANDARUWAN Portfolio', 'Responsive portfolio showcasing web & mobile development skills, interactive features, smooth navigation, and accessible project display with modern UI/UX design.', ['TypeScript', 'HTML', 'CSS', 'JavaScript'], 'https://github.com/lairubusiness/UDLS', '5f7dc6')}
        </div>
        <div class="more-projects">
            <a href="https://github.com/lairubusiness" target="_blank" class="btn btn-primary glow-effect">
                <span>View All Projects on GitHub</span>
                <i class="fab fa-github"></i>
            </a>
        </div>
    </div>
</section>`;
    
    addProjectsStyles();
}

function createProjectCard(title, desc, tags, link, color) {
    return `
        <div class="project-card scroll-animate fade-in-up">
            <div class="project-image" style="background: linear-gradient(135deg, #${color} 0%, #${color}dd 100%);">
                <div class="project-image-title">${title}</div>
                <div class="project-overlay">
                    <a href="${link}" target="_blank" class="overlay-btn"><i class="fab fa-github"></i></a>
                </div>
            </div>
            <div class="project-content">
                <div class="project-tags">${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                <h3 class="project-title">${title}</h3>
                <p class="project-description">${desc}</p>
                <div class="project-links">
                    <a href="${link}" target="_blank" class="project-link">View Code <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>`;
}

function loadExperience() {
    const container = document.getElementById('experience-section');
    if (!container) return;
    
    container.innerHTML = `
<section class="experience" id="experience">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Career Path</span>
            <h2 class="section-title">Professional Experience</h2>
            <div class="title-underline"></div>
        </div>
        <div class="timeline">
            <div class="timeline-item scroll-animate fade-in-left">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-date">2023 - Present</div>
                    <h3 class="timeline-title">Freelance Full Stack Developer</h3>
                    <h4 class="timeline-company">Remote</h4>
                    <ul class="timeline-description">
                        <li>Developed and deployed full-stack applications using Next.js, Flutter, Firebase, and Supabase</li>
                        <li>Built and integrated REST APIs with optimized databases for scalable performance</li>
                        <li>Implemented responsive UI/UX designs ensuring cross-device compatibility</li>
                        <li>Collaborated with clients to deliver e-commerce platforms, management systems, and mobile apps</li>
                        <li>Ensured code quality through software testing, debugging, and comprehensive documentation</li>
                    </ul>
                    <div class="timeline-skills">
                        <span class="skill-tag">Next.js</span>
                        <span class="skill-tag">Flutter</span>
                        <span class="skill-tag">Firebase</span>
                        <span class="skill-tag">Supabase</span>
                        <span class="skill-tag">REST APIs</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`;
    
    addExperienceStyles();
}

function loadEducation() {
    const container = document.getElementById('education-section');
    if (!container) return;
    
    const educationData = [
        {icon: 'graduation-cap', degree: 'BSc (Hons) in Software Engineering', institution: 'Kingston University', date: '2023 - 2025', grade: 'First Class'},
        {icon: 'certificate', degree: 'HND in Software Engineering', institution: 'ESOFT Metro Campus', date: 'Graduated 2024', grade: 'Merit'},
        {icon: 'laptop-code', degree: 'Pearson Diploma in ICT (DITEC)', institution: 'Esoft Metro Campus', date: '2022 - 2023', grade: 'Merit'},
        {icon: 'language', degree: 'Pearson Diploma in English (DIE)', institution: 'Esoft Metro Campus', date: '2022', grade: 'Merit (4 months)'},
        {icon: 'globe', degree: 'UK My Class English Course', institution: 'British Council, Sri Lanka', date: '2022', grade: '6 months (Online)'},
        {icon: 'desktop', degree: 'Certificate Course in Computer Applications', institution: 'IHRA, University of Colombo', date: '2020', grade: 'Merit Pass (120 hours)'},
        {icon: 'book-open', degree: 'English Level CMB Elementary 2 & 4', institution: 'British Council, Sri Lanka', date: '2018 - 2019', grade: 'Grade B (3 months each)'},
        {icon: 'school', degree: 'O/L Examination', institution: 'C.W.W. Kannangara National College', date: '2016', grade: 'Completed'},
        {icon: 'computer', degree: 'Diploma in IT Fundamental Course', institution: 'SUCCESS Computer Training Institute', date: '2013 - 2015', grade: 'A+ (6 months)'},
        {icon: 'laptop', degree: 'Diploma in Computer Studies', institution: 'SUCCESS Computer Training Institute', date: '2013 - 2015', grade: 'Grade A (6 months)'},
        {icon: 'palette', degree: 'Diploma in Graphic Design', institution: 'SUCCESS Computer Training Institute', date: '2013 - 2015', grade: 'Grade B (8 months)'}
    ];
    
    container.innerHTML = `
<section class="education" id="education">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Academic Journey</span>
            <h2 class="section-title">Education & Certifications</h2>
            <div class="title-underline"></div>
        </div>
        <div class="education-grid">
            ${educationData.map((edu, i) => `
                <div class="education-card scroll-animate scale-in delay-${i % 3}">
                    <div class="education-icon"><i class="fas fa-${edu.icon}"></i></div>
                    <h3 class="education-degree">${edu.degree}</h3>
                    <h4 class="education-institution">${edu.institution}</h4>
                    <p class="education-date">${edu.date}</p>
                    <p class="education-grade">${edu.grade}</p>
                </div>
            `).join('')}
        </div>
    </div>
</section>`;
    
    addEducationStyles();
}

function loadContact() {
    const container = document.getElementById('contact-section');
    if (!container) return;
    
    container.innerHTML = `
<section class="contact" id="contact">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Get In Touch</span>
            <h2 class="section-title">Contact Me</h2>
            <div class="title-underline"></div>
        </div>
        <div class="contact-content">
            <div class="contact-info">
                <h3 class="contact-subtitle">Let's work together!</h3>
                <p class="contact-text">I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
                <div class="contact-items">
                    <div class="contact-item scroll-animate fade-in-left">
                        <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                        <div class="contact-details">
                            <h4>Email</h4>
                            <a href="mailto:udlsandaruwan@gmail.com">udlsandaruwan@gmail.com</a>
                        </div>
                    </div>
                    <div class="contact-item scroll-animate fade-in-left delay-1">
                        <div class="contact-icon"><i class="fas fa-phone"></i></div>
                        <div class="contact-details">
                            <h4>Phone</h4>
                            <a href="tel:+94702842715">+94 70 284 2715</a><br>
                            <a href="tel:+94762783426">+94 76 278 3426</a>
                        </div>
                    </div>
                    <div class="contact-item scroll-animate fade-in-left delay-2">
                        <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
                        <div class="contact-details">
                            <h4>Location</h4>
                            <p>54/1 Vitanamulla, Marbodala<br>Vayangoda, Sri Lanka</p>
                        </div>
                    </div>
                </div>
                <div class="contact-social">
                    <a href="https://github.com/lairubusiness" target="_blank" class="social-btn glass-effect" title="GitHub"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/lahiru-sandaruwan-633781225" target="_blank" class="social-btn glass-effect" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/share/1Hjuh4JQ4s/" target="_blank" class="social-btn glass-effect" title="Facebook"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/udlahirusandaru?igsh=YW8yejlmcjVuODI2" target="_blank" class="social-btn glass-effect" title="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="https://wa.me/qr/WLRPF2EV6YASO1" target="_blank" class="social-btn glass-effect" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                    <a href="mailto:udlsandaruwan@gmail.com" class="social-btn glass-effect" title="Email"><i class="fas fa-envelope"></i></a>
                    <a href="https://udls-portfoliosite-uase.vercel.app" target="_blank" class="social-btn glass-effect" title="Portfolio"><i class="fas fa-globe"></i></a>
                </div>
                <div class="work-profile-section">
                    <h3 class="work-profile-title">Work Profile</h3>
                    <div class="work-profile-card glass-effect">
                        <div class="work-logo">
                            <img src="images/Systems and technology programming company logo (4).png" alt="CodeCraft Solutions" class="company-logo">
                        </div>
                        <div class="work-details">
                            <h4>CodeCraft Solutions</h4>
                            <div class="work-links">
                                <a href="mailto:codecraftsolutions6@gmail.com" class="work-link"><i class="fas fa-envelope"></i> codecraftsolutions6@gmail.com</a>
                                <a href="https://www.instagram.com/codecraftsolutions6?igsh=MTJ4b2pna3dhbjJlYQ==" target="_blank" class="work-link"><i class="fab fa-instagram"></i> @codecraftsolutions6</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form class="contact-form scroll-animate fade-in-right" id="contactForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary glow-effect">
                    <span>Send Message</span>
                    <i class="fas fa-paper-plane"></i>
                </button>
            </form>
        </div>
    </div>
</section>`;
    
    addContactStyles();
}

function loadFooter() {
    const container = document.getElementById('footer-section');
    if (!container) return;
    
    container.innerHTML = `
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-about">
                <h3 class="footer-logo">UDLS<span class="logo-dot">.</span></h3>
                <p>Full Stack Developer passionate about creating innovative digital solutions.</p>
                <div class="footer-social">
                    <a href="https://github.com/lairubusiness" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/lahiru-sandaruwan-633781225" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/share/1Hjuh4JQ4s/" target="_blank" title="Facebook"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/udlahirusandaru?igsh=YW8yejlmcjVuODI2" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="https://wa.me/qr/WLRPF2EV6YASO1" target="_blank" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                    <a href="mailto:udlsandaruwan@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
            <div class="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>More</h4>
                <ul>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div class="footer-contact">
                <h4>Contact</h4>
                <ul>
                    <li><i class="fas fa-envelope"></i> udlsandaruwan@gmail.com</li>
                    <li><i class="fas fa-phone"></i> +94 70 284 2715</li>
                    <li><i class="fas fa-phone"></i> +94 76 278 3426</li>
                    <li><i class="fas fa-map-marker-alt"></i> Vayangoda, Sri Lanka</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 U.D Lahiru Sandaruwan. All rights reserved.</p>
            <p>Designed & Developed with <i class="fas fa-heart" style="color: #ef4444;"></i> by UDLS</p>
        </div>
    </div>
</footer>`;
    
    addFooterStyles();
}

function addProjectsStyles() {
    if (document.getElementById('projects-styles')) return;
    const style = document.createElement('style');
    style.id = 'projects-styles';
    style.textContent = `
.projects{background:var(--bg-primary)}
.projects-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem;margin-bottom:3rem}
.project-card{background:rgba(56,86,158,0.05);border:1px solid rgba(56,86,158,0.2);border-radius:var(--radius-lg);overflow:hidden;transition:var(--transition-normal)}
.project-card:hover{transform:translateY(-8px);box-shadow:0 15px 40px rgba(56,86,158,0.3)}
.project-image{position:relative;overflow:hidden;height:220px;display:flex;align-items:center;justify-content:center}
.project-image-title{color:rgba(255,255,255,0.95);font-size:1.8rem;font-weight:700;text-align:center;padding:2rem;font-family:'Forum',serif;text-shadow:0 4px 15px rgba(0,0,0,0.3);z-index:1;position:relative}
.project-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(20,31,56,0.95);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;gap:1rem;opacity:0;transition:opacity var(--transition-normal);z-index:2}
.project-card:hover .project-overlay{opacity:1}
.overlay-btn{width:50px;height:50px;background:var(--color-white);color:var(--color-primary);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.3rem;transition:var(--transition-normal)}
.overlay-btn:hover{transform:scale(1.1);box-shadow:var(--glow-secondary)}
.project-content{padding:1.5rem}
.project-tags{display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1rem}
.tag{background:var(--color-primary);color:var(--color-white);padding:0.25rem 0.75rem;border-radius:20px;font-size:0.75rem;font-weight:600}
.project-title{font-size:1.5rem;color:var(--text-primary);margin-bottom:0.75rem;font-family:'Forum',serif}
.project-description{color:var(--text-secondary);line-height:1.6;margin-bottom:1rem}
.project-link{color:var(--color-primary);font-weight:600;display:inline-flex;align-items:center;gap:0.5rem;transition:var(--transition-normal)}
.project-link:hover{color:var(--color-tint-1);transform:translateX(5px)}
.more-projects{text-align:center}
`;
    document.head.appendChild(style);
}

function addExperienceStyles() {
    if (document.getElementById('experience-styles')) return;
    const style = document.createElement('style');
    style.id = 'experience-styles';
    style.textContent = `
.experience{background:linear-gradient(180deg,var(--bg-primary) 0%,var(--bg-secondary) 100%)}
.timeline{position:relative;padding-left:50px}
.timeline::before{content:'';position:absolute;left:20px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,var(--color-primary),var(--color-tint-1));box-shadow:var(--glow-secondary)}
.timeline-item{position:relative;margin-bottom:3rem}
.timeline-dot{position:absolute;left:-34px;top:0;width:12px;height:12px;background:var(--color-primary);border:3px solid var(--bg-secondary);border-radius:50%;box-shadow:var(--glow-primary)}
.timeline-content{background:rgba(56,86,158,0.05);border:1px solid rgba(56,86,158,0.2);border-radius:var(--radius-lg);padding:2rem}
.timeline-date{color:var(--color-primary);font-weight:600;font-size:0.9rem;margin-bottom:0.5rem}
.timeline-title{font-size:1.5rem;color:var(--text-primary);margin-bottom:0.5rem}
.timeline-company{font-size:1.1rem;color:var(--color-tint-1);margin-bottom:1rem}
.timeline-description{color:var(--text-secondary);line-height:1.8;padding-left:1.5rem;margin-bottom:1rem}
.timeline-description li{margin-bottom:0.5rem}
.timeline-skills{display:flex;flex-wrap:wrap;gap:0.5rem}
.skill-tag{background:var(--color-primary);color:var(--color-white);padding:0.4rem 1rem;border-radius:20px;font-size:0.85rem;font-weight:600}
`;
    document.head.appendChild(style);
}

function addEducationStyles() {
    if (document.getElementById('education-styles')) return;
    const style = document.createElement('style');
    style.id = 'education-styles';
    style.textContent = `
.education{background:var(--bg-secondary)}
.education-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem}
.education-card{background:rgba(56,86,158,0.05);border:1px solid rgba(56,86,158,0.2);border-radius:var(--radius-lg);padding:2rem;text-align:center;transition:var(--transition-normal)}
.education-card:hover{transform:translateY(-5px);background:rgba(56,86,158,0.1);box-shadow:var(--glow-secondary)}
.education-icon{width:70px;height:70px;background:var(--color-primary);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;font-size:2rem;color:var(--color-white);box-shadow:var(--glow-primary)}
.education-degree{font-size:1.3rem;color:var(--text-primary);margin-bottom:0.75rem;min-height:3.6rem}
.education-institution{font-size:1rem;color:var(--color-tint-1);margin-bottom:0.5rem}
.education-date{color:var(--text-secondary);font-size:0.9rem;margin-bottom:0.5rem}
.education-grade{color:var(--color-primary);font-weight:600;font-size:1rem}
`;
    document.head.appendChild(style);
}

function addContactStyles() {
    if (document.getElementById('contact-styles')) return;
    const style = document.createElement('style');
    style.id = 'contact-styles';
    style.textContent = `
.contact{background:linear-gradient(180deg,var(--bg-secondary) 0%,var(--bg-primary) 100%)}
.contact-content{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start}
.contact-subtitle{font-size:1.75rem;color:var(--color-tint-1);margin-bottom:1rem}
.contact-text{color:var(--text-secondary);line-height:1.8;margin-bottom:2rem}
.contact-items{display:flex;flex-direction:column;gap:1.5rem;margin-bottom:2rem}
.contact-item{display:flex;gap:1rem;align-items:flex-start}
.contact-icon{width:50px;height:50px;background:var(--color-primary);border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;font-size:1.3rem;color:var(--color-white);flex-shrink:0;box-shadow:var(--glow-secondary)}
.contact-details h4{color:var(--text-primary);margin-bottom:0.5rem}
.contact-details a,.contact-details p{color:var(--text-secondary);transition:var(--transition-fast)}
.contact-details a:hover{color:var(--color-primary)}
.contact-social{display:flex;gap:1rem}
.social-btn{width:50px;height:50px;background:rgba(56,86,158,0.2);border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;font-size:1.3rem;color:var(--color-tint-1);transition:var(--transition-normal)}
.social-btn:hover{background:var(--color-primary);color:var(--color-white);transform:translateY(-3px);box-shadow:var(--glow-secondary)}
.contact-form{background:rgba(56,86,158,0.05);border:1px solid rgba(56,86,158,0.2);border-radius:var(--radius-lg);padding:2rem}
.form-group{margin-bottom:1.5rem}
.form-group label{display:block;color:var(--text-primary);margin-bottom:0.5rem;font-weight:600}
.form-group input,.form-group textarea{width:100%;background:rgba(56,86,158,0.1);border:1px solid rgba(56,86,158,0.3);border-radius:var(--radius-md);padding:0.875rem;color:var(--text-primary);font-family:inherit;transition:var(--transition-normal)}
.form-group input:focus,.form-group textarea:focus{outline:none;border-color:var(--color-primary);box-shadow:0 0 0 3px rgba(56,86,158,0.2)}
.form-group textarea{resize:vertical;min-height:120px}
@media (max-width:768px){.contact-content{grid-template-columns:1fr}}
`;
    document.head.appendChild(style);
}

function addFooterStyles() {
    if (document.getElementById('footer-styles')) return;
    const style = document.createElement('style');
    style.id = 'footer-styles';
    style.textContent = `
.footer{background:var(--color-shade-1);padding:4rem 0 2rem;border-top:1px solid rgba(56,86,158,0.2)}
.footer-content{display:grid;grid-template-columns:2fr 1fr 1fr 1.5fr;gap:3rem;margin-bottom:3rem}
.footer-logo{font-family:'Forum',serif;font-size:2rem;color:var(--text-primary);margin-bottom:1rem}
.footer-about p{color:var(--text-secondary);line-height:1.8;margin-bottom:1.5rem}
.footer-social{display:flex;gap:1rem}
.footer-social a{width:40px;height:40px;background:rgba(56,86,158,0.2);border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;color:var(--color-tint-1);transition:var(--transition-normal)}
.footer-social a:hover{background:var(--color-primary);color:var(--color-white);transform:translateY(-3px)}
.footer-links h4,.footer-contact h4{color:var(--text-primary);margin-bottom:1rem}
.footer-links ul,.footer-contact ul{display:flex;flex-direction:column;gap:0.75rem}
.footer-links a{color:var(--text-secondary);transition:var(--transition-fast)}
.footer-links a:hover{color:var(--color-primary);padding-left:5px}
.footer-contact li{color:var(--text-secondary);display:flex;align-items:center;gap:0.5rem;font-size:0.9rem}
.footer-bottom{text-align:center;padding-top:2rem;border-top:1px solid rgba(56,86,158,0.2)}
.footer-bottom p{color:var(--text-secondary);margin:0.5rem 0}
@media (max-width:768px){.footer-content{grid-template-columns:1fr;gap:2rem}}
`;
    document.head.appendChild(style);
}
