const NavPc = document.querySelector(".nav__list");
const NavMobile = document.querySelector(".nav__list--mobile");
NavMobile.innerHTML = NavPc.innerHTML;
const modalContainer = document.querySelector("#modal-container");
const modal = document.querySelector("#modal");
const modalClose = document.querySelector("#modal-close");
const modalOpen = document.querySelector("#modal-open");
const video = document.querySelector(".modal--video");
function OpenModal() {
  modalContainer.classList.add("show");
}
function hideModal() {
  modalContainer.classList.remove("show");
}
modalOpen.addEventListener("click", (e) => {
  e.preventDefault();
  OpenModal();
  if (video) {
    video.play().catch((error) => {
      console.log("Lỗi khi phát video" + error);
    });
  }
});
modalClose.addEventListener("click", (e) => {
  e.preventDefault();
  hideModal();
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
});
modalContainer.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    hideModal();
  }
});
modal.addEventListener("click", (e) => {
  e.stopPropagation();
});
