var Rubygems = {
  fetch: function(gem_name) {
    var _bm_request = new XMLHttpRequest();
    _bm_request.open("GET", "http://rubygemscounter.herokuapp.com/" + gem_name + ".json");
    _bm_request.setRequestHeader('Content-Type', 'application/json');
    _bm_request.onreadystatechange = function() {
      if (_bm_request.readyState == 4) {

          var totalDownloads = JSON.parse(_bm_request.responseText).total_downloads;
          var realName = gem_name.split("-")[0]
          document.write("<div id='rubygems_total_downloads'> The <a href='https://rubygems.org/gems/" + realName + "' target='_blank'>" + realName +  "</a> gem has " + totalDownloads + " downloads.</div>");
      }
    };
    _bm_request.send();
  }
}