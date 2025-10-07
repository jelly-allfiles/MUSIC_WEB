function openPopup(videoSrc) {
    const popup = document.getElementById('popup');
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoSrc;
    popup.style.display = 'flex';
    videoPlayer.play();
}

function closePopup() {
    const popup = document.getElementById('popup');
    const videoPlayer = document.getElementById('videoPlayer');
    popup.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.src = '';
}