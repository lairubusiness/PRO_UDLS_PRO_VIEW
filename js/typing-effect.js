// ==================== TYPING EFFECT ANIMATION ====================

class TypingEffect {
    constructor(element, texts, options = {}) {
        this.element = element;
        this.texts = texts;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        
        // Options with slower, more dramatic timing
        this.typeSpeed = options.typeSpeed || 120; // Slower typing
        this.deleteSpeed = options.deleteSpeed || 60; // Slower deleting
        this.pauseEnd = options.pauseEnd || 3000; // Longer pause at end
        this.pauseStart = options.pauseStart || 500; // Pause before starting
        
        // Start typing after initial delay
        setTimeout(() => this.type(), this.pauseStart);
    }
    
    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            // Deleting characters
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            // Typing characters
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }
        
        let timeout = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
        
        // Add some randomness to make it more natural
        timeout += Math.random() * 50;
        
        // When finished typing current text
        if (!this.isDeleting && this.charIndex === currentText.length) {
            timeout = this.pauseEnd; // Long pause to read
            this.isDeleting = true;
        } 
        // When finished deleting
        else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length; // Move to next text
            timeout = this.pauseStart; // Short pause before next text
        }
        
        setTimeout(() => this.type(), timeout);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.getElementById('typingText');
    
    if (typingElement) {
        // The four titles to display one by one
        const titles = [
            'Web & Mobile App Developer',
            'Digital Artist',
            'Graphic Designer',
            'Entrepreneur'
        ];
        
        // Initialize typing effect with slower, more dramatic timing
        new TypingEffect(typingElement, titles, {
            typeSpeed: 120,    // Slower typing for more dramatic effect
            deleteSpeed: 60,   // Slower deletion
            pauseEnd: 3500,    // Longer pause at end to fully display
            pauseStart: 500    // Brief pause before starting new text
        });
    }
});

// ==================== ENHANCED IMAGE PARALLAX ====================

function enhancedParallax() {
    const images = {
        behind: document.querySelector('.behind-image'),
        front: document.querySelector('.front-profile-image'),
        aboutDecoration: document.querySelector('.about-side-image')
    };
    
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
    });
    
    // Smooth animation loop
    function animate() {
        // Smooth interpolation
        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;
        
        // Apply parallax to behind image (moves more)
        if (images.behind) {
            const behindX = currentX * 30;
            const behindY = currentY * 30;
            images.behind.style.transform = `translate(${behindX}px, ${behindY}px) scale(1.2)`;
        }
        
        // Apply subtle parallax to front image (moves less)
        if (images.front) {
            const frontX = currentX * 15;
            const frontY = currentY * 15;
            images.front.style.transform = `translate(${frontX}px, ${frontY}px)`;
        }
        
        // Apply parallax to about decoration
        if (images.aboutDecoration) {
            const decorX = currentX * -20;
            const decorY = currentY * -20;
            images.aboutDecoration.style.transform = `translate(${decorX}px, ${decorY}px) rotate(${currentX * 10}deg)`;
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Initialize parallax
setTimeout(enhancedParallax, 1000);

// ==================== GLASSMORPHISM SCROLL EFFECT ====================

function glassScrollEffect() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Initialize glass scroll effect
document.addEventListener('DOMContentLoaded', glassScrollEffect);

// ==================== 3D TILT EFFECT FOR HERO IMAGE ====================

function init3DTilt() {
    const imageWrapper = document.querySelector('.image-wrapper-new');
    
    if (!imageWrapper) return;
    
    imageWrapper.addEventListener('mousemove', (e) => {
        const rect = imageWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((centerX - x) / centerX) * 10;
        
        imageWrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    imageWrapper.addEventListener('mouseleave', () => {
        imageWrapper.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
}

// Initialize 3D tilt
document.addEventListener('DOMContentLoaded', init3DTilt);

// ==================== LIQUID BACKGROUND ANIMATION ====================

function createLiquidBackground() {
    const hero = document.querySelector('.hero-background');
    
    if (!hero) return;
    
    // Create liquid shapes
    for (let i = 0; i < 5; i++) {
        const liquid = document.createElement('div');
        liquid.className = 'liquid-shape';
        liquid.style.cssText = `
            position: absolute;
            width: ${200 + Math.random() * 200}px;
            height: ${200 + Math.random() * 200}px;
            background: radial-gradient(circle, 
                rgba(${56 + Math.random() * 40}, ${86 + Math.random() * 40}, ${158 + Math.random() * 40}, 0.15) 0%, 
                transparent 70%);
            border-radius: 50%;
            filter: blur(${40 + Math.random() * 40}px);
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: liquid-motion ${15 + Math.random() * 10}s ease-in-out infinite,
                       float-gentle ${10 + Math.random() * 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(liquid);
    }
}

// Initialize liquid background
document.addEventListener('DOMContentLoaded', createLiquidBackground);

// ==================== ENHANCED GLOW ON SCROLL ====================

function enhancedGlowScroll() {
    const glowElements = document.querySelectorAll('.glow-effect, .btn-primary, .project-card');
    
    window.addEventListener('scroll', () => {
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        
        glowElements.forEach((element, index) => {
            const delay = index * 0.1;
            const glowIntensity = Math.sin((scrollPercent + delay) * Math.PI * 2) * 0.5 + 0.5;
            
            element.style.setProperty('--glow-intensity', glowIntensity);
        });
    });
}

// Initialize enhanced glow
document.addEventListener('DOMContentLoaded', enhancedGlowScroll);

// ==================== SMOOTH REVEAL ANIMATIONS ====================

function smoothReveal() {
    const revealElements = document.querySelectorAll('.about-card, .skill-item, .education-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px) scale(0.95)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(element);
    });
}

// Initialize smooth reveal
document.addEventListener('DOMContentLoaded', smoothReveal);

// ==================== IMAGE CLARIFY EFFECT ====================

function clarifyImages() {
    const images = document.querySelectorAll('.front-profile-image, .about-side-image');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('clarify-enter');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    
    images.forEach(img => {
        observer.observe(img);
    });
}

// Initialize clarify effect
document.addEventListener('DOMContentLoaded', clarifyImages);

// ==================== CONSOLE SIGNATURE ====================

console.log('%c✨ U.D LAHIRU SANDARUWAN ✨', 
    'font-family: Forum, serif; font-size: 24px; font-weight: bold; color: #5f7dc6; text-shadow: 0 0 10px #5f7dc6;');
console.log('%c🚀 Web & Mobile App Developer | Digital Artist | Graphic Designer | Entrepreneur', 
    'font-family: Glacial Indifference, sans-serif; font-size: 14px; color: #7c95d0;');
console.log('%c💎 Portfolio crafted with passion and precision', 
    'font-size: 12px; color: #98acda;');
