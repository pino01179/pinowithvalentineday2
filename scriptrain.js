function createHeartRain() {
    const heartRainContainer = document.querySelector('.heart-rain');
    
    // Create 100 heart elements
    for (let i = 0; i < 100; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        
        // Set random starting positions
        heart.style.left = Math.random() * 100 + 'vw'; // random horizontal position
        heart.style.animationDuration = Math.random() * 2 + 2 + 's'; // random animation speed
        heart.style.animationDelay = Math.random() * 2 + 's'; // random start time
        
        // Append heart to the container
        heartRainContainer.appendChild(heart);
    }
}

// Initialize the heart rain when the page loads
window.onload = createHeartRain;
