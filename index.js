console.log('working!');

const sidebarToggle = document.getElementById('toggle');
const sidebarClose = document.getElementById('close');
const sidebarOpen = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle nav

sidebarToggle.addEventListener('click', () => {
  console.log('clicked!');
  document.body.classList.toggle('show-nav');
});
