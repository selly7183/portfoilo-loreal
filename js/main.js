"use strict";

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
