"use strict";

// preload
const preloader = document.querySelector(".preloader");
window.addEventListener("load", (e) => {
	preloader.classList.add("preloader--hide");
});

//scroll smooth
gsap.registerPlugin(ScrollTrigger);
const scroll = new LocomotiveScroll({
	el: document.querySelector("[data-scroll-container]"),
	smooth: true,
	lerp: 0.05,
	scrollFromAnywhere: true,
	getSpeed: true,
	getDirection: true,
	breakpoint: 0,
	smartphone: {
		smooth: true,
	},
	tablet: {
		smooth: true,
	},
});
scroll.scrollTo("top", { duration: 0, disableLerp: true });
var currentPosition = 0;
var direction = "down";
setTimeout(function () {
	window.scrollTo(0, 0);
	var resizeEvent = new Event("resize");
	window.dispatchEvent(resizeEvent);
}, 100);
setTimeout(function () {
	scroll.update();
}, 100);
setTimeout(function () {
	scroll.update();
}, 2500);

// header - fixed
const burger = document.querySelector(".header__burger");
const close = document.querySelector(".menu__close");
const menu = document.querySelector(".menu");

burger?.addEventListener("click", () => {
	menu.classList.add("menu__show");
});
close?.addEventListener("click", () => {
	menu.classList.remove("menu__show");
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
commitments?.addEventListener("click", (e) => {
	section03.scrollIntoView({ behavior: "smooth", block: "start" });
});

//section04 - mouse cursor
document.addEventListener("mousemove", mouseMoveFunc);
function mouseMoveFunc(e) {
	const depth = 10;
	const moveX = (e.pageX - window.innerWidth / 2) / depth;
	const moveY = (e.pageY - window.innerHeight / 2) / depth;
	gsap.to(".img__box", {
		duration: 1,
		x: moveX,
		y: moveY,
		ease: "slow",
		stagger: 0.008,
		overwrite: true,
	});
}
