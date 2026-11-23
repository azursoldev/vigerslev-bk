/**
 * Vigerslev Boldklub — Pure Vanilla JavaScript
 * Interactions, mobile menu, dropdowns, smooth animations
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Dynamic copyright year in footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinksList = document.getElementById('navLinksList');

  if (mobileToggle && navLinksList) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinksList.classList.toggle('nav-open');
      mobileToggle.setAttribute('aria-expanded', isOpen);

      // Animate hamburger lines
      const spans = mobileToggle.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'translateY(8px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.main-nav-bar') && navLinksList.classList.contains('nav-open')) {
        navLinksList.classList.remove('nav-open');
        mobileToggle.setAttribute('aria-expanded', false);
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // 3. Mobile Dropdown toggle on tap
  const dropdownItems = document.querySelectorAll('.has-dropdown');
  dropdownItems.forEach((item) => {
    const link = item.querySelector('.nav-link-item');
    if (link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 860) {
          e.preventDefault();
          item.classList.toggle('dropdown-active');
        }
      });
    }
  });

  // 4. Subtle card click feedback (ready for DBU modal/link integration)
  const statLinks = document.querySelectorAll('.stat-link');
  statLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      // Future DBU widget pop-up or expansion
      const label = link.querySelector('.row-header');
      if (label) {
        label.style.transition = 'color 0.2s';
        const originalColor = label.style.color;
        label.style.color = '#1ea744';
        setTimeout(() => {
          label.style.color = originalColor;
        }, 500);
      }
    });
  });

  console.log('⚽ Vigerslev Boldklub Prototype loaded successfully.');
});
