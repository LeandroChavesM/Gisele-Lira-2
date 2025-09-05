//ROLAGEM DE FOTOS DO CARROSSEEEEEEELLL EMBARQUE NESSE MUNDO CARROOSEELLL
// NAO SEI MAIS A MUSICA QUE È QUASE CELLLL
window.addEventListener("load", function () {
  const track = document.getElementById("marqueeTrack");
  track.innerHTML += track.innerHTML; // duplica as imagens para loop perfeito

  const totalWidth = track.scrollWidth / 2;
  const duration = totalWidth / 200; // ajuste a velocidade aqui

  track.style.animationDuration = duration + "s";
});

//ROLAGEM DO MENU FIXO
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
    // Rolando para baixo: esconde o menu
    navbar.style.top = "-80px";
  } else {
    // Rolando para cima: mostra o menu
    navbar.style.top = "0";
  }
  lastScroll = currentScroll;
});

//PLAYER DE MUSICA

// let player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player("ytPlayer");
// }

// const tag = document.createElement("script");
// tag.src = "https://www.youtube.com/iframe_api";
// document.body.appendChild(tag);

// const playPauseBtn = document.getElementById("playPause");
// playPauseBtn.addEventListener("click", () => {
//   if (player && player.getPlayerState() === 1) {
//     player.pauseVideo();
//     playPauseBtn.textContent = "▶️";
//   } else {
//     player.playVideo();
//     playPauseBtn.textContent = "⏸️";
//   }
// });

// const volumeSlider = document.getElementById("volume");
// volumeSlider.addEventListener("input", () => {
//   const vol = volumeSlider.value;
//   if (player) {
//     player.setVolume(vol);
//   }
// });
