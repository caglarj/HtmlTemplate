window.onload = function() {
    var nav = document.querySelector('.navigation');
    var navCopy = nav.cloneNode(true);
    var footnote = document.querySelector('hr + dl');
    footnote.parentNode.insertBefore(navCopy, footnote);
  };