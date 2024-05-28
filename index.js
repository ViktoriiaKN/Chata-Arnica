// https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8

document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); // Save theme to localStorage
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); // Save theme to localStorage
    }
  };

  toggleSwitch.addEventListener('change', switchTheme, false);

  // Check local storage for theme preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
    }
  }
});
