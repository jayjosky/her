var routes = ['home','about','programs','contact'];
  function render(){
    var hash = (location.hash || '#home').replace('#','');
    if(routes.indexOf(hash) === -1) hash = 'home';
    routes.forEach(function(r){
      document.getElementById('page-'+r).classList.toggle('active', r === hash);
    });
    document.querySelectorAll('nav.links a').forEach(function(a){
      a.classList.toggle('active', a.getAttribute('data-route') === hash);
    });
    document.getElementById('navLinks').classList.remove('open');
    window.scrollTo({top:0, behavior:'instant' in window ? 'instant' : 'auto'});
  }
  window.addEventListener('hashchange', render);
  document.getElementById('menuToggle').addEventListener('click', function(){
    document.getElementById('navLinks').classList.toggle('open');
  });
  render();