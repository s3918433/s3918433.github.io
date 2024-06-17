document.getElementById("container").addEventListener("click", function (e) {
  const star = document.createElement("div");
  star.className = "star";

  // Calculate random size for the star
  const size = Math.floor(Math.random() * 10 + 5); // Random size between 5 and 15px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Position the star at the click coordinates
  star.style.left = `${e.clientX - size / 2}px`; // Center star horizontally
  star.style.top = `${e.clientY - size / 2}px`; // Center star vertically

  // Append the star to the container
  this.appendChild(star);

  // Remove the star after 2 seconds
  setTimeout(() => {
    star.remove();
  }, 2000);
});
