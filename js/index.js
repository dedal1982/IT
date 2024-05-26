const videoPreview = document.querySelector(".video-preview");
const videoPlayer = document.querySelector(".video-player");

videoPreview.addEventListener("click", function () {
  videoPreview.style.display = "none";
  videoPlayer.play();
});
