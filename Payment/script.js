// Simulated user data
const userData = {
    username: "JohnDoe",
    password: "password123",
};

window.onload = function() {
    // Set the username in the welcome message
    document.getElementById("username").innerText = userData.username;
};

// Handle logout
function logout() {
    // Simulate logout by redirecting to the login page
    window.location.href = "./index.html";
}

// Handle navigation
function navigateTo(page) {
    alert(`Navigating to ${page}`);
    window.location.href = `${page}.html`;
}

// Pay Now button click handler
function payNow() {
    document.querySelector(".payment-details").style.display = "none"; // Hide payment summary
    document.getElementById("cardDetails").style.display = "block"; // Show card details form
}

// Make Payment button click handler
function makePayment() {
    // Get input values
    const cardNumber = document.getElementById("cardNumber").value;
    const cardHolderName = document.getElementById("cardHolderName").value;
    const cvv = document.getElementById("cvv").value;

    console.log(cvv);  // For debugging
    console.log(cardNumber);  // For debugging
    console.log(cardHolderName);  // For debugging

    // Validate card number (must be 16 digits)
    const cardNumberPattern = /^\d{16}$/;
    if (!cardNumberPattern.test(cardNumber)) {
        alert("Card number must be exactly 16 digits.");
        return;
    }

    // Validate cardholder name (must be at least 10 characters)
    if (cardHolderName.length < 10) {
        alert("Cardholder name must be at least 10 characters long.");
        return;
    }

    // Validate CVV (must be exactly 3 digits)
    const cvvPattern = /^\d{3}$/;
    if (!cvvPattern.test(cvv)) {
        alert("CVV must be exactly 3 digits.");
        return;
    }
    
    // Simulate payment process
    const downloadLink = document.getElementById("downloadLink");
    const receiptData = `Receipt for Payment\n\nBill Amount: $200\nPG Charge: $5\nTotal Payable: $205\n\nThank you for your payment!`;

    // Create a downloadable link for the receipt
    const blob = new Blob([receiptData], { type: "text/plain" });
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "receipt.txt";

    // Show payment confirmation
    document.getElementById("cardDetails").style.display = "none";
    document.getElementById("paymentConfirmation").style.display = "block";
}

// Attach event listeners
document.querySelector(".user-info button").addEventListener("click", logout);
document.querySelector(".form-group button[type='button']").addEventListener("click", payNow);
document.querySelector("#cardDetails .form-group button").addEventListener("click", makePayment);

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        navigateTo(this.getAttribute("href").split('#')[0]);
    });
});
