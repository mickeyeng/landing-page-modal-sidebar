console.log('working!');

const sidebarToggle = document.getElementById('toggle');
const modalClose = document.getElementById('close');
const modalOpen = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle nav
sidebarToggle.addEventListener('click', () => {
  console.log('clicked!');
  document.body.classList.toggle('show-nav');
});

// show modal
modalOpen.addEventListener('click', () => {
  console.log('clicked');
  modal.classList.add('show-modal');
});

//close modal
modalClose.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

// Hide modal on outside click
window.addEventListener('click', e => {
  e.target === modal ? modal.classList.remove('show-modal') : false;
});
