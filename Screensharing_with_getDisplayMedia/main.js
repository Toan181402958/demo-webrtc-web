/*
 *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
"use strict";

// Polyfill in Firefox.
// See https://blog.mozilla.org/webrtc/getdisplaymedia-now-available-in-adapter-js/
if (adapter.browserDetails.browser == "firefox") {
  adapter.browserShim.shimGetDisplayMedia(window, "screen");
}

function handleSuccess(stream) {
  startButton.disabled = true;
  stopButton.disabled = false;
  const video = document.querySelector("video");
  video.srcObject = stream;

  // demonstrates how to detect that the user has stopped
  // sharing the screen via the browser UI.
  stream.getVideoTracks()[0].addEventListener("ended", () => {
    errorMsg("The user has ended sharing the screen");
    startButton.disabled = false;
  });
}

function handleError(error) {
  errorMsg(`getDisplayMedia error: ${error.name}`, error);
}

function errorMsg(msg, error) {
  const errorElement = document.querySelector("#errorMsg");
  errorElement.innerHTML += `<p>${msg}</p>`;
  if (typeof error !== "undefined") {
    console.error(error);
  }
}

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", () => {
  navigator.mediaDevices
    .getDisplayMedia({ video: true })
    .then(handleSuccess, handleError);
});

if (navigator.mediaDevices && "getDisplayMedia" in navigator.mediaDevices) {
  startButton.disabled = false;
} else {
  errorMsg("getDisplayMedia is not supported");
}

const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", function () {
  const video = document.querySelector("video");
  let tracks = video.srcObject.getTracks();
  tracks.forEach((element) => {
    element.stop();
  });
  video.src = null;
  startButton.disabled = false;
  stopButton.disabled = true;
});
