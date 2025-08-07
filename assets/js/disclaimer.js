(function() {
  function getBaseUrl() {
    var el = document.currentScript;
    if (!el) return '';
    return el.getAttribute('data-baseurl') || '';
  }
  var baseurl = getBaseUrl();

  function setAccepted() {
    try { localStorage.setItem('disclaimerAccepted', '1'); } catch (e) {}
  }
  function redirectToIntended() {
    var next = sessionStorage.getItem('intendedPath') || (baseurl || '/');
    if (/\/disclaimer(\.html)?$/i.test(next)) next = baseurl || '/';
    window.location.href = next;
  }

  var btn = document.getElementById('acceptDisclaimer');
  if (btn) {
    btn.addEventListener('click', function() {
      setAccepted();
      redirectToIntended();
    });
  }
})();
