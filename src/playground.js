const root = document.documentElement;
const themePicker = document.querySelector('#theme-picker');
const modeToggle = document.querySelector('#mode-toggle');
const swatches = document.querySelector('#swatches');

const TOKENS = [
  ['Background', '--bg'],
  ['Elevated', '--bg-elevated'],
  ['Panel', '--panel'],
  ['Text', '--text'],
  ['Muted text', '--text-muted'],
  ['Accent', '--accent'],
  ['Accent strong', '--accent-strong'],
  ['Success', '--success']
];

function readToken(token) {
  return getComputedStyle(root).getPropertyValue(token).trim();
}

function renderSwatches() {
  swatches.innerHTML = '';

  TOKENS.forEach(([label, token]) => {
    const card = document.createElement('article');
    card.className = 'swatch';

    const color = document.createElement('div');
    color.className = 'swatch-color';
    color.style.background = readToken(token);

    const meta = document.createElement('div');
    meta.className = 'swatch-meta';
    meta.innerHTML = `<strong>${label}</strong><span>${readToken(token)}</span>`;

    card.append(color, meta);
    swatches.append(card);
  });
}

function syncControls() {
  themePicker.value = root.dataset.theme || 'tenebrism';
}

themePicker.addEventListener('change', (event) => {
  root.dataset.theme = event.target.value;
  renderSwatches();
});

modeToggle.addEventListener('click', () => {
  root.dataset.mode = root.dataset.mode === 'light' ? 'dark' : 'light';
  renderSwatches();
});

syncControls();
renderSwatches();
