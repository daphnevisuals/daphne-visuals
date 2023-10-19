import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="burger"
export default class extends Controller {
  static targets = ["toggleMenu", "burgerAnimation"];

  connect() {
    console.log(this.burgerAnimationTarget);
  }
  menu() {
    this.toggleMenuTarget.classList.toggle("d-none");
    this.burgerAnimationTarget.classList.toggle("animate");
  }
}
