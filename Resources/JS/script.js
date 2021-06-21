// JAVASCRIPT CODE:
// SELECTORS:
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo-link");
const navLinks = document.querySelector(".nav-links");
const sections = document.querySelectorAll("section");
// SCROLL INTO VIEW:
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
logo.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
});
// STICKY NAV:
const navHeight = nav.getBoundingClientRect().height;
const sticky = function (entry) {
  const [entries] = entry;
  if (!entries.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
const observerHeader = new IntersectionObserver(sticky, {
  root: null,
  rootMargin: `-${navHeight}px`,
  threshold: 0,
});

observerHeader.observe(header);
// SECTION SCROLL ANIMATION:
sections.forEach((section) => section.classList.add("section-hidden"));
const sectionScroll = function (entry, observer) {
  const [entries] = entry;
  if (!entries.isIntersecting) return;
  entries.target.classList.remove("section-hidden");
  observer.unobserve(entries.target);
};
const ObserverSection = new IntersectionObserver(sectionScroll, {
  root: null,
  threshold: 0.03,
});
sections.forEach((section) => ObserverSection.observe(section));
