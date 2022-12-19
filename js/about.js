"use strict";

const txt = document.querySelector(".ceo__txt");
window.addEventListener("load", (e) => {
	setTimeout(() => {
		txt.classList.add("is-inview");
	}, 1700);
});
