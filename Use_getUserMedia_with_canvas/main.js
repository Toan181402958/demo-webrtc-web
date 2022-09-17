/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

"use strict";

// Put variables in global scope to make them available to the browser console.
const video = document.querySelector("video");
const canvas = (window.canvas = document.querySelector("canvas"));
canvas.width = 480;
canvas.height = 360;

const button = document.getElementById("btntakesnapshot");
button.addEventListener("click", function () {
  console.log("a");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
});

const constraints = {
  audio: false,
  video: true,
};

function handleSuccess(stream) {
  window.stream = stream; // make stream available to browser console
  video.srcObject = stream;
}

function handleError(error) {
  console.log(
    "navigator.MediaDevices.getUserMedia error: ",
    error.message,
    error.name
  );
}

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(handleSuccess)
  .catch(handleError);

//btn convert canvas to image
const btnconvert = document.getElementById("btnconvert");
const imgconvert = document.getElementById("imgconvert1");
const download_a = document.getElementById("download_a");
btnconvert.addEventListener("click", function () {
  var img = new Image();
  img.id = "pic";
  img.src = canvas.toDataURL();
  imgconvert.src = img.src;
  console.log("canvas: ", img);
  download_a.href = img.src;
});
