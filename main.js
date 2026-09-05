/* Progressive enhancement only — the site works fine with JS disabled. */
(function () {
  'use strict';

  // Footer year, so it never goes stale.
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Highlight the nav link for whichever section is currently on screen.
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.topnav a[href^="#"]')
  );
  if (!links.length || !('IntersectionObserver' in window)) return;

  var byId = {};
  var sections = [];

  links.forEach(function (link) {
    var id = link.getAttribute('href').slice(1);
    var section = document.getElementById(id);
    if (!section) return;
    byId[id] = link;
    sections.push(section);
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var link = byId[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('is-active'); });
          link.classList.add('is-active');
        }
      });
    },
    // Trigger when a section reaches the upper third of the viewport.
    { rootMargin: '-30% 0px -60% 0px' }
  );

  sections.forEach(function (section) { observer.observe(section); });
})();
