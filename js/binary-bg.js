// Binary Background Generator
document.addEventListener('DOMContentLoaded', function() {
    const binaryContainer = document.createElement('div');
    binaryContainer.className = 'binary-bg';
    document.body.prepend(binaryContainer);

    // Generate random binary strings
    function generateBinaryString(length) {
        let result = '';
        const characters = '01';
        for (let i = 0; i < length; i++) {
            result += Math.random() > 0.5 ? '1' : '0';
            // Add spaces for better readability
            if (Math.random() > 0.9) result += ' ';
        }
        return result;
    }

    // Create binary code elements
    function createBinaryElements() {
        const containerWidth = window.innerWidth;
        const containerHeight = window.innerHeight;
        const elementCount = Math.floor(containerWidth / 30); // Adjust density

        for (let i = 0; i < elementCount; i++) {
            const binaryElement = document.createElement('div');
            binaryElement.className = 'binary-code';
            
            // Random position
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * -30; // Start at different times
            
            // Random size
            const size = 0.8 + Math.random() * 0.4;
            
            // Set styles
            binaryElement.style.left = `${left}%`;
            binaryElement.style.top = `${top}%`;
            binaryElement.style.fontSize = `${size}rem`;
            binaryElement.style.animationDelay = `${delay}s`;
            binaryElement.style.opacity = 0.3 + Math.random() * 0.5;
            
            // Generate binary content (multiple lines)
            let binaryContent = '';
            const lineCount = 5 + Math.floor(Math.random() * 10);
            for (let j = 0; j < lineCount; j++) {
                binaryContent += generateBinaryString(15 + Math.floor(Math.random() * 20)) + '<br>';
            }
            
            binaryElement.innerHTML = binaryContent;
            binaryContainer.appendChild(binaryElement);
        }
    }

    // Handle window resize
    let resizeTimeout;
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            binaryContainer.innerHTML = '';
            createBinaryElements();
        }, 200);
    }

    // Initialize
    createBinaryElements();
    window.addEventListener('resize', handleResize);
});
