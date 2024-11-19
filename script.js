function playJumpscare() {
    document.body.innerHTML = ''; 
    const video = document.createElement('video');
    video.src = 'https://raw.githubusercontent.com/scrinshoted/scrinshoted.github.io/main/media/video.mp4';
    video.autoplay = true;
    video.loop = true;
    video.muted = false;
    video.controls = false;
    document.body.appendChild(video);
    video.play();

    const enterFullscreen = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    };
    enterFullscreen();
}

document.getElementById('accept-btn').addEventListener('click', () => {
    playJumpscare();
});

document.getElementById('decline-btn').addEventListener('click', () => {
    playJumpscare();
});
