document.getElementById("about").addEventListener("click", about);
document.getElementById("faq").addEventListener("click", faq);
document.getElementById("whoweare").addEventListener("click", whoweare);
document.getElementById("examples").addEventListener("click", examples);
document.getElementById("lessons").addEventListener("click", lessons);

function about() {
  //scroll down to about on main page
  document.getElementById("aboutdiv").scrollIntoView({ behavior: "smooth" });
}

function faq() {
  //scroll down to FAQ on main page
  document.getElementById("faqdiv").scrollIntoView({ behavior: "smooth" });
}

function whoweare() {
  //scroll down to who we are section on main poge
  document.getElementById("whowearediv").scrollIntoView({ behavior: "smooth" });
}

function examples() {
  //uuuuuhhhhh
}

function lessons() {
  location.assign("lessons.html");
}
