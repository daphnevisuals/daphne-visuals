// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import gsap from "gsap";
import { register } from "swiper/element/bundle";
register();

// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
// tl.fromTo(
//   ".home-navbar-line",
//   {
//     y: -100,
//     opacity: 0,
//   },
//   {
//     y: 0,
//     opacity: 1,
//     duration: 2,
//   },
//   "-=1"
// );

// tl.fromTo(
//   ".home-navbar",
//   {
//     y: -20,
//     opacity: 0,
//   },
//   {
//     y: 0,
//     opacity: 1,
//     duration: 2,
//   },
//   "-=1"
// );

// tl.fromTo(
//   ".homepage-h1",
//   {
//     y: -100,
//     opacity: 0,
//   },
//   {
//     y: 0,
//     opacity: 1,
//     duration: 3,
//   },
//   "-=1.5"
// );

// tl.fromTo(
//   ".homepage-p",
//   {
//     y: -80,
//     opacity: 0,
//   },
//   {
//     y: 0,
//     opacity: 1,
//     duration: 3,
//   },
//   "-=2"
// );

// tl.fromTo(
//   ".tools",
//   {
//     y: -50,
//     opacity: 0,
//   },
//   {
//     y: 0,
//     opacity: 1,
//     duration: 3,
//   },
//   "-=2"
// );
