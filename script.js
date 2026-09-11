const cheerButton = document.getElementById("cheerButton");
const message = document.getElementById("message");
const fanForm = document.getElementById("fanForm");
const fanName = document.getElementById("fanName");
const formMessage = document.getElementById("formMessage");

function showCheerMessage() {
    message.textContent = "Here we go, Steelers!";
}

cheerButton.addEventListener("click", showCheerMessage);

fanForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formMessage.textContent = fanName.value + " is now on the fan list!";
    fanForm.reset();
});