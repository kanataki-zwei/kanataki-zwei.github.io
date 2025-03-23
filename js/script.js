// Dark mode toggle
const toggleBtn = document.getElementById('toggleDark');
toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

// Scroll to top functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => {
  scrollTopBtn.classList.toggle("hidden", window.scrollY < 200);
};
scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Filter projects
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    filterButtons.forEach(btn => btn.classList.remove('active-filter'));
    button.classList.add('active-filter');

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      card.classList.toggle('hidden', filter !== 'all' && category !== filter);
    });
  });
});
