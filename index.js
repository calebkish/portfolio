var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var mediaQueryMinWidth = 1100;

class UI {
  static resizeProjDesc() {
    var projects = $$('.fcolumn .subsection p.desc');

    if ($('.page').offsetWidth >= mediaQueryMinWidth) {
      var max = 0;
      projects.forEach(function (project) {
        if (project.clientHeight > max)
          max = project.clientHeight;
      });

      projects.forEach(function (project) {
        project.style.minHeight = max + "px";
      });
    } else {
      projects.forEach(function (project) {
        project.style.minHeight = null;
      });
    }
  }
}

window.addEventListener("load", function () {
  UI.resizeProjDesc();
});

window.addEventListener("resize", function () {
  UI.resizeProjDesc();
});