(function () {
  var LANGS = ['ja', 'en', 'zh'];
  function apply(l) {
    if (LANGS.indexOf(l) < 0) l = 'ja';
    document.documentElement.setAttribute('data-lang', l);
    document.documentElement.setAttribute('lang', l === 'zh' ? 'zh-Hant' : l);
    document.querySelectorAll('.langbtns button').forEach(function (b) {
      b.classList.toggle('active', b.dataset.lang === l);
    });
  }
  var saved = 'ja';
  try { saved = localStorage.getItem('lang') || 'ja'; } catch (e) {}
  apply(saved);
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.langbtns button');
    if (!b) return;
    var l = b.dataset.lang;
    try { localStorage.setItem('lang', l); } catch (e) {}
    apply(l);
  });
})();
