// deno-lint-ignore-file
// Función para reproducir la música
function playMusic() {
    // Obtener el elemento de audio
    let audio = document.getElementById("background-music");
    // Reproducir la música
    audio.play();
}

// Función para detener la música
function stopMusic() {
    // Obtener el elemento de audio
    let audio = document.getElementById("background-music");
    // Detener la música
    audio.pause();
    // Reiniciar la música al principio para la próxima reproducción
    audio.currentTime = 0;
}

// Función para mostrar u ocultar el popup
function togglePopup() {
    let popup = document.getElementById("popup-1");
    popup.classList.toggle("active");

    // Si el popup está activo, reproducir la música
    if (popup.classList.contains("active")) {
        playMusic();
    } else {
        stopMusic();
    }
}

