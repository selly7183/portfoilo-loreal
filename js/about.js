"use strict";

// body add class 'about'
const body = document.querySelector("body");
window.addEventListener("load", (e) => {
	body.classList.add("about");
});

// window load add 'is-inview'
const txt = document.querySelector(".ceo__txt");
window.addEventListener("load", (e) => {
	setTimeout(() => {
		txt.classList.add("is-inview");
	}, 1700);
});

//scroll smooth
scroll.destroy();
setTimeout(function () {
	scroll.init();
}, 100);
