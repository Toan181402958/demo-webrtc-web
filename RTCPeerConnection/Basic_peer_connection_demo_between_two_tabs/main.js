/*
 *  Copyright (c) 2021 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

"use strict";

const startButton = document.getElementById("startButton");
const hangupButton = document.getElementById("hangupButton");
const testButton = document.getElementById("testButton");
hangupButton.disabled = true;

const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");

let pc;
let localStream;

const signaling = new BroadcastChannel("webrtc");
signaling.onmessage = (e) => {
  if (!localStream) {
    console.log("not ready yet");
    actionStart();
    return;
  }
  switch (e.data.type) {
    case "offer":
      handleOffer(e.data);
      console.log("offer in user 2");
      break;
    case "answer":
      handleAnswer(e.data);
      console.log("answer in user 1");
      break;
    case "candidate":
      handleCandidate(e.data);
      console.log("candidate");
      break;
    case "ready":
      // A second tab joined. This tab will initiate a call unless in a call already.
      if (pc) {
        console.log("already in call, ignoring");
        return;
      }
      console.log("ready");
      makeCall();
      break;
    case "bye":
      console.log("bye");
      if (pc) {
        hangup();
      }
      break;
    default:
      console.log("unhandled", e);
      break;
  }
};

startButton.onclick = async () => {
  actionStart();
};

const actionStart = async () => {
  localStream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });
  localVideo.srcObject = localStream;

  startButton.disabled = true;
  hangupButton.disabled = false;

  signaling.postMessage({ type: "ready" });
};

hangupButton.onclick = async () => {
  hangup();
  console.log("hangup click");
  signaling.postMessage({ type: "bye" });
};

async function hangup() {
  if (pc) {
    pc.close();
    pc = null;
  }
  localStream.getTracks().forEach((track) => track.stop());
  localStream = null;
  startButton.disabled = false;
  hangupButton.disabled = true;
}

function createPeerConnection() {
  pc = new RTCPeerConnection();
  console.log("create peer connect");
  pc.onicecandidate = (e) => {
    const message = {
      type: "candidate",
      candidate: null,
    };
    if (e.candidate) {
      message.candidate = e.candidate.candidate;
      message.sdpMid = e.candidate.sdpMid;
      message.sdpMLineIndex = e.candidate.sdpMLineIndex;
    }
    signaling.postMessage(message);
  };
  pc.ontrack = (e) => (remoteVideo.srcObject = e.streams[0]);
  localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));
}

async function makeCall() {
  await createPeerConnection();

  const offer = await pc.createOffer();
  signaling.postMessage({ type: "offer", sdp: offer.sdp });
  await pc.setLocalDescription(offer);
}

async function handleOffer(offer) {
  if (pc) {
    console.error("existing peerconnection");
    return;
  }
  await createPeerConnection();
  await pc.setRemoteDescription(offer);

  const answer = await pc.createAnswer();
  signaling.postMessage({ type: "answer", sdp: answer.sdp });
  await pc.setLocalDescription(answer);
}

async function handleAnswer(answer) {
  if (!pc) {
    console.error("no peerconnection");
    return;
  }
  await pc.setRemoteDescription(answer);
}

async function handleCandidate(candidate) {
  if (!pc) {
    console.error("no peerconnection");
    return;
  }
  if (!candidate.candidate) {
    await pc.addIceCandidate(null);
  } else {
    await pc.addIceCandidate(candidate);
  }
}

window.onbeforeunload = () => {
  console.log("reload here");
  localStorage.setItem("DATA", "123");
  signaling.postMessage({ type: "bye" });
  // pc.setRemoteDescription()
};

testButton.onclick = () => {
  console.log("test: ", pc);
  pc.onremovestream();
};

// window.onfocus = () => {
//   console.log("on focus");
// };

// window.onblur = () => {
//   console.log("onblur");
// };
