(function () {
  var toc = document.getElementById('toc');
  function syncToc() { if (window.innerWidth <= 900) toc.removeAttribute('open'); else toc.setAttribute('open', ''); }
  syncToc(); window.addEventListener('resize', syncToc);
  var page = location.pathname.split('/').pop() || 'index.html';
  var links = Array.prototype.slice.call(document.querySelectorAll('.docs-nav ul ul a')).filter(function (a) {
    return a.getAttribute('href').split('#')[0] === page;
  });
  var targets = links.map(function (a) { return document.getElementById(a.getAttribute('href').split('#')[1]); });
  function onScroll() {
    var y = window.scrollY + 150, current = -1;
    targets.forEach(function (t, i) { if (t && t.offsetTop <= y) current = i; });
    links.forEach(function (a, i) { a.classList.toggle('active', i === current); });
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  var nav = document.querySelector('.docs-nav'), cur = document.querySelector('.docs-nav li.current');
  if (cur && window.innerWidth > 900 && cur.offsetTop > nav.clientHeight / 2) nav.scrollTop = cur.offsetTop - 20;
})();
