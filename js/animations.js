// ==================== ADVANCED ANIMATIONS ====================

// Intersection Observer for scroll animations
const animationObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    },
    {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    }
);

// Observe all animatable elements
document.addEventListener('DOMContentLoaded', () => {
    const animatableElements = document.querySelectorAll(
        '.fade-in, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .scale-in'
    );
    
    animatableElements.forEach(el => {
        animationObserver.observe(el);
    });
});

// ==================== STAGGER ANIMATIONS ====================
function staggerAnimation(selector, delay = 100) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animated');
        }, index * delay);
    });
}

// Apply stagger to skill items
setTimeout(() => {
    staggerAnimation('.skill-item', 100);
}, 500);

// ==================== GLOW EFFECT ON HOVER ====================
const glowElements = document.querySelectorAll('.glow-on-hover');

glowElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.animation = 'glowPulse 1s ease-in-out';
    });
    
    element.addEventListener('animationend', function() {
        this.style.animation = '';
    });
});

// ==================== 3D TILT EFFECT ====================
class TiltEffect {
    constructor(element, options = {}) {
        this.element = element;
        this.options = {
            maxTilt: options.maxTilt || 15,
            perspective: options.perspective || 1000,
            scale: options.scale || 1.05,
            speed: options.speed || 400,
            glare: options.glare || true
        };
        
        this.init();
    }
    
    init() {
        this.element.style.transformStyle = 'preserve-3d';
        this.element.style.transition = `transform ${this.options.speed}ms ease-out`;
        
        this.element.addEventListener('mouseenter', (e) => this.onMouseEnter(e));
        this.element.addEventListener('mousemove', (e) => this.onMouseMove(e));
        this.element.addEventListener('mouseleave', (e) => this.onMouseLeave(e));
    }
    
    onMouseEnter(e) {
        this.element.style.transform = `scale(${this.options.scale})`;
    }
    
    onMouseMove(e) {
        const rect = this.element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * this.options.maxTilt;
        const rotateY = ((centerX - x) / centerX) * this.options.maxTilt;
        
        this.element.style.transform = `
            perspective(${this.options.perspective}px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(${this.options.scale})
        `;
    }
    
