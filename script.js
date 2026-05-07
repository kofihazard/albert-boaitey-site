function toggleDark() {
  const body = document.body;
  const toggle = document.getElementById('toggle-dark');

  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');

  localStorage.setItem('darkMode', isDark ? '1' : '0');
  if (toggle) toggle.textContent = isDark ? 'Light' : 'Dark';
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('darkMode');
  const toggle = document.getElementById('toggle-dark');

  if (saved === '1') {
    document.body.classList.add('dark');
    if (toggle) toggle.textContent = 'Light';
  }
});
