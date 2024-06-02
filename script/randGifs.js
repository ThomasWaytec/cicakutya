const gifMin = 1;
const gifMax = 44; /* the length of gifs  */


// Function to generate a random number within a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create and display random GIFs with random sizes
function displayRandomGIFs() {
    // Generate a random number of GIFs to display (between 1 and 8)
    const numOfGIFs = getRandomNumber(1, 4);

    for (let i = 0; i < numOfGIFs; i++) {
        // Create <img> element for the GIF
        const gif = document.createElement("img");

        // Set src attribute to a random GIF path
        const randomGIFIndex = getRandomNumber(gifMin, gifMax);
        gif.src = `../cicakutya/assets/gifs/cicakutya_${randomGIFIndex}.gif`;

        // Generate random width and height between 50px and 200px
        const width = getRandomNumber(20, 200);
        const height = getRandomNumber(20, 200);

        // Set random width and height
        gif.style.width = width + "px";
        gif.style.height = height + "px";

        // Set position randomly within the viewport
        gif.style.position = "absolute";
        gif.style.left = getRandomNumber(0, window.innerWidth - width) + "px";
        gif.style.top = getRandomNumber(0, window.innerHeight - height) + "px";

        // Append the <img> element to the body
        document.body.appendChild(gif);

        // Generate a random duration to display the GIF (between 1 and 9 seconds)
        const duration = getRandomNumber(1000, 9000);

        // Remove the <img> element after the specified duration
        setTimeout(() => {
            gif.remove();
        }, duration);
    }
}
