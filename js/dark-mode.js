// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Check for saved theme preference or prefer-color-scheme
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    // Apply saved theme or use system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
    }
    
    // Update toggle icon based on current mode
    updateToggleIcon();
    
    // Toggle dark mode on click
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save preference to localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        
        // Update toggle icon
        updateToggleIcon();
    });
    
    // Function to update toggle icon
    function updateToggleIcon() {
        const moonIcon = darkModeToggle.querySelector('.fa-moon');
        const sunIcon = darkModeToggle.querySelector('.fa-sun');
        
        if (document.body.classList.contains('dark-mode')) {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    }
    
    // Listen for system preference changes
    prefersDarkScheme.addEventListener('change', (e) => {
        // Only apply if the user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
            updateToggleIcon();
        }
    });
});