    onMouseLeave(e) {
        this.element.style.transform = `
            perspective(${this.options.perspective}px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;
    }
}

// Apply 3D tilt to project cards
setTimeout(() => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        new TiltEffect(card, {
            maxTilt: 10,
            scale: 1.03
        });
    });
}, 1000);

// ==================== TYPEWRITER EFFECT ====================
class Typewriter {
    constructor(element, words, options = {}) {
        this.element = element;
        this.words = words;
        this.wordIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.typeSpeed = options.typeSpeed || 150;
        this.deleteSpeed = options.deleteSpeed || 100;
        this.delayBetweenWords = options.delayBetweenWords || 2000;
        
        this.type();
    }
    
    type() {
        const currentWord = this.words[this.wordIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentWord.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentWord.substring(0, this.charIndex + 1);
            this.charIndex++;
        }
        
        let timeout = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
        
        if (!this.isDeleting && this.charIndex === currentWord.length) {
            timeout = this.delayBetweenWords;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length;
        }
        
        setTimeout(() => this.type(), timeout);
    }
}

// ==================== RIPPLE EFFECT ====================
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple-effect');
    
    const existingRipple = button.querySelector('.ripple-effect');
    if (existingRipple) {
        existingRipple.remove();
    }
    
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Add ripple styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn, .social-link {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(rippleStyle);

// Apply ripple to buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn, .social-link');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
});

// ==================== PARALLAX SCROLLING ====================
class ParallaxScroll {
    constructor() {
        this.elements = document.querySelectorAll('[data-parallax]');
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => this.update());
        this.update();
    }
    
    update() {
        const scrollTop = window.pageYOffset;
        
        this.elements.forEach(element => {
            const speed = parseFloat(element.getAttribute('data-parallax')) || 0.5;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
}

// Initialize parallax
new ParallaxScroll();

// ==================== REVEAL ANIMATION ====================
class RevealAnimation {
    constructor(selector, options = {}) {
        this.elements = document.querySelectorAll(selector);
        this.options = {
            threshold: options.threshold || 0.15,
            rootMargin: options.rootMargin || '0px'
        };
        
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, this.options);
        
        this.elements.forEach(el => observer.observe(el));
    }
}

// ==================== NUMBER COUNTER ANIMATION ====================
class CounterAnimation {
    constructor(element, target, options = {}) {
        this.element = element;
        this.target = target;
        this.current = 0;
        this.duration = options.duration || 2000;
        this.suffix = options.suffix || '';
        this.started = false;
        
        this.observe();
    }
    
    observe() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.started) {
                    this.started = true;
                    this.animate();
                    observer.unobserve(this.element);
                }
            });
        });
        
        observer.observe(this.element);
    }
    
    animate() {
        const increment = this.target / (this.duration / 16);
        const timer = setInterval(() => {
            this.current += increment;
            
            if (this.current >= this.target) {
                this.current = this.target;
                clearInterval(timer);
            }
            
            this.element.textContent = Math.floor(this.current) + this.suffix;
        }, 16);
    }
}

// Apply counter animation to stat numbers
setTimeout(() => {
    document.querySelectorAll('.stat-number').forEach(el => {
        const text = el.textContent.trim();
        const match = text.match(/(\d+)(\+?)/);
        if (match) {
            const number = parseInt(match[1]);
            const suffix = match[2];
            new CounterAnimation(el, number, { suffix: suffix });
        }
    });
}, 500);

// ==================== GRADIENT ANIMATION ====================
function animateGradient(element) {
    let angle = 0;
    
    setInterval(() => {
        angle = (angle + 1) % 360;
        element.style.background = `
            linear-gradient(${angle}deg, 
                var(--color-primary), 
                var(--color-secondary), 
                var(--color-tint-1))
        `;
    }, 50);
}

// ==================== TEXT SPLIT ANIMATION ====================
function splitText(element) {
    const text = element.textContent;
    element.textContent = '';
    
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.transition = `all 0.5s ease ${index * 0.05}s`;
        element.appendChild(span);
        
        setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, 100);
    });
}

// ==================== MORPHING SHAPES ====================
class MorphingShape {
    constructor(element) {
        this.element = element;
        this.shapes = [
            '30% 70% 70% 30% / 30% 30% 70% 70%',
            '58% 42% 75% 25% / 76% 46% 54% 24%',
            '50% 50% 33% 67% / 55% 27% 73% 45%',
            '33% 67% 58% 42% / 63% 68% 32% 37%'
        ];
        this.currentShape = 0;
        
        this.morph();
    }
    
    morph() {
        setInterval(() => {
            this.currentShape = (this.currentShape + 1) % this.shapes.length;
            this.element.style.borderRadius = this.shapes[this.currentShape];
        }, 3000);
    }
}

// ==================== MOUSE TRAIL EFFECT ====================
class MouseTrail {
    constructor() {
        this.trails = [];
        this.maxTrails = 20;
        
        document.addEventListener('mousemove', (e) => this.addTrail(e));
    }
    
    addTrail(e) {
        const trail = document.createElement('div');
        trail.className = 'mouse-trail';
        trail.style.cssText = `
            position: fixed;
            width: 5px;
            height: 5px;
            background: var(--color-primary);
            border-radius: 50%;
            pointer-events: none;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            opacity: 0.6;
            z-index: 9997;
            animation: fade-out 0.5s ease-out forwards;
        `;
        
        document.body.appendChild(trail);
        this.trails.push(trail);
        
        if (this.trails.length > this.maxTrails) {
            const oldTrail = this.trails.shift();
            oldTrail.remove();
        }
        
        setTimeout(() => trail.remove(), 500);
    }
}

// Add fade-out animation for mouse trail
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes fade-out {
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(trailStyle);

// Initialize mouse trail (optional - can be disabled)
// new MouseTrail();

// ==================== SCROLL PROGRESS BAR ====================
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
        z-index: 10001;
        box-shadow: var(--glow-secondary);
        transition: width 0.1s ease-out;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createScrollProgress();

// ==================== IMAGE LAZY LOADING ====================
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

lazyLoadImages();

// ==================== INITIALIZE ANIMATIONS ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Animations initialized');
    
    // Apply reveal animations
    new RevealAnimation('.about-card, .project-card, .skill-category', {
        threshold: 0.1
    });
});
