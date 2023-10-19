import gsap from "gsap";
import { Controller } from "@hotwired/stimulus";
export default class extends Controller {
  connect() {}
}

// tl.to(".hide", {
//   y: "0",
//   duration: 4,
//   opacity: 1,
// });

// tl.to(".preloader", {
//   duration: 2,
//   ease: "power1.in",
//   opacity: 0,
// });

// tl.fromTo(
//   ".preloader",
//   {
//     y: 0,
//   },
//   {
//     y: 100,

//     duration: 0.1,
//   },
//   "+=0.1"
// );

//     // Code pour charger le preloader
//     document.addEventListener("DOMContentLoaded", function () {
//       var preloader = document.querySelector(".preloader");

//       // Vérifiez si le preloader doit être animé
//       var shouldAnimatePreloader =
//         preloader && !sessionStorage.getItem("preloaderPlayed");

//       if (shouldAnimatePreloader) {
//         // Code GSAP pour l'animation du preloader
//         // ...

//         const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

//         tl.to(".hide", {
//           y: "0",
//           duration: 4,
//           opacity: 1,
//         });

//         tl.to(".preloader", {
//           duration: 2,
//           ease: "power1.in",
//           opacity: 0,
//         });

//         tl.fromTo(
//           ".preloader",
//           {
//             y: 0,
//           },
//           {
//             y: 100,

//             duration: 0.1,
//           },
//           "+=0.1"
//         );

//         tl.fromTo(
//           ".home-navbar-line",
//           {
//             y: -100,
//             opacity: 0,
//           },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 2,
//           },
//           "-=1"
//         );

//         tl.fromTo(
//           ".home-navbar",
//           {
//             y: -100,
//             opacity: 0,
//           },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 2,
//           },
//           "-=1"
//         );

//         tl.fromTo(
//           ".homepage-h1",
//           {
//             y: -100,
//             opacity: 0,
//           },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 3,
//           },
//           "-=1.5"
//         );

//         tl.fromTo(
//           ".homepage-p",
//           {
//             y: -100,
//             opacity: 0,
//           },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 3,
//           },
//           "-=2"
//         );

//         tl.fromTo(
//           ".tools",
//           {
//             y: -100,
//             opacity: 0,
//           },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 3,
//           },
//           "-=2"
//         );

//         const items = document.querySelectorAll(".data");

//         gsap.from(items, {
//           textContent: 0,
//           duration: 3,
//           ease: "power1.in",
//           snap: { textContent: 1 },
//           stagger: {
//             each: 1.0,
//             onUpdate: function () {
//               this.targets()[0].innerHTML = numberWithCommas(
//                 Math.ceil(this.targets()[0].textContent)
//               );
//             },
//           },
//         });

//         // Enregistrez dans la sessionStorage que le preloader a été joué
//         sessionStorage.setItem("preloaderPlayed", "true");
//       }
//     });
//   }
// }
//

// const items = document.querySelectorAll(".data");

// gsap.from(items, {
//   textContent: 0,
//   duration: 3,
//   ease: "power1.in",
//   snap: { textContent: 1 },
//   stagger: {
//     each: 1.0,
//     onUpdate: function () {
//       this.targets()[0].innerHTML = numberWithCommas(
//         Math.ceil(this.targets()[0].textContent)
//       );
//     },
//   },
// });
