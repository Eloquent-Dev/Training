// Hamburger Menu Functionality (from Basic Task 1)
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.offscreen-menu');

if (hamMenu && offScreenMenu) {
    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });
}

// Global functions for gallery controls (from Basic Task 2)
function one() {
    const columns = document.querySelectorAll('.column');
    const oneBtn = document.getElementById('one-btn');
    const twoBtn = document.getElementById('two-btn');
    const fourBtn = document.getElementById('four-btn');
    
    if (columns.length > 0) {
        columns.forEach(col => {
            col.classList.remove('one-column', 'two-columns', 'four-columns');
            col.classList.add('one-column');
        });
        
        // Update button states
        if (oneBtn) oneBtn.classList.add('active-btn');
        if (twoBtn) twoBtn.classList.remove('active-btn');
        if (fourBtn) fourBtn.classList.remove('active-btn');
    }
}

function two() {
    const columns = document.querySelectorAll('.column');
    const oneBtn = document.getElementById('one-btn');
    const twoBtn = document.getElementById('two-btn');
    const fourBtn = document.getElementById('four-btn');
    
    if (columns.length > 0) {
        columns.forEach(col => {
            col.classList.remove('one-column', 'two-columns', 'four-columns');
            col.classList.add('two-columns');
        });
        
        // Update button states
        if (oneBtn) oneBtn.classList.remove('active-btn');
        if (twoBtn) twoBtn.classList.add('active-btn');
        if (fourBtn) fourBtn.classList.remove('active-btn');
    }
}

function four() {
    const columns = document.querySelectorAll('.column');
    const oneBtn = document.getElementById('one-btn');
    const twoBtn = document.getElementById('two-btn');
    const fourBtn = document.getElementById('four-btn');
    
    if (columns.length > 0) {
        columns.forEach(col => {
            col.classList.remove('one-column', 'two-columns', 'four-columns');
        });
        
        // Update button states
        if (oneBtn) oneBtn.classList.remove('active-btn');
        if (twoBtn) twoBtn.classList.remove('active-btn');
        if (fourBtn) fourBtn.classList.add('active-btn');
    }
}

// Image Gallery Controls (from Basic Task 2)
document.addEventListener('DOMContentLoaded', function() {
    const columns = document.querySelectorAll('.column');
    const oneBtn = document.getElementById('one-btn');
    const twoBtn = document.getElementById('two-btn');
    const fourBtn = document.getElementById('four-btn');

    if (columns.length > 0 && oneBtn && twoBtn && fourBtn) {
        // Initialize with 4 columns view
        fourBtn.classList.add('active-btn');
        
        // Add click event listeners
        oneBtn.addEventListener('click', one);
        twoBtn.addEventListener('click', two);
        fourBtn.addEventListener('click', four);
    }
});

// Scroll to Top Functionality (from Basic Task 3)
const toTop = document.querySelector(".to_top");
const container = document.querySelector("body");

if (toTop && container) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    });

    // Smooth scroll to top when button is clicked
    toTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Newsletter form functionality
const footerEmailBtn = document.getElementById('footer-email-btn');
const footerEmailInput = document.getElementById('footer-email-input');

if (footerEmailBtn && footerEmailInput) {
    footerEmailBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const email = footerEmailInput.value.trim();
        
        if (email && isValidEmail(email)) {
            alert('Thank you for subscribing to our newsletter!');
            footerEmailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add loading animation to images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Add error handling for broken images
        img.addEventListener('error', function() {
            console.error('Failed to load image:', this.src);
            this.style.border = '2px solid red';
            this.alt = 'Image failed to load';
        });
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            console.log('Image loaded successfully:', this.src);
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded (cached), show it immediately
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
    
    // Debug gallery functionality
    console.log('Gallery elements found:', {
        columns: document.querySelectorAll('.column').length,
        oneBtn: document.getElementById('one-btn'),
        twoBtn: document.getElementById('two-btn'),
        fourBtn: document.getElementById('four-btn')
    });
});

// Add hover effects to team cards
document.addEventListener('DOMContentLoaded', function() {
    const teamCards = document.querySelectorAll('#meet_team div');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    

});