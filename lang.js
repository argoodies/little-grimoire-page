// 双语切换：显示 .lang-zh / .lang-en，记住选择。
(function () {
  function apply(lang) {
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hans';
    document.querySelectorAll('.lang-zh').forEach(function (e) { e.style.display = lang === 'en' ? 'none' : ''; });
    document.querySelectorAll('.lang-en').forEach(function (e) { e.style.display = lang === 'en' ? '' : 'none'; });
    document.querySelectorAll('.langbtns button').forEach(function (b) {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    try { localStorage.setItem('lg-lang', lang); } catch (e) {}
  }
  var saved = 'zh';
  try { saved = localStorage.getItem('lg-lang') || (navigator.language || '').slice(0, 2) === 'en' ? 'en' : 'zh'; } catch (e) {}
  window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.langbtns button').forEach(function (b) {
      b.addEventListener('click', function () { apply(b.dataset.lang); });
    });
    apply(saved);
  });
})();
