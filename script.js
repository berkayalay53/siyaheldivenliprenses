const music = document.getElementById('music');
const playBtn = document.getElementById('playBtn');
const lyricsContent = document.getElementById('lyrics-content');

// Oynat - Duraklat mantığı
function togglePlay() {
    if (music.paused) {
        music.play();
        playBtn.innerText = "DURAKLAT";
        playBtn.style.opacity = "0.5";
    } else {
        music.pause();
        playBtn.innerText = "DEVAM ET";
        playBtn.style.opacity = "1";
    }
}

// Sözlerin ritimle dansı
// Şarkının saniyesine göre sözleri yukarı kaydırır
music.ontimeupdate = function() {
    let currentTime = music.currentTime;
    
    // Zamanlamaları şarkıya göre buradan ayarlayabilirsin
    if (currentTime > 4 && currentTime < 8) {
        lyricsContent.style.transform = "translateY(-40px)";
    } else if (currentTime >= 8 && currentTime < 12) {
        lyricsContent.style.transform = "translateY(-80px)";
    } else if (currentTime >= 12) {
        lyricsContent.style.transform = "translateY(-120px)";
    } else {
        lyricsContent.style.transform = "translateY(0)";
    }
};
