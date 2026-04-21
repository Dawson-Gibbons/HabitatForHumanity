// Bootstrap. Ties together language, seasonal, search, and renderers.

function renderAll() {
  applyTranslations();
  renderSeasonal();
  renderCategoryGrid();
  renderLibrary();
  renderEmergency();
  renderStepViewer();
  updateLangToggleFace();
}

function updateLangToggleFace() {
  const toggle = document.getElementById('lang-toggle');
  if (!toggle) return;
  const active = getLang();
  const labels = toggle.querySelectorAll('.lang-pill');
  labels.forEach(el => {
    el.classList.toggle('is-active', el.dataset.lang === active);
  });
}

function initSmoothScroll() {
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // close the search panel after a jump
    const results = document.getElementById('search-results');
    if (results) results.classList.remove('is-active');
  });
}

function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || els.length === 0) {
    els.forEach(el => el.classList.add('is-revealed'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

function initStatBadges() {
  const count = MODULES.length;
  const cats = CATEGORIES.length;
  const modEl = document.getElementById('stat-modules');
  const catEl = document.getElementById('stat-categories');
  if (modEl) modEl.textContent = String(count);
  if (catEl) catEl.textContent = String(cats);
}

function boot() {
  document.documentElement.lang = getLang();
  initLanguageToggle();
  initSearch();
  initSmoothScroll();
  initStatBadges();
  renderAll();
  initReveal();

  document.addEventListener('lang:change', () => {
    renderSeasonal();
    renderCategoryGrid();
    renderLibrary();
    renderEmergency();
    renderStepViewer();
    updateLangToggleFace();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
