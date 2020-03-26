var video = document.getElementById("video")
var Hls = window.Hls
// 本地直播流
var url = 'http://localhost:8080/hls/stream.m3u8'
// 远程直播流
// var url = 'http://stream.mastvnet.com/MASTV/sd/live.m3u8'
if (Hls.isSupported()) {
  var hls = new Hls()
  hls.loadSource(url)
  hls.attachMedia(video)
  hls.on(Hls.Events.MANIFEST_PARSED, function() {
    video.play()
  })
}
// hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
// When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element through the `src` property.
// This is using the built-in support of the plain video element, without using hls.js.
// Note: it would be more normal to wait on the 'canplay' event below however on Safari (where you are most likely to find built-in HLS support) the video.src URL must be on the user-driven
// white-list before a 'canplay' event will be emitted; the last video event that can be reliably listened-for when the URL is not on the white-list is 'loadedmetadata'.
else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = url
  video.addEventListener("loadedmetadata", function() {
    video.play()
  })
}
