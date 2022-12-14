"use strict";

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
