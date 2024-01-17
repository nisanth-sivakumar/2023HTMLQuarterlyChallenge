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
  document.getElementById("examplesdiv").scrollIntoView({ behavior: "smooth" });
}

function lessons() {
  location.assign("lessons.html");
}

function index() {
  location.assign("index.html");
}
