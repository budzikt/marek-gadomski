var BLOCK_TAGS = ['DIV', 'P', 'SECTION', 'TABLE', 'THEAD', 'TBODY', 'TR', 'TD', 'TH', 'FOOTER', 'HEADER', 'STRONG', 'UL', 'OL', 'NAV'];

var LANG_KEY = 'marek-lang';
var SUPPORTED = ['pl', 'en', 'de'];

function getLang() {
  var stored;
  try { stored = localStorage.getItem(LANG_KEY); } catch (e) { stored = null; }
  return SUPPORTED.indexOf(stored) !== -1 ? stored : 'pl';
}

function applyLang(lang) {
  document.querySelectorAll('[data-lang]').forEach(function(el) {
    var show = el.getAttribute('data-lang') === lang;
    // Elements that opt into a specific display mode (e.g. flex/grid) declare it via data-display.
    var shownDisplay = el.getAttribute('data-display');
    if (!shownDisplay) {
      shownDisplay = BLOCK_TAGS.indexOf(el.tagName) !== -1 ? 'block' : 'inline';
    }
    el.style.display = show ? shownDisplay : 'none';
  });
}

function setLang(lang) {
  if (SUPPORTED.indexOf(lang) === -1) { lang = 'pl'; }
  applyLang(lang);
  document.querySelectorAll('#lang-bar button').forEach(function(b) {
    b.classList.toggle('active', b.id === 'btn-' + lang);
  });
  document.documentElement.lang = lang;
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  // Let page-specific scripts (e.g. the game) react to a language change.
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
}

// ── Floating CTA visibility (only on pages that have it) ──
var floatCta = document.getElementById('float-cta');
var headerEl = document.querySelector('header');
var ctaBoxEl = document.querySelector('.cta-box');

if (floatCta && headerEl && ctaBoxEl) {
  var headerVisible = true;
  var bottomVisible = false;

  var updateFloat = function() {
    var show = !headerVisible && !bottomVisible;
    floatCta.style.opacity       = show ? '1' : '0';
    floatCta.style.pointerEvents = show ? 'auto' : 'none';
    floatCta.style.transform     = show ? 'translateY(0)' : 'translateY(12px)';
  };

  new IntersectionObserver(function(entries) {
    headerVisible = entries[0].isIntersecting;
    updateFloat();
  }, { threshold: 0 }).observe(headerEl);

  new IntersectionObserver(function(entries) {
    bottomVisible = entries[0].isIntersecting;
    updateFloat();
  }, { threshold: 0.1 }).observe(ctaBoxEl);
}

// ── Init on page load ──
setLang(getLang());

if (window.GLightbox && document.querySelector('.glightbox')) {
  GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true });
}
