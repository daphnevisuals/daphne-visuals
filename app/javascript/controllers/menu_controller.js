import gsap from "gsap";

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

const link = document.querySelectorAll("#gallery-links .gallery-link");
const linkHoverReveal = document.querySelectorAll(".hover-reveal");
const linkImages = document.querySelectorAll(".hidden-img");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("mousemove", (e) => {
    linkHoverReveal[i].style.opacity = 1;
    linkImages[i].style.transform = "scale(1, 1)";
    linkHoverReveal[i].style.left =
      e.clientX - linkHoverReveal.offsetWidth / 2 + "px";
    linkHoverReveal[i].style.top =
      e.clientY - linkHoverReveal.offsetWidth / 2 + "px";
  });

  link[i].addEventListener("mouseleave", (e) => {
    linkHoverReveal[i].style.opacity = 0;
    linkImages[i].style.transform = "scale(0.8, 0.8)";
  });
}
