import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="burger"
export default class extends Controller {
  static targets = ["toggleMenu"];

  connect() {}
  menu() {
    this.toggleMenuTarget.classList.toggle("d-none");
  }
}
