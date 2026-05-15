/* ===== BLOG - MAIN.JS ===== */

// ── Page Router ──────────────────────────────────────────────
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');

function navigateTo(pageId, fromSearch = false) {
  pages.forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  navLinks.forEach(l => {
    l.classList.toggle('active', l.dataset.page === pageId);
  });
  // Update URL hash
  history.pushState({ page: pageId }, '', '#' + pageId);

  // Clear search on navigation
  if (!fromSearch) {
    const searchInput = document.getElementById('navSearchInput');
    if (searchInput) {
      searchInput.value = '';
      document.querySelectorAll('.blog-card').forEach(card => card.style.display = '');
    }
  }
}

// Handle browser back/forward
window.addEventListener('popstate', e => {
  const page = (e.state && e.state.page) || 'home';
  navigateTo(page);
});

// ── Nav links ─────────────────────────────────────────────────
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(link.dataset.page);
    // Close mobile menu
    document.getElementById('navList').classList.remove('open');
  });
});

// ── Hamburger menu ────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('navList');
hamburger.addEventListener('click', () => navList.classList.toggle('open'));

// ── Sticky navbar style ───────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// ── Card click → post page ────────────────────────────────────
document.querySelectorAll('[data-goto]').forEach(el => {
  el.addEventListener('click', () => navigateTo(el.dataset.goto));
});

// ── "Read more" / "back" buttons ─────────────────────────────
document.querySelectorAll('[data-nav]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(btn.dataset.nav);
  });
});

// ── Search bar filter ─────────────────────────────────────────
const navSearchInput = document.getElementById('navSearchInput');

function performSearch(q) {
  q = q.toLowerCase();
  document.querySelectorAll('.blog-card').forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(q) ? '' : 'none';
  });
}

if (navSearchInput) {
  // Filtrar resultados en tiempo real
  navSearchInput.addEventListener('input', () => {
    // Si estamos en otra página, navegar a home
    const homePage = document.getElementById('home');
    if (!homePage.classList.contains('active')) {
      navigateTo('home', true);
    }
    performSearch(navSearchInput.value);
  });

  // Hacer scroll hacia los artículos SOLO al presionar Enter
  navSearchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevenir comportamiento por defecto
      const homePage = document.getElementById('home');
      if (!homePage.classList.contains('active')) {
        navigateTo('home', true);
      }
      setTimeout(() => {
        const blogSection = document.getElementById('blog-section');
        if (blogSection) {
          // Calculamos el offset considerando el navbar fijo
          const y = blogSection.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    }
  });
}

// ── Scroll-reveal cards ───────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.blog-card, .skill-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(card);
});

// ── Init: load page from hash ─────────────────────────────────
const initialPage = location.hash.replace('#', '') || 'home';
navigateTo(initialPage);

// ── Current year in footer ────────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
