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

let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const slideWidth = slides[0].clientWidth + 20; // Get width of each slide + margin

function showSlides() {
  const slideOffset = -slideIndex * slideWidth;
  const containerWidth = document.querySelector(
    ".slideshow-container"
  ).offsetWidth;
  const slidesVisible = Math.floor(containerWidth / slideWidth);
  const centerOffset = (containerWidth - slideWidth) / 2;

  // Adjust slideOffset to center the selected slide
  slideOffset += centerOffset - (slideWidth / 2) * (slidesVisible - 1);

  // Move slides container horizontally
  document.querySelector(
    ".slides"
  ).style.transform = `translateX(${slideOffset}px)`;
}

function changeSlide(n) {
  slideIndex += n;
  showSlides();
}
