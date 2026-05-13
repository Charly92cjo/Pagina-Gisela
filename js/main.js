 // Initialize AOS Animations
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });

    // Cookies (as requested)
    document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
    document.cookie = 'same-site-cookie=foo; SameSite=Strict';

    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileToggle.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
    
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Re-trigger AOS on resize for better mobile experience
    window.addEventListener('resize', () => {
      AOS.refresh();
    });
