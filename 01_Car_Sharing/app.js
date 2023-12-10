console.log("test");

const header = document.querySelector(".header");
console.log(header);

window.onscroll = () => {
    header.classList.toggle("is-sticky", window.scrollY > 50);
}

toggleSticky();

window.onscroll = () => {
    toggleSticky();
}