import { Controller } from "@hotwired/stimulus";
import gsap from "gsap";
// Connects to data-controller="section-content"
export default class extends Controller {
  connect() {
    const links = Array.from(
      document.querySelectorAll("#gallery-links .gallery-link")
    );

    // Make section appear
    links.forEach((linkItem) => {
      linkItem.addEventListener("click", (e) => {
        // making white navbar
        const navbarLine = document.querySelector(".navbar-line");
        navbarLine.classList.remove("black");
        navbarLine.classList.add("white");

        const navbar = document.querySelector(".navbar");
        navbar.classList.remove("black-color");
        navbar.classList.add("white-color");

        const burgerLines = document.querySelector(".burger-line");
        burgerLines.classList.add("white");

        // Making projects appear when I click on respective link
        const contentWrapper = document.querySelector(".content-wrap");
        const contentProjectWrapper = document.querySelector(
          ".content-wrap.projects"
        );
        const documentBody = document.querySelector("body");
        documentBody.classList.add("black-bg");

        const menu = document.querySelector(".menu");
        menu.classList.add("d-none");

        contentWrapper.classList.remove("d-none");
        contentProjectWrapper.classList.add("content-wrap-projects");
        contentProjectWrapper.classList.remove(".d-none");

        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
        tl.fromTo(
          ".content-wrap",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
          }
        );
      });

      // On click of a link, in a section, make the right data category appear on click
      linkItem.addEventListener("click", (e) => {
        // Carousel

        // const linkCategory = e.currentTarget.dataset.category;
        const linkCategory = linkItem.dataset.category;
        const carousels = Array.from(document.querySelectorAll(".carousel"));
        const contentCarousel = carousels.find(
          (carousel) => carousel.dataset.category === linkCategory
        );
        contentCarousel.classList.remove("d-none");

        // Content Menu (3rd nav)

        const contentMenuLinks = Array.from(
          document.querySelectorAll(".content-menu__link")
        );
        const contentMenu = contentMenuLinks.find(
          (contentmenulink) => contentmenulink.dataset.category === linkCategory
        );
        contentMenu.classList.add("active");
      });
    });

    const contentMenuLinks = document.querySelectorAll(".content-menu__link");

    contentMenuLinks.forEach((contentMenuLink) => {
      contentMenuLink.addEventListener("click", (e) => {
        const active = document.querySelector(".active");
        if (active) {
          active.classList.remove("active");
        } else {
          e.currentTarget.classList.add("active");
        }
        contentMenuLink.classList.add("active");
        const linkCategory = contentMenuLink.dataset.category;
        const carousels = Array.from(document.querySelectorAll(".carousel"));
        const contentCarousel = carousels.find(
          (carousel) => carousel.dataset.category === linkCategory
        );
        const allCarouselSiblings = carousels.filter(
          (carousel) => carousel != contentCarousel
        );
        allCarouselSiblings.forEach((allCarouselSibling) => {
          allCarouselSibling.classList.add("d-none");
        });
        contentCarousel.classList.remove("d-none");
      });
    });
  }
}
