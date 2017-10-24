window.onload = function() {
  var md = document.getElementById("md");
  var data = markdown.toHTML(md.textContent);
  console.log(data);
  md.innerHTML = data;
}
