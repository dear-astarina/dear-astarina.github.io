const ACCESS_PASSWORD = "u-pride";

document.getElementById("loginBtn").addEventListener("click", () => {
  const input = document.getElementById("accessCode").value;
  if (input === ACCESS_PASSWORD) {
    isLocked = false; 
    document.getElementById("authModal").style.display = "none"; // unlock
    animate(); // start animation
  } else {
    alert("Ga gitu kata kuncinya kocak");
  }
});