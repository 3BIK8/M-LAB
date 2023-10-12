const gridContainer = document.getElementById("grid-container");

const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
const cellSize = viewportHeight / 200; // Adjust this to set the size of each grid cell
const numColumns = Math.floor(viewportWidth / cellSize);
const numRows = Math.floor(viewportHeight / cellSize);

for (let row = 0; row < numRows; row++) {
	for (let col = 0; col < numColumns; col++) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		gridContainer.appendChild(cell);
	}
}
