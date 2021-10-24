const Griffin_EnerG = "https://griffinec.com/";

window.addEventListener("load", function () {
  // Logo
  const container = document.querySelector("div.d-flex");
  const logo = document.querySelector("img");
  logo.src = "/logo.svg";
  logo.alt = "Griffin EnerG";
  const logo_link = document.createElement("a");
  logo_link.href = Griffin_EnerG;
  logo_link.target = "_blank";
  logo_link.appendChild(logo);
  container.prepend(logo_link);

  // Favicon and Title
  const title = document.querySelector("title");
  title.innerText = "Griffin EnerG | Visualizing High-Dimensinal Datasets";
  const link = document.querySelector("link");
  link.href = "images/favicon.png";

  // Fonts
  const head = document.querySelector("head");
  const link1 = document.createElement("LINK");
  link1.setAttribute("rel", "preconnect");
  link1.setAttribute("href", "https://fonts.googleapis.com");
  const link2 = document.createElement("LINK");
  link2.setAttribute("rel", "preconnect");
  link2.setAttribute("href", "https://fonts.gstatic.com");
  link2.setAttribute("crossorigin", "anonymous");
  const link3 = document.createElement("LINK");
  link3.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Roboto:wght@300&display=swap"
  );
  link3.setAttribute("rel", "stylesheet");
  console.log(link3);
  head.prepend(link1, link2, link3);
});
