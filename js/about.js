"use strict";

// body add class 'about'
const body = document.querySelector("body");
window.addEventListener("load", (e) => {
	body?.classList.add("about");
});

// window load add 'is-inview'
const txt = document.querySelector(".ceo__txt");
window.addEventListener("load", (e) => {
	setTimeout(() => {
		txt?.classList.add("is-inview");
	}, 1700);
});

const brandDesc = document.querySelector(".brand__desc");
window.addEventListener("load", (e) => {
	setTimeout(() => {
		brandDesc?.classList.add("is-inview");
	}, 2100);
});

const swiper = new Swiper(".swiper", {
	// Optional parameters
	// direction: "vertical",
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});
