const message = "En vous remerciant de votre humble message";



document.getElementById("contactForm")
.addEventListener("Submit", function (event) {
    event.preventDefault();
    alert(message);
});
