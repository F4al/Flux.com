// Adding some basic animations to homepage for parallax scrolling effect
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const heroBackground = document.querySelector('.hero-background');
  
    // Parallax effect for background
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  });
  
  // Add "Add to Cart" animation on hover
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.1)';
    });
  
    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
    });
  });
  