var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    resistance: false,
    slidesPerGroup: 2,
    speed: 500,

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesOffsetBefore:50,
            slidesOffsetAfter:50,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesOffsetBefore:50,
            slidesOffsetAfter:50,
        },
        1536: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesOffsetBefore:50,
            slidesOffsetAfter:50,
        },
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
});

function openPopupMenu() {
    $('#popup_menu').slideDown()
};

function closePopupMenu() {
    $('#popup_menu').slideUp()
}
