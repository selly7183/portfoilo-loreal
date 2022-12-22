"use strict";

// body add class 'magazine'
const contact = document.querySelector(".contact__us");
window.addEventListener("load", (e) => {
	setTimeout(() => {
		contact?.classList.add("is-inview");
		magazineCategory?.classList.add("is-inview");
	}, 1700);
});

// magazine filter
const magazineCategory = document.querySelector(".magazine__categories");
const magazineCont = document.querySelector(".magazine__cont");
const items = document.querySelectorAll(".magazine__cont .item");
magazineCategory.addEventListener("click", (e) => {
	const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
	if (filter == null) {
		return;
	}

	//remove selection from the previous item and select the new one
	const active = document.querySelector(".magazine__btn.selected");
	active.classList.remove("selected");
	const target = e.target.nodeName === "LI" ? e.target : e.target.parentNode;
	target.classList.add("selected");

	magazineCont.classList.add("anim-out");
	setTimeout(() => {
		items.forEach((item) => {
			if (filter === "*" || filter === item.dataset.type) {
				item.classList.remove("invisible");
			} else {
				item.classList.add("invisible");
			}
		});
		magazineCont.classList.remove("anim-out");
	}, 300);
});
