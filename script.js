const music = document.getElementById('music');
const playBtn = document.getElementById('playBtn');
const lyrics = document.getElementById('lyrics-content');

function togglePlay() {
    if (music.paused) {
        music.play();
        playBtn.innerText = "DURAKLAT";
    } else {
        music.pause();
        playBtn.innerText = "DEVAM ET";
    }
}

// Şarkı aktıkça sözleri saniyeye göre kaydıralım
music.ontimeupdate = () => {
    const time = music.currentTime;
    if (time > 4) lyrics.style.transform = "translateY(-65px)";
    if (time > 8) lyrics.style.transform = "translateY(-130px)";
    if (time > 12) lyrics.style.transform = "translateY(-195px)";
};
