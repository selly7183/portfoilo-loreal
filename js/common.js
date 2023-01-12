class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <div class="preloader"></div>
        <header>
            <div class="inner">
                <a href="index.html">
                    <img src="src/img/logo.png" alt="logo" />
                </a>
                <nav>
                    <ul class="links">
                        <li>
                            <a href="./about.html" class="link">
                                <span class="link__cont">
                                    <span class="link__text">ABOUT</span>
                                    <span class="link__text">ABOUT</span>
                                </span>
                            </a>
                        </li>
                        <li class="link">
                            <a href="./index.html#commitment" class="link">
                                <span class="link__cont">
                                    <span class="link__text">COMMITMENTS</span>
                                    <span class="link__text">COMMITMENTS</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="./brand.html" class="link">
                                <span class="link__cont">
                                    <span class="link__text">BRANDS</span>
                                    <span class="link__text">BRANDS</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="./magazine.html" class="link">
                                <span class="link__cont">
                                    <span class="link__text">MAGAZINE</span>
                                    <span class="link__text">MAGAZINE</span>
                                </span>
                            </a>
                        </li>
                        <li class="join">
                            <a href="./contact.html" class="link">
                                <span class="link__cont">
                                    <span class="link__text">CONTACT</span>
                                    <span class="link__text">CONTACT</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="header__burger">
                    <span class="header__burger-line"></span>
                    <span class="header__burger-line"></span>
                    <span class="header__burger-line"></span>
                </div>
            </div>
        </header>
        <!-- mo menu -->
        <div class="menu">
            <div class="menu__close">
                <span class="menu__line"></span>
                <span class="menu__line"></span>
            </div>
            <div class="menu__container">
                <div class="menu__links">
                    <a href="./about.html" class="menu__link">ABOUT</a>
                    <a href="./index.html#commitment" class="menu__link">COMMITMENTS</a>
                    <a href="./brand.html" class="menu__link">BRANDS</a>
                    <a href="./magazine.html" class="menu__link">MAGAZINE</a>
                </div>
                <div class="menu__link-join">
                    <a href="./contact.html" class="menu__link">CONTACT</a>
                </div>
            </div>
        </div>
        `;
	}
}
customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <footer>
        <div class="inner">
            <h3>
                <span class="word" style="--word-index: 2" data-word="A">A </span>
                <span class="word" style="--word-index: 4" data-word="unique"
                    >unique
                </span>
                <span class="word" style="--word-index: 6" data-word="Beauty"
                    >Beauty
                </span>
                <span class="word" style="--word-index: 8" data-word="leader"
                    >leader
                </span>
            </h3>
            <div class="footer__wrapper">
                <img src="src/img/logo.png" class="footer__logo" alt="logo" />
                <aside>
                    <p class="footer__title">LOREAL</p>
                    <p class="footer__copy">
                        &copy; LOREAL PARIS 2022. <br class="vis-600" />All rights
                        reserved.
                    </p>
                    <ul>
                        <li><a href="https://www.facebook.com/lorealgroupe" target="_blank">FACEBOOK</a></li>
                        <li><a href="https://www.instagram.com/lorealgroupe/" target="_blank">INSTAGRAM</a></li>
                    </ul>
                </aside>
            </div>
        </div>
    </footer>
        `;
	}
}
customElements.define("my-footer", MyFooter);
