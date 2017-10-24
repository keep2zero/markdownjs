window.onload = function() {
  var md = document.getElementById("md");
  var data = markdown.toHTML(md.innerHTML);
  md.innerHTML = data;
}
