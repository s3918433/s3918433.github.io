// const video = document.querySelector("#custom-video-player");
// const playPauseBtn = document.querySelector("#play-pause-btn");
// const playPauseImg = document.querySelector("#play-pause-img");
// const progressBar = document.querySelector("#progress-bar-fill");
// video.removeAttribute("controls");
// // playPauseBtn.addEventListener("click", togglePlayPause);
// video.addEventListener("timeupdate", updateProgressBar);
// function togglePlayPause() {
//   if (video.paused || video.ended) {
//     video.play();
//     playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
//   } else {
//     video.pause();
//     playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
//   }
// }
// function updateProgressBar() {
//   const value = (video.currentTime / video.duration) * 100;
//   progressBar.style.width = value + "%";
// }

// Add other functionalities here

//script for current time in the header
// Credits goes to SheCodes; AI coding assistant
//https://www.shecodes.io/athena#question-428657
//--------------------------------------------------------
function updateTime() {
  //input the current time
  var dateTime = new Date();
  //extracting the time from the date object
  var currentTime = dateTime.toLocaleTimeString();
  //display the current time inside the <p> element with the id "time"
  document.getElementById("time").innerHTML = currentTime;
}
//wanted to update the live time immediately
updateTime();
//website updates every 1000 millisecond
setInterval(updateTime, 1000);

//script for Todo List
//Credits goes to https://youtu.be/G0jO8kUrg-I?si=oJ6MNVo3wtEtT8Nq
//--------------------------------------------------------
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!"); //if the input box is empty, the website will show a alert saying 'you must write something'
  } else {
    //if it has somethng, the data will store it in the container, which will come out as a <li> text :D
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; //special code for cross icon; allows users to delete their task in their todo list
    li.appendChild(span);
  }
  inputBox.value = ""; //so the text does not stay in the input section when clicking add, it will automatically dissapear after clicking add
  saveData(); //allows new data to get stored when users come back to the website; technically will updates the data
}

//script for whenever we click in the container where users store the task
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      //first it will check where the users have clicked on <li>
      e.target.classList.toggle("checked"); // will then checked the box; will come out the checked feature when clicked on the task; so users will know if it's completed. If users clicked on the checked task, it will unchecked it because of the 'toggle' element, allow users to change their mind
      saveData(); //when new data is checked, the new data that is checked will update in the website
    } else if (e.target.tagName === "SPAN") {
      // if users click on 'span'; the delete button, it will delete the task
      e.target.parentElement.remove(); // hence why use .remove; allows the script to know that when click, it will remove the task
      saveData(); //when changes are made in the to-do list; task has been removed, that removed task will no longer show up when reloading the browser
    }
  },
  false
);

//script if we reload the page, the website still store the users' task; allowing them to comeback and used the website again :)
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML); //whatever task will be stored in the container and it will store as 'data'
}

//script of showing the new data whenever users open the website again
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
