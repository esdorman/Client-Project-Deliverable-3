document.addEventListener('DOMContentLoaded', () => {
  // Dark mode toggle setup
  const toggleSwitch = document.getElementById('dark-mode-toggle');
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    if (toggleSwitch) {
      toggleSwitch.checked = currentTheme === 'dark';
    }
  }

  if (toggleSwitch) {
    toggleSwitch.addEventListener('change', () => {
      if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    });
  }
  
  // Navigation menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('visible');
    });
  }

  // Scroll-to-top button
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.innerText = '↑ Top';
  scrollToTopButton.classList.add('scroll-to-top');
  document.body.appendChild(scrollToTopButton);

  // Show scroll-to-top button when scrolled down
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopButton.classList.add('visible');
    } else {
      scrollToTopButton.classList.remove('visible');
    }
  });

  // Scroll to top when button is clicked
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Highlight PR athletes
  const prAthletes = document.querySelectorAll('.summary .athlete');
  prAthletes.forEach(athlete => {
    athlete.addEventListener('click', () => {
      const athleteName = athlete.textContent;
      const athleteCards = document.querySelectorAll('#individual-results .athlete');

      athleteCards.forEach(card => {
        const cardName = card.querySelector('figcaption').textContent;
        if (cardName === athleteName) {
          card.classList.toggle('highlight');
        }
      });
    });
  });

  // Handle active navigation link based on scroll position
  const sections = document.querySelectorAll('main > section');
  const navLinks = document.querySelectorAll('nav ul li a');

  // Exclude the first nav link (Home Page)
  const filteredNavLinks = Array.from(navLinks).slice(1);

  function changeActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    filteredNavLinks.forEach((link) => link.classList.remove('active'));
    if (index >= 0) {
      filteredNavLinks[index].classList.add('active');
    }
  }

  changeActiveLink();
  window.addEventListener('scroll', changeActiveLink);
});