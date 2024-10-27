document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('dark-mode-toggle');

  // Check for saved user preference, if any (stored in localStorage)
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
});