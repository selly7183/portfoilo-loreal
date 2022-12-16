"use strict";
//scroll smooth
gsap.registerPlugin(ScrollTrigger);
const scroll = new LocomotiveScroll({
	el: document.querySelector("[data-scroll-container]"),
	smooth: true,
	lerp: 0.05,
	scrollFromAnywhere: true,
});

ScrollTrigger.create({
	trigger: ".image__cont_box",
	scroll: "[data-scroll-container]",
	start: "top+=30% 50%",
	end: "bottom-=40% 50%",
	animation: gsap.to(".image__cont_box img", { with: "120%" }),
	scrub: 2,
	// markers: true
});

// preload
const preloader = document.querySelector(".preloader");
window.addEventListener("load", (e) => {
	preloader.classList.add("preloader--hide");
});

// header - fixed
const header = document.querySelector("header");
const headerRect = header.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
	if (scrollY > headerRect) {
		header.classList.add("active");
	} else {
		header.classList.remove("active");
	}
});

// section03 - tab
const tabLi = document.querySelectorAll(".commitments__tab li");
const commitmentCont = document.querySelectorAll(".commitments__cont");
tabLi.forEach((item, index) => {
	item.addEventListener("click", () => {
		for (let i = 0; i < tabLi.length; i++) {
			tabLi[i].classList.remove("on");
			commitmentCont[i].classList.remove("on");
		}
		tabLi[index].classList.add("on");
		commitmentCont[index].classList.add("on");
	});
});

// section03 - scrollIntoView
const commitments = document.querySelector(".link_sec03");
const section03 = document.querySelector(".section03");
commitments.addEventListener("click", (e) => {
	section03.scrollIntoView({ behavior: "smooth", block: "start" });
});

//section04 - mouse cursor
(function () {
	var parallaxContainer = document.querySelector(".section04");

	var parallaxItems = document.querySelector(".img__box");

	var fixer = 0.003;

	document.addEventListener("mousemove", function (event) {
		var pageX =
			event.pageX - parallaxContainer.getBoundingClientRect().width * 0.5;

		var pageY =
			event.pageY - parallaxContainer.getBoundingClientRect().height * 0.5;

		for (let i = 0; i < parallaxItems.length; i++) {
			var item = parallaxItems[i];
			var speedX = item.getAttribute("data-speed-x");
			var speedY = item.getAttribute("data-speed-y");

			TweenLite.set(item, {
				x: (item.offsetLeft + pageX * speedX) * fixer,
				y: (item.offsetTop + pageY * speedY) * fixer,
			});
		}
	});
})();
