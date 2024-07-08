const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");
const btn = document.getElementById("mobile-btn");

const popoverBackdrop = document.getElementById("popover-backdrop");
const popoverPanel = document.getElementById("popover-panel");

function open() {
  popoverBackdrop.removeAttribute("data-closed");
  popoverBackdrop.setAttribute("data-open", "");
  popoverBackdrop.classList.remove("hidden");
  popoverPanel.classList.remove("hidden");
  iconClose.classList.remove("scale-90");
  iconClose.classList.remove("opacity-0");
  iconOpen.classList.add("scale-90");
  iconOpen.classList.add("opacity-0");
}

function close() {
  popoverBackdrop.removeAttribute("data-open");
  popoverBackdrop.setAttribute("data-closed", "");
  popoverBackdrop.classList.add("hidden");
  popoverPanel.classList.add("hidden");
  iconOpen.classList.remove("scale-90");
  iconOpen.classList.remove("opacity-0");
  iconClose.classList.add("scale-90");
  iconClose.classList.add("opacity-0");
}

btn.addEventListener("click", () => {
  if (popoverBackdrop.hasAttribute("data-open")) {
    close();
  } else {
    open();
  }
});

popoverBackdrop.addEventListener("click", () => {
  close();
});
