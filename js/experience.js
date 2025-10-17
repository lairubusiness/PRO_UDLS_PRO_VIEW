// Experience Section Animation
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }

    // Function to handle scroll events
    function handleScroll() {
        const timelineContainers = document.querySelectorAll('.timeline-container');
        
        timelineContainers.forEach(container => {
            if (isInViewport(container) && !container.classList.contains('visible')) {
                container.classList.add('visible');
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case elements are already in view
    handleScroll();
});
