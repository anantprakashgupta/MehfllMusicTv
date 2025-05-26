
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle functionality will be added here when needed
  
  // Screenshot carousel functionality
  const carousel = document.querySelector('.screenshot-carousel');
  // const screenshots = document.querySelectorAll('#scr');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  let currentIndex = 0;
  const slideWidth = screenshots[0].clientWidth + 30; // Include margin
  
  // Initialize carousel
  function updateCarousel() {
    carousel.scrollTo({
      left: currentIndex * slideWidth,
      behavior: 'smooth'
    });
  }
  
  // Event listeners for carousel buttons
  prevBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
  
  nextBtn.addEventListener('click', function() {
    if (currentIndex < screenshots.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });
  
  // Add scroll reveal animation
  const revealElements = document.querySelectorAll('.feature-card, .section-header, .screenshot, .download-btn');
  
  function checkScroll() {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.85) {
        element.classList.add('reveal');
      }
    });
  }
  
  // Add reveal class for animation
  document.querySelectorAll('.feature-card, .section-header, .screenshot, .download-btn').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });
  
  // Check scroll position on load and scroll
  window.addEventListener('scroll', checkScroll);
  window.addEventListener('load', checkScroll);
  
  // Create folder structure for images
  console.log('Make sure to create the following folders and add images:');
  console.log('- img/app-mockup.png - Main app screenshot');
  console.log('- img/screen1.png, screen2.png, etc. - App screenshots');
  console.log('- img/radio-icon.png, tv-icon.png, etc. - Feature icons');
  console.log('- img/google-play.png - Google Play icon');
  console.log('- img/download-icon.png - APK download icon');
  console.log('- img/facebook.png, twitter.png, instagram.png - Social media icons');
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Parallax effect for hero section
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const heroSection = document.querySelector('.hero');
    
    if (scrollPosition <= heroSection.offsetHeight) {
      const yValue = scrollPosition * 0.3;
      heroSection.style.backgroundPositionY = -yValue + 'px';
    }
  });
});
