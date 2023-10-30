// Get all circle elements and description paragraphs
const circles = document.querySelectorAll(".circle");
const descriptions = document.querySelectorAll(".circles-content p");

// Add a mouseover event listener to each circle
circles.forEach((circle, index) => {
	circle.addEventListener("mouseover", () => {
		// Hide all descriptions
		descriptions.forEach((description) => {
			description.style.display = "none";
		});

		// Display the description corresponding to the hovered circle
		descriptions[index].style.display = "block";
	});
});

// ###############################################
var swiper = new Swiper(".swiper-container", {
	slidesPerView: "auto",
	spaceBetween: 30,
	loop: true,
	speed: 1500, // Adjust the speed of scrolling
	autoplay: {
		delay: 0,
	},
});
