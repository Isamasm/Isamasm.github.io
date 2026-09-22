// Smooth page transitions and animations

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add transition class to body
    document.body.classList.add('transition-ready');
    
    // Update active nav link based on current page
    updateActiveNavLink();
    
    // Add hover effects to cards
    addCardEffects();
    
    // Add smooth scroll behavior
    addSmoothScroll();
    
    // Add animation to elements as they come into view
    addScrollAnimations();
});

// Update active navigation link
function updateActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        const isActive = 
            (currentPath === 'index.html' && linkPath === '/') ||
            (currentPath === linkPath) ||
            (currentPath === '' && linkPath === '/');
        
        if (isActive) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Add card hover effects
function addCardEffects() {
    const cards = document.querySelectorAll('.project-card, .interest-card, .contact-card, .project-detail');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Add smooth scroll
function addSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// Add scroll animations
function addScrollAnimations() {
    const animatedElements = document.querySelectorAll('.project-card, .interest-card, .contact-card, section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate header after load
    const header = document.querySelector('header');
    if (header) {
        header.style.animation = 'slideDown 0.6s ease-out';
    }
    
    // Animate main content
    const main = document.querySelector('main');
    if (main) {
        main.style.animation = 'fadeInUp 0.6s ease-out 0.1s both';
    }
});

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }
    
    .transition-ready {
        transition: background-color 0.3s ease;
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    .project-card,
    .interest-card,
    .contact-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    }
    
    .project-card:hover,
    .interest-card:hover,
    .contact-card:hover {
        box-shadow: 0 8px 25px rgba(0, 212, 255, 0.15);
        transform: translateY(-4px);
    }
    
    nav a {
        transition: color 0.3s ease, border-color 0.3s ease;
    }
    
    a {
        transition: color 0.3s ease;
    }
    
    /* Loading state */
    body:not(.loaded) {
        opacity: 0;
    }
    
    body.loaded {
        opacity: 1;
        transition: opacity 0.5s ease-in;
    }
`;
document.head.appendChild(style);

// Add subtle background gradient animation
function addBackgroundAnimation() {
    const bgColors = [
        'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
        'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        'linear-gradient(135deg, #16213e 0%, #0f3460 100%)'
    ];
    
    let currentIndex = 0;
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % bgColors.length;
        document.body.style.background = bgColors[currentIndex];
    }, 5000);
}

// Initialize background animation
addBackgroundAnimation();

// Console message
console.log('%c Isamasm Portfolio ', 'background: #00d4ff; color: #0a0a0a; font-size: 20px; padding: 10px;');
console.log('%c Welcome to my portfolio! ', 'color: #00d4ff; font-size: 14px;');
