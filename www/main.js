var BLOCK_TAGS = ['DIV', 'P', 'SECTION', 'TABLE', 'THEAD', 'TBODY', 'TR', 'TD', 'TH', 'FOOTER', 'HEADER', 'STRONG'];

function applyLang(lang) {
  document.querySelectorAll('[data-lang]').forEach(function(el) {
    var show = el.getAttribute('data-lang') === lang;
    var isBlock = BLOCK_TAGS.indexOf(el.tagName) !== -1;
    el.style.display = show ? (isBlock ? 'block' : 'inline') : 'none';
  });
}

function setLang(lang) {
  applyLang(lang);
  document.querySelectorAll('#lang-bar button').forEach(function(b) {
    b.classList.toggle('active', b.id === 'btn-' + lang);
  });
  document.documentElement.lang = lang;
}

// ── Floating CTA visibility ──
var floatCta = document.getElementById('float-cta');
var headerVisible = true;
var bottomVisible = false;

function updateFloat() {
  var show = !headerVisible && !bottomVisible;
  floatCta.style.opacity       = show ? '1' : '0';
  floatCta.style.pointerEvents = show ? 'auto' : 'none';
  floatCta.style.transform     = show ? 'translateY(0)' : 'translateY(12px)';
}

new IntersectionObserver(function(entries) {
  headerVisible = entries[0].isIntersecting;
  updateFloat();
}, { threshold: 0 }).observe(document.querySelector('header'));

new IntersectionObserver(function(entries) {
  bottomVisible = entries[0].isIntersecting;
  updateFloat();
}, { threshold: 0.1 }).observe(document.querySelector('.cta-box'));

// ── Init on page load ──
setLang('pl');
GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true });
