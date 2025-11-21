// Start Slider JS
var swiper = new Swiper(".banner-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".floor-plan", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".project-approved", {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1024: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 3,
        },
        548: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1.5,
        },
    },
});
var swiper = new Swiper(".influencer-video", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        300: {
            centeredSlides: true,
            cssMode: true,
            slidesPerView: 1,
        },
    },
});
var swiper = new Swiper(".popup-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".overview-slider", {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".amenities-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1,
        },
    },
});
var swiper = new Swiper(".more-image", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1,
        },
    },
});

// Start Tabs JS
var planTablinks = document.querySelectorAll(".planTablinks");
var planTabcontent = document.querySelectorAll(".planTabcontent");


planTablinks.forEach(function (el) {
    el.addEventListener("click", openTabs1);
});


function openTabs1(el) {
    var btnTarget = el.currentTarget;
    var country = btnTarget.dataset.country;
    planTabcontent.forEach(
        function (el) {
            el.classList.remove("active");
        }
    );
    planTablinks.forEach(
        function (el) {
            el.classList.remove("active");
        }
    );
    document.querySelector("#" + country).classList.add("active");
    btnTarget.classList.add("active");
}


// Start Gallery Tabs
var galleryTablinks = document.querySelectorAll(".gallery-tablinks");
var galleryTabcontent = document.querySelectorAll(".gallery-tabcontent");


galleryTablinks.forEach(function (el) {
    el.addEventListener("click", openTabs2);
});


function openTabs2(el) {
    var btnTarget = el.currentTarget;
    var country = btnTarget.dataset.country;
    galleryTabcontent.forEach(
        function (el) {
            el.classList.remove("active");
        }
    );
    galleryTablinks.forEach(
        function (el) {
            el.classList.remove("active");
        }
    );
    document.querySelector("#" + country).classList.add("active");
    btnTarget.classList.add("active");
}

// Start Gallery Tabs
var newGalleryTablinks = document.querySelectorAll(".new-gallery-tablinks");
var newGalleryTabcontent = document.querySelectorAll(".new-gallery-tabcontent");


newGalleryTablinks.forEach(function (el) {
    el.addEventListener("click", openTabs3);
});


function openTabs3(el) {
    var btnTarget = el.currentTarget;
    var country = btnTarget.dataset.country;
    newGalleryTabcontent.forEach(
        function (el) {
            el.classList.remove("active");
        }
    );
    newGalleryTablinks.forEach(
        function (el) {
            el.classList.remove("active");
        }
    );
    document.querySelector("#" + country).classList.add("active");
    btnTarget.classList.add("active");
}


// Start Video JS
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".play_pause_button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            let videoId = this.getAttribute("data-video");
            let video = document.getElementById(videoId);

            if (video.paused) {
                video.play();
                video.classList.add("play-video");
                button.style.display = "none";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var buttonsMute = document.querySelectorAll(".audio-mute");

    buttonsMute.forEach(function (b) {
        b.addEventListener("click", function () {
            var getVideoId = this.getAttribute("data-video");
            var muteVideo = document.getElementById(getVideoId);

            if (muteVideo.muted) {
                muteVideo.muted = false;
                b.innerHTML = '<i class="ri-volume-up-fill"></i>';
            } else {
                muteVideo.muted = true;
                b.innerHTML = '<i class="ri-volume-mute-fill"></i>';
            }
        });
    });
});

// Start Image popup JS 
const images = document.querySelectorAll('img');
const popupContainer = document.getElementById('popup-container');

images.forEach((img) => {
    img.addEventListener('click', (e) => {
        const imgUrl = e.target.src;
        const imgAlt = e.target.alt;
        createPopup(imgUrl, imgAlt);
    });
});

function createPopup(imgUrl, imgAlt) {
    popupContainer.innerHTML = `
        <div>
            <img  src="${imgUrl}" alt="${imgAlt}">
            <span class="close"><i class="ri-close-large-fill"></i></span>
        </div>
    `;
    popupContainer.style.display = 'flex';

    const closeBtn = popupContainer.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        popupContainer.style.display = 'none';
    });
}
const popup = document.getElementById('popup');
function openPop() {
    popup.style.display = 'block';
}

function closePop() {
    popup.style.display = 'none';
}

const popup1 = document.getElementById('popup1');
function openPop1() {
    popup1.style.display = 'block';
}
function closePop1() {
    popup1.style.display = 'none';
}

// Add scroll event listener to show popup after scrolling 70% of page
let popupShown = false;
const totalHeight = myDiv.scrollHeight - myDiv.clientHeight;

myDiv.addEventListener("scroll", () => {
    if (!popupShown) {
        const scrollpop = myDiv.scrollTop;
        const scrollPercentage = (scrollpop / totalHeight) * 100;

        if (scrollPercentage >= 70) {
            openPop1();
            popupShown = true;
        }
    }
});
const fixedFooter = document.getElementById('fixed-footer');
let footerShown = false;
const totalHeight1 = myDiv.scrollHeight - myDiv.clientHeight;

myDiv.addEventListener("scroll", () => {
    if (!footerShown) {
        const scrollpop = myDiv.scrollTop;
        const scrollPercentage = (scrollpop / totalHeight1) * 100;

        if (scrollPercentage >= 50) {
            fixedFooter.style.display = 'block';
            footerShown = true;
        }
    } else if (footerShown) {
        const scrollpop = myDiv.scrollTop;
        const scrollPercentage = (scrollpop / totalHeight1) * 100;

        if (scrollPercentage < 50) {
            fixedFooter.style.display = 'none';
            footerShown = false;
        }
    }
});