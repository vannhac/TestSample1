const NavPc = document.querySelector(".nav__list");
const NavMobile = document.querySelector(".nav__list--mobile");
NavMobile.innerHTML = NavPc.innerHTML;
const modalContainer = document.querySelector("#modal-container");
const modal = document.querySelector("#modal");
const modalClose = document.querySelector("#modal-close");
const modalOpen = document.querySelector("#modal-open");
const video = document.querySelector(".modal--video");
const cus__pre = document.querySelector(".cus__pre");
const cus__content = document.querySelectorAll(".cus__content");
const cus__last = document.querySelector(".cus__last");
const feature__link = document.querySelectorAll(".feature__link");
const feature__bottom = document.querySelectorAll(".feature__bottom");

let currentIndex = 0;
/* 
in: nut len,, xuong , vs list
out
ans:
1 so do current, khi toi max thi dung, 0 thi dung
pre thi +1, last thi -1
co current roi thi => xuat hien cai so no thi them class vao thang co index o trong thoi
1 ham de hien thong tin, de tra in dex khi pre vs last
su kien la click vao len vs xuong
*/
function displayCustomer() {
  // xoa het thang active
  cus__content.forEach((item) => {
    item.classList.remove("cus-active");
  });
  cus__content[currentIndex].classList.add("cus-active");
}
function updateButtons() {
  cus__pre.disabled = currentIndex === 0; // Vô hiệu hóa nút Previous khi ở slide đầu
  cus__last.disabled = currentIndex === cus__content.length - 1; // Vô hiệu hóa nút Next khi ở slide cuối
}
function ChangeStep(a) {
  currentIndex += a;
  console.log(currentIndex);

  displayCustomer();
  updateButtons();
}

cus__pre.addEventListener("click", (e) => ChangeStep(-1));
cus__last.addEventListener("click", () => ChangeStep(1));
// Xoá các featured__bottom
function removeActive() {
  feature__bottom.forEach((item) => {
    item.classList.remove("active");
  });
}

// Hiệu ứng side show ở properties vs  hero
const rankList = document.querySelectorAll(".rankList");
rankList.forEach((rank) => {
  const heroSlides = rank.querySelectorAll(".slide");

  const heroValue = rank.querySelector(".value");

  const pagination__hero = rank.querySelectorAll(".pagination__item");
  function showSlideHero(index) {
    heroSlides.forEach((slide) => slide.classList.remove("active"));
    //   Hiển thị slide hiện tại
    heroSlides[index].classList.add("active");
  }
  function showPagiHero(index) {
    pagination__hero.forEach((item) => item.classList.remove("hero__active"));
    //   Hiển thị slide hiện tại
    pagination__hero[index].classList.add("hero__active");
  }
  function valueBar(index) {
    let result = ((index + 1) * 100) / pagination__hero.length;

    heroValue.style.width = result + "%";
  }
  pagination__hero.forEach((item, index) => {
    //
    item.addEventListener("click", (e) => {
      e.preventDefault();
      showPagiHero(index);
      // Hiện hình theo index
      showSlideHero(index);
      // thanh menu sẽ chuyển
      valueBar(index);
    });
  });
});

function OpenModal() {
  modalContainer.classList.add("show");
  if (video) {
    video.play().catch((error) => {
      console.log("Lỗi khi phát video" + error);
    });
  }
}
function hideModal() {
  modalContainer.classList.remove("show");
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}
modalOpen.addEventListener("click", (e) => {
  e.preventDefault();
  OpenModal();
});
modalClose.addEventListener("click", (e) => {
  e.preventDefault();
  hideModal();
});
modalContainer.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    hideModal();
  }
});
modal.addEventListener("click", (e) => {
  e.stopPropagation();
});
feature__link.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    removeActive();
    feature__bottom[index].classList.add("active");
  });
});
