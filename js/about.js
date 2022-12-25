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

// brand slide
const swiper = new Swiper(".swiper", {
	slidesPerView: 2,
	spaceBetween: 30,
	observer: true,
	observeParents: true,
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});

// brand fixed
window.addEventListener("load", () => {
	const navBtn1 = document.getElementById("nav-btn-1");
	const navBtn2 = document.getElementById("nav-btn-2");
	const navBtn3 = document.getElementById("nav-btn-3");
	const navBtn4 = document.getElementById("nav-btn-4");

	// Add .active class on buttons when scrolling (highlight it)
	scroll.on("call", (callValue) => {
		if (callValue === "lst_pr") {
			navBtn1.classList.add("active");
			navBtn2.classList.remove("active");
			console.log(callValue);
		} else {
			navBtn1.classList.remove("active");
		}

		if (callValue === "old_pr") {
			navBtn2.classList.add("active");
			navBtn1.classList.remove("active");
			navBtn3.classList.remove("active");
			console.log(callValue);
		} else {
			navBtn2.classList.remove("active");
		}

		if (callValue === "arc_pr") {
			navBtn3.classList.add("active");
			navBtn2.classList.remove("active");
			navBtn4.classList.remove("active");
			console.log(callValue);
		} else {
			navBtn3.classList.remove("active");
		}

		if (callValue === "plg_pr") {
			navBtn4.classList.add("active");
			navBtn3.classList.remove("active");
			console.log(callValue);
		} else {
			navBtn4.classList.remove("active");
		}
	});
});

// Add .active class to the current button on click (highlight it)
const mmnav = document.getElementById("mm-projects-nav");
const btns = mmnav.getElementsByClassName("mm-projects-nav-btn");
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		const current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace("active", "");
		this.className += " active";
	});
}
