// script.js
music.ontimeupdate = function() {
    let currentTime = music.currentTime;
    
    // Her 60px'lik hareket bir satır kaydırır
    if (currentTime >= 4.5 && currentTime < 9) {
        lyricsContent.style.transform = "translateY(-60px)";
    } else if (currentTime >= 9 && currentTime < 13.5) {
        lyricsContent.style.transform = "translateY(-120px)";
    } else if (currentTime >= 13.5) {
        lyricsContent.style.transform = "translateY(-180px)";
    } else {
        lyricsContent.style.transform = "translateY(0)";
    }
};
