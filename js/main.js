"use strict";

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

//section03 - line
const section03Rect = section03.getBoundingClientRect().height;
console.log(section03Rect);
const tab = document.querySelector(".commitments__tab");
document.addEventListener("scroll", (e) => {
	if (window.scrollY > section03Rect * 2.5) {
		tab.classList.add("on");
	} else {
		tab.classList.remove("on");
	}
});

// section04 - mouse cursor
// const section04 = document.querySelector(".section04");

// document.addEventListener("mousemove", (e) => {
// 	const x = e.clientX;
// 	const y = e.clientY;
// 	const cursor = document.querySelector("#cursor");
// 	section04.style.cursor = "none";
// 	cursor.style.transform = `translate(${x}px, ${y}px )`;
// });
