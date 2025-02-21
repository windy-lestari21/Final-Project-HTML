// MOBILE NAVIGATION

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  // untuk menambahkan class nav-open pada bagian header agar dapat memperlihatkan menu navigasi jika nav tidak ada
  headerEl.classList.toggle("nav-open");
});

// smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// DROPDOWN NAV
const dropdownEl = document.querySelector(".dropdown");
const menuEl = document.querySelector(".dropdown__menu");
const triger = document.querySelector(".dropdown-open");

triger.addEventListener("click", function (e) {
  e.stopPropagation();

  const parent = this.parentNode.parentNode;
  const submenu = parent.children[1];

  if (submenu) {
    console.log(submenu);
    submenu.classList.toggle("show");
  }
});

dropdownEl.addEventListener("click", function () {
  menuEl.classList.toggle("dropdown-open");
});

// const dropdownEl = document.querySelectorAll(".dropdown");
// const menuEl = document.querySelector(".dropdown__menu");
// const triger = document.querySelector(".dropdown-open");

// make current year copyright
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;
