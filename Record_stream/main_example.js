"use strict";
//example
const btn_record_example = document.getElementById("btn_record_example");
const btn_play_example = document.getElementById("btn_play_example");
const btn_start_example = document.getElementById("btn_start_example");
const video_record_example = document.getElementById("video_record_example");
const video_play_example = document.getElementById("video_play_example");

const constraints = (window.constraints = {
  audio: true,
  video: true,
});

const mediaRecorder = new MediaRecorder(window.stream);

btn_start_example.addEventListener("click", async function () {
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  window.stream = stream;
  video_record_example.srcObject = stream;
});

btn_record_example.addEventListener("click", function () {
  if (btn_record_example.textContent === "start recording") {
    startRecording();
  } else {
    stopRecording();
  }
});

function startRecording() {
  btn_record_example.textContent = "stop recording";
  mediaRecorder.start();
}

function stopRecording() {
  //   mediaRecorder.stop();
}
