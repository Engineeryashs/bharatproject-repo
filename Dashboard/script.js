// Simulated user data
const userData = {
    username: "JohnDoe",
    password: "password123",
};

window.onload = function() {
    // Set the username in the welcome message
    document.getElementById("username").innerText = userData.username;

    // Attach event listeners to checkboxes
    const checkboxes = document.querySelectorAll(".bill-checkbox");

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", updateTotalAmount);
    });
};

// Handle logout
function logout() {
    // Simulate logout by redirecting to login page
    window.location.href = "login.html";
}

// Handle navigation
function navigateTo(page) {
    alert(`Navigating to ${page}`);
    // Implement actual navigation logic here
}

// Update total amount based on selected bills
function updateTotalAmount() {
    let totalAmount = 0;
    const checkboxes = document.querySelectorAll(".bill-checkbox");

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            totalAmount += parseFloat(checkbox.getAttribute("data-amount"));
        }
    });

    document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
}

// Proceed to pay action
function proceedToPay() {
    const totalAmount = document.getElementById("totalAmount").innerText;

    if (parseFloat(totalAmount) > 0) {
        alert(`Proceeding to payment with total amount: $${totalAmount}`);
        // Redirect to payment page
        window.location.href = "../Payment/index.html";
    } else {
        alert("Please select at least one bill to proceed.");
    }
}
