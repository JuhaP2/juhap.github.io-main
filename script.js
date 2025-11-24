// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close footer overlay
const closeBtn = document.querySelector('.close-btn');
const footerOverlay = document.querySelector('.footer-overlay');

if (closeBtn && footerOverlay) {
    closeBtn.addEventListener('click', () => {
        footerOverlay.style.display = 'none';
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.work-card, .project-item, .skills-visualization, .contact');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Animate tool icons with delay
    const toolIcons = document.querySelectorAll('.tool-icon');
    toolIcons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'scale(0)';
        icon.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            icon.style.opacity = '1';
            icon.style.transform = 'scale(1)';
        }, 500 + (index * 100));
    });
});

// Typing effect for main heading
const mainHeading = document.querySelector('.main-heading');
if (mainHeading) {
    const text = mainHeading.textContent;
    mainHeading.textContent = '';
    mainHeading.style.borderRight = '2px solid var(--purple-glow)';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            mainHeading.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Blinking cursor effect
            setInterval(() => {
                mainHeading.style.borderRight = mainHeading.style.borderRight === 'none' 
                    ? '2px solid var(--purple-glow)' 
                    : 'none';
            }, 500);
        }
    };
    
    setTimeout(typeWriter, 1000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');
    
    if (heroLeft && scrolled < window.innerHeight) {
        heroLeft.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroRight.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Tool icon hover effects with connection lines (visual effect)
const toolIcons = document.querySelectorAll('.tool-icon');
const sigmaCenter = document.querySelector('.sigma-center');

toolIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.8)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
        icon.style.boxShadow = 'none';
    });
});

// Work card hover effects
const workCards = document.querySelectorAll('.work-card');
workCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.work-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.work-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Header background on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 15, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(139, 92, 246, 0.1)';
    } else {
        header.style.background = 'rgba(10, 10, 15, 0.8)';
        header.style.boxShadow = 'none';
    }
});

// Add glow effect to sigma center on hover
if (sigmaCenter) {
    sigmaCenter.addEventListener('mouseenter', () => {
        sigmaCenter.style.textShadow = '0 0 60px var(--purple-glow), 0 0 120px var(--purple-glow)';
    });
    
    sigmaCenter.addEventListener('mouseleave', () => {
        sigmaCenter.style.textShadow = '0 0 40px var(--purple-glow), 0 0 80px var(--purple-glow)';
    });
}

