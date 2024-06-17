// scripting the stars so whenever the users click the section, the stars will appear. I got assisted by ChatGPT. I got inspired by this person's portfolio where i view it in a ipad; whenever i pressed the screen, the croser moved so i had a inspiration where the users could interact the background when they click certain areas of the webpage
// inspiration: https://kkapustin.com/ (the home page)

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");

  if (!container) {
    console.error("Container element not found");
    return;
  }

  container.addEventListener("click", (e) => {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${e.clientX - 5}px`; // Adjust for centering
    star.style.top = `${e.clientY - 5}px`; // Adjust for centering
    container.appendChild(star);

    setTimeout(() => {
      star.classList.add("fade-out");
      setTimeout(() => {
        star.remove();
      }, 2000); // Match this with the CSS transition duration
    }, 2000);
  });
});
