"use strict";
// body add class 'about'
const body = document.querySelector("body");
window.addEventListener("load", (e) => {
	body.classList.add("contact");
});

// window load add 'is-inview'
const contact = document.querySelector(".contact__us");
const wrap = document.querySelector(".contact__wrap");
window.addEventListener("load", (e) => {
	setTimeout(() => {
		contact?.classList.add("is-inview");
		wrap?.classList.add("is-inview");
	}, 1700);
});

// form
const formRow = document.querySelectorAll(".form__row");
const label = document.querySelectorAll(".form__row label");
formRow.forEach((item, index) => {
	item.addEventListener("click", () => {
		label[index].classList.add("on");
	});
});

const form = document.querySelector("#member");
const btnSubmit = form.querySelector(".submit__btn");
btnSubmit.addEventListener("click", (e) => {
	if (!isTxt("userNmae", 5)) e.preventDefault();
	if (!isEmail("email", 10)) e.preventDefault();
	if (!isSelect("subject")) e.preventDefault();
	if (!isTxt("comments", 10)) e.preventDefault();
});

function isTxt(name, len) {
	const input = form.querySelector(`[name=${name}]`);
	const txt = input.value;

	if (txt.length > len) {
		const errMsgs = input.closest(".detail").querySelectorAll("p");
		if (errMsgs.length > 0)
			input.closest(".detail").querySelector("p").remove();
		return true;
	} else {
		const errMsgs = input.closest(".detail").querySelectorAll("p");
		if (errMsgs.length > 0)
			input.closest(".detail").querySelector("p").remove();

		const errMsg = document.createElement("p");
		errMsg.append(`Enter text of ${len} characters or more.`);
		input.closest(".detail").append(errMsg);
		return false;
	}
}

function isEmail(name, len) {
	const input = form.querySelector(`[name=${name}]`);
	const txt = input.value;

	if (txt.length > len && /@/.test(txt)) {
		const errMsgs = input.closest(".detail").querySelectorAll("p");
		if (errMsgs.length > 0)
			input.closest(".detail").querySelector("p").remove();

		return true;
	} else {
		const errMsgs = input.closest(".detail").querySelectorAll("p");
		if (errMsgs.length > 0)
			input.closest(".detail").querySelector("p").remove();

		const errMsg = document.createElement("p");
		errMsg.append(
			`Please enter at least ${len} characters for your e-mail address including @.`
		);
		input.closest(".detail").append(errMsg);
		return false;
	}
}

function isSelect(name) {
	const sel = form.querySelector(`[name=${name}]`);
	const sel_index = sel.options.selectedIndex;
	const val = sel.options[sel_index].value;

	if (val !== "") {
		const errMsgs = sel.closest(".detail").querySelectorAll("p");
		if (errMsgs.length > 0) sel.closest(".detail").querySelector("p").remove();
		return true;
	} else {
		const errMsgs = sel.closest(".detail").querySelectorAll("p");
		if (errMsgs.length > 0) sel.closest(".detail").querySelector("p").remove();

		const errMsg = document.createElement("p");
		errMsg.append("Please select an item.");
		sel.closest(".detail").append(errMsg);
		return false;
	}
}
