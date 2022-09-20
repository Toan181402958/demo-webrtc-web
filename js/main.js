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
async function handleStream_from_a_canvas_element_to_a_video_element() {
  btnStream_from_a_canvas_element_to_a_video_element.addEventListener(
    "click",
    function () {
      console.log("asdkja");
      window.open(
        "./Stream_capture/Stream_from_a_canvas_element_to_a_video_element/Stream_from_a_canvas_element_to_a_video_element.html"
      );
    }
  );
}
async function handleRecord_a_stream_from_a_canvas_element() {
  btnRecord_a_stream_from_a_canvas_element.addEventListener(
    "click",
    function () {
      console.log("asdkja");
      window.open(
        "./Stream_capture/Record_a_stream_from_a_canvas_element/Record_a_stream_from_a_canvas_element.html"
      );
    }
  );
}
async function handleGuiding_video_encoding_with_content_hints() {
  btnGuiding_video_encoding_with_content_hints.addEventListener(
    "click",
    function () {
      console.log("asdkja");
      window.open(
        "./Stream_capture/Guiding_video_encoding_with_content_hints/Guiding_video_encoding_with_content_hints.html"
      );
    }
  );
}
async function handleBasic_peer_connection_demo_in_a_single_tab() {
  btnBasic_peer_connection_demo_in_a_single_tab.addEventListener(
    "click",
    function () {
      console.log("asdkja");
      window.open(
        "./RTCPeerConnection/Basic_peer_connection_demo_in_a_single_tab/Basic_peer_connection_demo_in_a_single_tab.html"
      );
    }
  );
}
async function handleBasic_peer_connection_demo_between_two_tabs() {
  btnBasic_peer_connection_demo_between_two_tabs.addEventListener(
    "click",
    function () {
      console.log("asdkja");
      window.open(
        "./RTCPeerConnection/Basic_peer_connection_demo_between_two_tabs/Basic_peer_connection_demo_between_two_tabs.html"
      );
    }
  );
}
async function handlePeer_connection_using_Perfect_Negotiation() {
  btnPeer_connection_using_Perfect_Negotiation.addEventListener(
    "click",
    function () {
      console.log("asdkja");
      window.open(
        "./RTCPeerConnection/Peer_connection_using_Perfect_Negotiation/Peer_connection_using_Perfect_Negotiation.html"
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
document
  .getElementById("btnStream_from_a_canvas_element_to_a_video_element")
  .addEventListener("click", () =>
    handleStream_from_a_canvas_element_to_a_video_element()
  );
document
  .getElementById("btnRecord_a_stream_from_a_canvas_element")
  .addEventListener("click", () =>
    handleRecord_a_stream_from_a_canvas_element()
  );
document
  .getElementById("btnGuiding_video_encoding_with_content_hints")
  .addEventListener("click", () =>
    handleGuiding_video_encoding_with_content_hints()
  );
document
  .getElementById("btnBasic_peer_connection_demo_in_a_single_tab")
  .addEventListener("click", () =>
    handleBasic_peer_connection_demo_in_a_single_tab()
  );
document
  .getElementById("btnBasic_peer_connection_demo_between_two_tabs")
  .addEventListener("click", () =>
    handleBasic_peer_connection_demo_between_two_tabs()
  );
document
  .getElementById("btnPeer_connection_using_Perfect_Negotiation")
  .addEventListener("click", () =>
    handlePeer_connection_using_Perfect_Negotiation()
  );
