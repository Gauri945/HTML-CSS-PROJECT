// Scroll Animation Trigger
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-fadeIn, .animate-fadeInUp, .animate-slideInLeft, .animate-slideInRight, .animate-slideInUp');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        
        if (elementPosition < viewportHeight - 100) {
            element.style.opacity = 1;
            
            // Add specific animation classes based on element's existing classes
            if (element.classList.contains('animate-fadeIn')) {
                element.style.animation = 'fadeIn 1s ease forwards';
            } else if (element.classList.contains('animate-fadeInUp')) {
                element.style.animation = 'fadeInUp 1s ease forwards';
            } else if (element.classList.contains('animate-slideInLeft')) {
                element.style.animation = 'slideInLeft 1s ease forwards';
            } else if (element.classList.contains('animate-slideInRight')) {
                element.style.animation = 'slideInRight 1s ease forwards';
            } else if (element.classList.contains('animate-slideInUp')) {
                element.style.animation = 'slideInUp 1s ease forwards';
            }
        }
    });
};

// Initial check on load
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    
    // Apply delays to staggered animations
    const staggerElements = document.querySelectorAll('.staggered-delay > *');
    staggerElements.forEach((el, index) => {
        el.style.animationDelay = `${0.2 + (index * 0.2)}s`;
    });
});

// Check on scroll
window.addEventListener('scroll', animateOnScroll);

// Floating animation for hero image
const floatingImage = document.querySelector('.animate-float');
if (floatingImage) {
    floatingImage.style.animation = 'floating 6s ease-in-out infinite';
}

// Pulse animation for CTA button
const pulseElement = document.querySelector('.animate-pulse');
if (pulseElement) {
    pulseElement.style.animation = 'pulse 2s ease infinite';
}
