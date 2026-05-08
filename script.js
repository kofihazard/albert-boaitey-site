/* -----------------------------------------------------------
   ENABLE JS MODE IMMEDIATELY (no flicker)
----------------------------------------------------------- */
document.documentElement.classList.add('js-enabled');

/* -----------------------------------------------------------
   THEME SYSTEM
----------------------------------------------------------- */
function applyTheme(isDark) {
  const body = document.body;
  const toggle = document.getElementById('toggle-dark');

  if (isDark) {
    body.classList.add('dark');
    if (toggle) toggle.textContent = 'Light';
  } else {
    body.classList.remove('dark');
    if (toggle) toggle.textContent = 'Dark';
  }
}

function toggleDark() {
  const isDark = !document.body.classList.contains('dark');
  localStorage.setItem('darkMode', isDark ? '1' : '0');
  applyTheme(isDark);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('darkMode');
  const isDark = saved === '1';
  applyTheme(isDark);
});

/* -----------------------------------------------------------
   SCROLL REVEAL
----------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.05 });

  sections.forEach(section => observer.observe(section));
});
