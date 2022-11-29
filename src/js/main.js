const openNavBtn = document.querySelector("#openNavBtn");
const mobileNav = document.querySelector("#mobileNav");
const closeNavBtn = document.querySelector("#closeBtn");

openNavBtn.onclick = function () {
    mobileNav.classList.remove('top-[-300%]');
    mobileNav.classList.add('top-0');
}

closeNavBtn.onclick = function () {
    mobileNav.classList.add('top-[-300%]');
    mobileNav.classList.remove('top-0');
}