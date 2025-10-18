// Tech Icons Background Animation
document.addEventListener('DOMContentLoaded', function() {
    const techIconsContainer = document.createElement('div');
    techIconsContainer.className = 'tech-icons-bg';
    document.body.prepend(techIconsContainer);

    // Tech icons with their respective classes
    const techIcons = [
        { class: 'fab fa-html5 html5', name: 'HTML5' },
        { class: 'fab fa-css3-alt css3', name: 'CSS3' },
        { class: 'fab fa-js js', name: 'JavaScript' },
        { class: 'fab fa-react react', name: 'React' },
        { class: 'fab fa-node-js node', name: 'Node.js' },
        { class: 'fab fa-python python', name: 'Python' },
        { class: 'fab fa-java java', name: 'Java' },
        { class: 'fab fa-php php', name: 'PHP' },
        { class: 'fas fa-database database', name: 'Database' },
        { class: 'fab fa-git-alt git', name: 'Git' },
        { class: 'fab fa-github', name: 'GitHub' },
        { class: 'fab fa-npm', name: 'npm' },
        { class: 'fab fa-sass', name: 'Sass' },
        { class: 'fab fa-bootstrap', name: 'Bootstrap' },
        { class: 'fab fa-laravel', name: 'Laravel' }
    ];

    // Create tech icon elements
    function createTechIcons() {
        const containerWidth = window.innerWidth;
        const containerHeight = window.innerHeight;
        const iconCount = 15; // Number of icons to display

        for (let i = 0; i < iconCount; i++) {
            const icon = document.createElement('i');
            const randomTech = techIcons[Math.floor(Math.random() * techIcons.length)];
            
            icon.className = `tech-icon ${randomTech.class}`;
            icon.setAttribute('title', randomTech.name);
            
            // Random position
            const left = Math.random() * 100;
            const randomX = (Math.random() * 0.6) + 0.2; // Random value between 0.2 and 0.8
            
            // Set styles
            icon.style.left = `${left}%`;
            icon.style.top = `100%`;
            icon.style.setProperty('--random-x', randomX);
            icon.style.animationDelay = `${Math.random() * 10}s`;
            
            // Random size
            const size = 2 + Math.random() * 2; // Between 2rem and 4rem
            icon.style.fontSize = `${size}rem`;
            
            techIconsContainer.appendChild(icon);
        }
    }

    // Handle window resize
    let resizeTimeout;
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            techIconsContainer.innerHTML = '';
            createTechIcons();
        }, 200);
    }

    // Initialize
    createTechIcons();
    window.addEventListener('resize', handleResize);
});
