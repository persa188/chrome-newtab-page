/*jshint esversion:6*/
var view = (function(window, constants){
  "use strict";

  var view = {};

  window.onload = function () {
    addThumbs()
  }

  var addThumbs = function () {
    var count;
    var container1 = document.getElementById("thumb-row-1");
    var container2 = document.getElementById("thumb-row-2");

    for (count = 0; count < 8; count ++) {
      var divctnr = document.createElement("div");
      divctnr.className = "thumb-container";
      divctnr.innerHTML = `
        <div class="thumb-title">
          <div>
          <img src="${constants.sites[count].favicon}" onerror="this.src='imgs/default_favico.png'"/>
          &nbsp;&nbsp;${constants.sites[count].title}
          </div>
          <i class="fa fa-times" style="display:none" aria-hidden="true"></i>
        </div>
        <div class="thumb">
          <img src="${constants.sites[count].img}" onerror="this.src='imgs/error-404.png'"/>
        </div>
      `;
      var uri = "window.location.href='"+constants.sites[count].url + "';";
      divctnr.setAttribute("onclick", uri);
      if (count < 4) {
        container1.appendChild(divctnr);
      } else {
        container2.appendChild(divctnr);
      }
    }
  }

  document.querySelector('body').addEventListener('submit', function(event) {
    event.preventDefault();
    if (event.target.id === "search-form") {
      var query = document.getElementById('searchbar').value;
      event.target.reset();
      window.location.href = "https://google.ca/#q="+query;
    }
  });

  return view;
}(window, constants));
