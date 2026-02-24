function showOffer() {
    alert("🎉 Today's Offer: Get 30% OFF on Cappuccino!");
}
function submitReview() {
    var reviewText = document.getElementById("review-text").value;
    if (reviewText !== "") {
        var reviewDiv = document.createElement("div");
        reviewDiv.className = "review-item";
        reviewDiv.innerHTML = reviewText;
        document.getElementById("reviews").appendChild(reviewDiv);
        document.getElementById("review-text").value = "";
    } else {
        alert("Please enter a review!");
    }
}

function welcomeUser() {
    var name = document.getElementById("name").value;
    document.getElementById("message").innerHTML =
        "Welcome to Brew Therapy, " + name + "! ☕";
}
