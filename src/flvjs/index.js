const flvjs = window.flvjs
if (flvjs.isSupported()) {
    var videoElement = document.getElementById('videoElement');
    var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'http://211.73.19.201/live/E6290DC0-BE6A-B7C4-79F5-114BDB417F9E?fmt=x264_500K_ts&cpid=admin&size=1280X720&toflv=15'
    });
    flvPlayer.attachMediaElement(videoElement);
    flvPlayer.load();
    flvPlayer.play();
}