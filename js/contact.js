"use strict";
// body add class 'about'
const body = document.querySelector("body");
window.addEventListener("load", (e) => {
	body.classList.add("contact");
});

// window load add 'is-inview'
const contact = document.querySelector(".contact__us");
window.addEventListener("load", (e) => {
	setTimeout(() => {
		contact?.classList.add("is-inview");
	}, 1700);
});

// form
const th = document.querySelectorAll("th");
const td = document.querySelectorAll("td");
td.forEach((item, index) => {
	item.addEventListener("click", () => {
		th[index].classList.add("on");
	});
});

const form = document.querySelector("#member");
const btnSubmit = form.querySelector("input[type=submit]");
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
		const errMsgs = input.closest("td").querySelectorAll("p");
		if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();
		return true;
	} else {
		const errMsgs = input.closest("td").querySelectorAll("p");
		if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

		const errMsg = document.createElement("p");
		errMsg.append(`Enter text of ${len} characters or more.`);
		input.closest("td").append(errMsg);
		return false;
	}
}

function isEmail(name, len) {
	const input = form.querySelector(`[name=${name}]`);
	const txt = input.value;

	if (txt.length > len && /@/.test(txt)) {
		const errMsgs = input.closest("td").querySelectorAll("p");
		if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

		return true;
	} else {
		const errMsgs = input.closest("td").querySelectorAll("p");
		if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

		const errMsg = document.createElement("p");
		errMsg.append(
			`Please enter at least ${len} characters for your e-mail address including @.`
		);
		input.closest("td").append(errMsg);
		return false;
	}
}

function isSelect(name) {
	const sel = form.querySelector(`[name=${name}]`);
	const sel_index = sel.options.selectedIndex;
	const val = sel.options[sel_index].value;

	if (val !== "") {
		const errMsgs = sel.closest("td").querySelectorAll("p");
		if (errMsgs.length > 0) sel.closest("td").querySelector("p").remove();
		return true;
	} else {
		const errMsgs = sel.closest("td").querySelectorAll("p");
		if (errMsgs.length > 0) sel.closest("td").querySelector("p").remove();

		const errMsg = document.createElement("p");
		errMsg.append("Please select an item.");
		sel.closest("td").append(errMsg);
		return false;
	}
}
