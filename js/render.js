// Dynamic renderers — category grid, full library, emergency strip, step demo.
// Every renderer re-runs on lang:change so the UI stays in sync.

function renderCategoryGrid() {
  const grid = document.getElementById('category-grid');
  if (!grid) return;
  const lang = getLang();

  grid.innerHTML = CATEGORIES.map((cat, i) => {
    const count = MODULES.filter(m => m.category === cat.id).length;
    const name = cat[`name_${lang}`];
    const blurb = cat[`blurb_${lang}`];
    const word = count === 1 ? t('categories.modules.one', lang) : t('categories.modules.many', lang);
    return `
      <a href="#library-${cat.id}" class="category-card" style="--stagger:${i * 60}ms">
        <div class="category-card-icon" aria-hidden="true">${cat.icon}</div>
        <div class="category-card-body">
          <h3 class="category-card-title">${escapeHtml(name)}</h3>
          <p class="category-card-blurb">${escapeHtml(blurb)}</p>
        </div>
        <div class="category-card-foot">
          <span class="category-card-count">${count} ${word}</span>
          <span class="category-card-arrow" aria-hidden="true">→</span>
        </div>
      </a>
    `;
  }).join('');
}

function typeBadgeKey(type) {
  if (type === 'drag-scene') return 'library.badge.drag';
  if (type === 'checklist') return 'library.badge.checklist';
  return 'library.badge.steps';
}

function renderLibrary() {
  const root = document.getElementById('library-root');
  if (!root) return;
  const lang = getLang();

  root.innerHTML = CATEGORIES.map(cat => {
    const mods = MODULES.filter(m => m.category === cat.id);
    const name = cat[`name_${lang}`];
    const blurb = cat[`blurb_${lang}`];

    const cards = mods.map(m => {
      const title = m[`title_${lang}`];
      const summary = m[`summary_${lang}`];
      const badge = t(typeBadgeKey(m.type), lang);
      return `
        <article class="module-card module-card--${m.type}">
          <div class="module-card-type">
            <span class="module-type-dot" aria-hidden="true"></span>
            ${escapeHtml(badge)}
          </div>
          <h4 class="module-card-title">${escapeHtml(title)}</h4>
          <p class="module-card-summary">${escapeHtml(summary)}</p>
          <div class="module-card-meta">
            <span class="module-card-mins">${m.minutes} ${t('library.minutes', lang)}</span>
            <span class="module-card-id">${m.id}</span>
          </div>
        </article>
      `;
    }).join('');

    return `
      <section class="library-section" id="library-${cat.id}">
        <header class="library-section-header">
          <span class="library-section-icon" aria-hidden="true">${cat.icon}</span>
          <div>
            <h3 class="library-section-title">${escapeHtml(name)}</h3>
            <p class="library-section-blurb">${escapeHtml(blurb)}</p>
          </div>
          <span class="library-section-count">${mods.length}</span>
        </header>
        <div class="module-grid">
          ${cards}
        </div>
      </section>
    `;
  }).join('');
}

function renderEmergency() {
  const grid = document.getElementById('emergency-grid');
  if (!grid) return;
  const lang = getLang();

  grid.innerHTML = EMERGENCIES.map(e => {
    const label = e[`label_${lang}`];
    return `
      <a href="#library" class="emergency-tile" data-module-id="${e.link}">
        <span class="emergency-tile-icon" aria-hidden="true">${e.icon}</span>
        <span class="emergency-tile-label">${escapeHtml(label)}</span>
      </a>
    `;
  }).join('');
}

// ---- Step viewer demo ----
let stepIndex = 0;

function renderStepViewer() {
  const root = document.getElementById('step-viewer');
  if (!root) return;
  const lang = getLang();
  const data = SAMPLE_STEPS[lang];
  const step = data.steps[stepIndex];
  const total = data.steps.length;

  const tipHtml = step.tip
    ? `<div class="step-tip"><span class="step-tip-label">${t('sample.tip', lang)}</span> ${escapeHtml(step.tip)}</div>`
    : '';

  root.innerHTML = `
    <div class="step-progress" aria-label="${t('sample.step', lang)} ${stepIndex + 1} ${t('sample.of', lang)} ${total}">
      ${data.steps.map((_, i) => `<span class="step-pip ${i === stepIndex ? 'is-active' : ''} ${i < stepIndex ? 'is-past' : ''}"></span>`).join('')}
    </div>
    <div class="step-illustration" aria-hidden="true">${step.illustration}</div>
    <div class="step-badge">${t('sample.step', lang)} ${stepIndex + 1} · ${total}</div>
    <h3 class="step-headline">${escapeHtml(step.headline)}</h3>
    <p class="step-body">${escapeHtml(step.body)}</p>
    ${tipHtml}
    <div class="step-nav">
      <button type="button" class="btn btn-ghost" id="step-prev" ${stepIndex === 0 ? 'disabled' : ''}>
        <span aria-hidden="true">←</span> ${t('sample.prev', lang)}
      </button>
      <span class="step-counter">${stepIndex + 1} / ${total}</span>
      <button type="button" class="btn btn-primary" id="step-next" ${stepIndex === total - 1 ? 'disabled' : ''}>
        ${t('sample.next', lang)} <span aria-hidden="true">→</span>
      </button>
    </div>
  `;

  const prev = document.getElementById('step-prev');
  const next = document.getElementById('step-next');
  if (prev) prev.addEventListener('click', () => { if (stepIndex > 0) { stepIndex--; renderStepViewer(); } });
  if (next) next.addEventListener('click', () => { if (stepIndex < total - 1) { stepIndex++; renderStepViewer(); } });

  const title = document.getElementById('step-module-title');
  if (title) title.textContent = data.title;
  const intro = document.getElementById('step-intro');
  if (intro) intro.textContent = data.intro;
}
