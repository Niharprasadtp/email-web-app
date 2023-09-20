// Sample email data (replace with your data)
const emails = [
    { subject: "Example Email 1", sender: "sender@example.com", body: "Hello, this is an example email." },
    // Add more email objects here
];

// Function to populate the mailbox list
function populateMailbox() {
    // Code to populate mailbox here
}

// Function to populate the email list
function populateEmailList(folder) {
    // Code to filter and populate emails based on the selected folder
}

// Function to display email content
function displayEmailContent(email) {
    const emailView = document.getElementById("email-view");
    emailView.innerHTML = `
        <h2>${email.subject}</h2>
        <p>From: ${email.sender}</p>
        <p>${email.body}</p>
    `;
}

// Event listener for mailbox clicks
document.getElementById("inbox").addEventListener("click", () => {
    populateEmailList("inbox");
});

document.getElementById("sent").addEventListener("click", () => {
    populateEmailList("sent");
});

// Event listener for "Compose" button click
document.getElementById("compose-button").addEventListener("click", () => {
    // Implement compose email functionality here
    // You can display a modal or a new page for composing emails
});

// Event listener for email clicks
document.getElementById("emails").addEventListener("click", (event) => {
    const emailIndex = event.target.dataset.emailIndex;
    if (emailIndex !== undefined) {
        const selectedEmail = emails[emailIndex];
        displayEmailContent(selectedEmail);
    }
});

// Initial population of mailbox and email list
populateMailbox();
populateEmailList("inbox");
