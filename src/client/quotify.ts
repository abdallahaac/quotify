import "./quotify.css";

const viewHeight = 300;
const navBar: HTMLElement = document.querySelector("nav") as HTMLElement;

if (document.documentElement.scrollTop === 0) {
	// User has scrolled all the way to the top of
	navBar.style.boxShadow = "none";
}
window.addEventListener("scroll", function () {
	if (document.documentElement.scrollTop >= 300) {
		navBar.style.transition = "300ms";
		navBar.style.boxShadow = "rgba(255, 217, 102, 0.13) 1px 1px 10px";
	}

	if (document.documentElement.scrollTop === 0) {
		// User has scrolled all the way to the top of
		navBar.style.boxShadow = "none";
	}
});
console.log(document.documentElement.scrollTop);
console.log(navBar);
