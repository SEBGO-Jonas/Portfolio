(function () {
  'use strict';

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Project gallery (Projet 3)
  document.querySelectorAll('[data-gallery]').forEach(function (gallery) {
    var track = gallery.querySelector('[data-gallery-track]');
    var slides = Array.prototype.slice.call(gallery.querySelectorAll('.gallery__slide'));
    var prevBtn = gallery.querySelector('[data-gallery-prev]');
    var nextBtn = gallery.querySelector('[data-gallery-next]');
    var dotsWrap = gallery.querySelector('[data-gallery-dots]');
    var index = 0;

    if (!track || !slides.length) return;

    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'gallery__dot';
      dot.setAttribute('aria-label', 'Aller à l\'image ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); });
      dotsWrap.appendChild(dot);
    });
    var dots = Array.prototype.slice.call(dotsWrap.querySelectorAll('.gallery__dot'));

    function render() {
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      dots.forEach(function (d, i) {
        d.setAttribute('aria-current', i === index ? 'true' : 'false');
      });
    }
    function goTo(i) {
      index = (i + slides.length) % slides.length;
      render();
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(index - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(index + 1); });

    render();
  });
})();
