(function() {
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, ' '));
      }
    }
    return '';
  }

  var utm_source = getQueryVariable('utm_source');

  if (utm_source) {
    var utmSourceField = document.querySelector('input[name="utm_source"]');
    if (utmSourceField) {
      utmSourceField.value = utm_source;
    } else {
      console.warn('UTM source field not found');
    }
  }
})();
