function toggleForm() {
    const form = document.getElementById('feedbackForm');
    const overlay = document.getElementById('overlay');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
}

function sendEmail(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending email
    alert(`Email sent to: ${email}\nName: ${name}\nMessage: ${message}`);
    toggleForm();
}

