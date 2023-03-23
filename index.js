var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })

    .catch(function (err0r) {
      console.log("Something Went wrong!");
    });
}


var myVideo = document.getElementById("video1");

function playPause() {
  if (myVideo.paused) {
    document.getElementById("video1").style.visibility ="visible";
    document.getElementById("instructions").style.visibility="hidden";

    myVideo.play();
  }


  else
    myVideo.pause();
}


