const productContainers = [...document.querySelectorAll('.videos')];
const nxtbtn = [...document.querySelectorAll('.nxt-btn')];
const prebtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let ContainerDimension = item.getBoundingClientRect();
    let containerWidth = ContainerDimension.width;

    nxtbtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        console.log('clicked');
    })

    prebtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
        console.log('clicked');
    })
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });