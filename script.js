(function () {
  var path = location.pathname.split('/').pop() || 'index.html';
  var routeMap = {
    'index.html': 'home',
    '': 'home',
    'about.html': 'about',
    'programs.html': 'programs',
    'impact.html': 'impact',
    'contact.html': 'contact'
  };
  var current = routeMap[path] || 'home';

  document.querySelectorAll('nav.links a').forEach(function (a) {
    a.classList.toggle('active', a.getAttribute('data-route') === current);
  });

  var menuToggle = document.getElementById('menuToggle');
  var navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }
})();
