// Set the password
const correctPassword = "812712";

// Show password input when clicking "I Love You"
document.getElementById("love-message").addEventListener("click", function () {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("password-box").style.display = "block";
});

// Check password
function checkPassword() {
    let userInput = document.getElementById("accessKey").value;

    if (userInput === correctPassword) {
        document.getElementById("password-box").style.display = "none";
        document.getElementById("content").style.display = "block";

        // Play the video (since music is already in it)
        document.getElementById("specialVideo").play();
    } else {
        document.getElementById("error-msg").innerText = "❌ Incorrect Password!";
    }
}
