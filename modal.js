const ACCESS_PASSWORD = "u-pride";

document.getElementById("loginBtn").addEventListener("click", () => {
  const input = document.getElementById("accessCode").value;
  if (input === ACCESS_PASSWORD) {
    isLocked = false; 
    document.getElementById("authModal").style.display = "none"; // unlock
    animate(); // start animation
    const audio = document.getElementById("bgAudio");
    audio.play();
  } else {
    alert("Maaf bukan kamu orangnya");
  }

});


