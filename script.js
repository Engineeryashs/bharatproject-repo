function generateConsumerId() {
    // Generate a random 23-digit number for Consumer ID
    return Math.floor(Math.random() * 1e23).toString().padStart(23, '0');
}
function validateFields() {
    const customerName = document.getElementById('customerName').value.trim();
    const mobileNumber = document.getElementById('mobileNumber').value.trim();
    const email=document.getElementById('email').value.trim();
    const password=document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
   const billNumber=document.getElementById('billNumber').value.trim();
    // Check if customer name is empty
    if (customerName === '') {
        alert('Customer name cannot be empty');
        return false;
    }

    // Check if mobile number is empty
    if (mobileNumber === '') {
        alert('Mobile number cannot be empty');
        return false;
    }

    if (isNaN(mobileNumber) || mobileNumber.length < 10) { // Example: validate minimum length
        alert('Mobile number must be numeric and at least 10 digits long');
        return false;
    }

    if (email=== '') {
        alert('Email ID cannot be empty');
        return false;
    }

    if (password === ''||confirmPassword==='') {
        alert('Password cannot be empty');
        return false;
    }

    if (billNumber === '') {
        alert('Please enter bill number');
        return false;
    }
    if (isNaN(mobileNumber)) {
        alert('Mobile number must be numeric');
        return false;
    }
   
    if (typeof password !== 'string' || typeof confirmPassword !== 'string') {
        alert('Password must be a valid string');
        return false;
    }
    if (typeof customerName !== 'string' ) {
        alert('Customer name must be a valid string');
        return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    return true;
}

function register() {
    // Validate passwords
    if (!validateFields()) {
        return; // Exit if validation fails
    }
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    console.log(password)
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Generate and display consumer ID
    const consumerId = generateConsumerId();
    document.getElementById('consumerId').value = consumerId;

    // Collect data from form
    const customerName = document.getElementById('customerName').value;
    const email = document.getElementById('email').value;

    // Hide registration page and show acknowledgment page
    document.getElementById('registrationPage').style.display = 'none';
    document.getElementById('acknowledgmentPage').style.display = 'block';
    
    // Set acknowledgment page data
    document.getElementById('displayConsumerId').textContent = consumerId;
    document.getElementById('displayCustomerName').textContent = customerName;
    document.getElementById('displayEmail').textContent = email;
}

function goToLogin() {
    // Hide acknowledgment page and show login page (simulate login in this example)
    document.getElementById('acknowledgmentPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('welcomeUserName').textContent = document.getElementById('customerName').value;
}

function logout() {
    // Hide home page and show login page (simulate logout in this example)
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('registrationPage').style.display = 'block';
    document.getElementById('customerName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobileNumber').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
}