// scripting the stars so whenever the users click the section, the stars will appear. I got assisted by ChatGPT. I got inspired by this person's portfolio where i view it in a ipad; whenever i pressed the screen, the croser moved so i had a inspiration where the users could interact the background when they click certain areas of the webpage
// inspiration: https://kkapustin.com/ (the home page)

// I asked ChatGPT to help me with this secition aswell :,)

// the script for clicking the star effect
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");

  if (!container) {
    console.error("Container element not found");
    return;
  }

  // when users click on the page; it'll show the stars
  container.addEventListener("click", (e) => {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${e.clientX - 5}px`; // Adjust for centering
    star.style.top = `${e.clientY - 5}px`; // Adjust for centering
    container.appendChild(star);

    // when stars are clicked the stars fades away
    setTimeout(() => {
      star.classList.add("fade-out");
      setTimeout(() => {
        star.remove();
      }, 2000); //the amount of time it'll dissapear
    }, 2000);
  });
});
