"use strict";

async function handlebtnbasic() {
  btnbasicgetusermedia.addEventListener("click", function () {
    console.log("asdkja");
    window.open("./basic_getusermedia/basic_getusermedia.html");
  });
}
async function handlebtnwithcanvas() {
  btnUse_getUserMedia_with_canvas.addEventListener("click", function () {
    console.log("asdkja");
    window.open(
      "./Use_getUserMedia_with_canvas/Use_getUserMedia_with_canvas.html"
    );
  });
}
async function handlebtnwithcanvasandcssfilters() {
  btnUse_getUserMedia_with_canvas_and_css_filters.addEventListener(
    "click",
    function () {
      console.log("asdkja");
      window.open(
        "./Use_getUserMedia_with_canvas_and_CSS_filters/use_withcanvas_and_css_filters.html"
      );
    }
  );
}
async function handleChoose_camera_resolution() {
  btnChoose_camera_resolution.addEventListener("click", function () {
    console.log("asdkja");
    window.open("./Choose_camera_resolution/Choose_camera_resolution.html");
  });
}
async function handleAudioonly_getUserMedia_output_to_local_audio_element() {
  btnAudioonly_getUserMedia_output_to_local_audio_element.addEventListener(
    "click",
    function () {
      console.log("asdkja");
      window.open(
        "./Audioonly_getUserMedia_output_to_local_audio_element/Audioonly_getUserMedia_output_to_local_audio_element.html"
      );
    }
  );
}
async function handleAudio_only_getUserMedia_displaying_volume() {
  btnAudio_only_getUserMedia_displaying_volume.addEventListener(
    "click",
    function () {
      console.log("asdkja");
      window.open(
        "./Audio_only_getUserMedia_displaying_volume/Audio_only_getUserMedia_displaying_volume.html"
      );
    }
  );
}
async function handleRecord_stream() {
  btnRecord_stream.addEventListener("click", function () {
    console.log("asdkja");
    window.open("./Record_stream/Record_stream.html");
  });
}
async function handleScreensharing_with_getDisplayMedia() {
  btnScreensharing_with_getDisplayMedia.addEventListener("click", function () {
    console.log("asdkja");
    window.open(
      "./Screensharing_with_getDisplayMedia/Screensharing_with_getDisplayMedia.html"
    );
  });
}
async function handleControl_exposure() {
  btnControl_exposure.addEventListener("click", function () {
    console.log("asdkja");
    window.open("./Control_exposure/Control_exposure.html");
  });
}
async function handleChoose_camera_microphone_and_speaker() {
  btnChoose_camera_microphone_and_speaker.addEventListener(
    "click",
    function () {
      console.log("asdkja");
      window.open(
        "./Devices/Choose_camera_microphone_and_speaker/Choose_camera_microphone_and_speaker.html"
      );
    }
  );
}
async function handleStream_from_a_video_element_to_a_video_element() {
  btnStream_from_a_video_element_to_a_video_element.addEventListener(
    "click",
    function () {
      console.log("asdkja");
      window.open(
        "./Stream_capture/Stream_from_a_video_element_to_a_video_element/Stream_from_a_video_element_to_a_video_element.html"
      );
    }
  );
}
async function handleStream_from_a_video_element_to_a_peer_connection() {
  btnStream_from_a_video_element_to_a_peer_connection.addEventListener(
    "click",
    function () {
      console.log("asdkja");
      window.open(
        "./Stream_capture/Stream_from_a_video_element_to_a_peer_connection/Stream_from_a_video_element_to_a_peer_connection.html"
      );
    }
  );
}

document
  .getElementById("btnbasicgetusermedia")
  .addEventListener("click", () => handlebtnbasic());
document
  .getElementById("btnUse_getUserMedia_with_canvas")
  .addEventListener("click", () => handlebtnwithcanvas());
document
  .getElementById("btnUse_getUserMedia_with_canvas_and_css_filters")
  .addEventListener("click", () => handlebtnwithcanvasandcssfilters());
document
  .getElementById("btnChoose_camera_resolution")
  .addEventListener("click", () => handleChoose_camera_resolution());
document
  .getElementById("btnAudioonly_getUserMedia_output_to_local_audio_element")
  .addEventListener("click", () =>
    handleAudioonly_getUserMedia_output_to_local_audio_element()
  );
document
  .getElementById("btnAudio_only_getUserMedia_displaying_volume")
  .addEventListener("click", () =>
    handleAudio_only_getUserMedia_displaying_volume()
  );
document
  .getElementById("btnRecord_stream")
  .addEventListener("click", () => handleRecord_stream());
document
  .getElementById("btnScreensharing_with_getDisplayMedia")
  .addEventListener("click", () => handleScreensharing_with_getDisplayMedia());
document
  .getElementById("btnControl_exposure")
  .addEventListener("click", () => handleControl_exposure());
document
  .getElementById("btnChoose_camera_microphone_and_speaker")
  .addEventListener("click", () =>
    handleChoose_camera_microphone_and_speaker()
  );
document
  .getElementById("btnStream_from_a_video_element_to_a_video_element")
  .addEventListener("click", () =>
    handleStream_from_a_video_element_to_a_video_element()
  );
document
  .getElementById("btnStream_from_a_video_element_to_a_peer_connection")
  .addEventListener("click", () =>
    handleStream_from_a_video_element_to_a_peer_connection()
  );
