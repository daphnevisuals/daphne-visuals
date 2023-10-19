import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="burger"
export default class extends Controller {
  static targets = ["toggleMenu"];

  connect() {}
  menu() {
    console.log("button clicked");
    console.log(this.toggleMenuTarget);
    this.toggleMenuTarget.classList.toggle("d-none");
  }
}
