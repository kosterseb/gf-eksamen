document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form elementer
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    // Reset fejl meldinger
    clearErrors();
    
    let isValid = true;
    
    // Validér navn
    if (name.value.trim() === '') {
        showError('name', 'nameError', 'Skriv dit navn');
        isValid = false;
    }
    
    // Validér email
    if (email.value.trim() === '') {
        showError('email', 'emailError', 'Skriv din email');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError('email', 'emailError', 'Skriv en gyldig email');
        isValid = false;
    }
    
    // Validér besked
    if (message.value.trim() === '') {
        showError('message', 'messageError', 'Skriv din besked');
        isValid = false;
    }
    
    // Hvis alle felter er gyldige, vis succes besked
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('contactForm').reset();
        
        // Skjul succes besked efter 10 sekunder
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 10000);
    }
});

// Hjælpefunktioner til at vise fejlmeddelelser og rydde fejl
function showError(inputId, errorId, message) {
    document.getElementById(inputId).classList.add('input-error');
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Funktion til at rydde fejlmeddelelser og styling
function clearErrors() {
    const inputs = ['name', 'email', 'message'];
    const errors = ['nameError', 'emailError', 'messageError'];
    
    inputs.forEach(inputId => {
        document.getElementById(inputId).classList.remove('input-error');
    });
    
    errors.forEach(errorId => {
        document.getElementById(errorId).style.display = 'none';
    });
}

// Funktion til at validere email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Event listeners til rydning af fejl når brugeren skriver i felterne
['name', 'email', 'message'].forEach(fieldId => {
    document.getElementById(fieldId).addEventListener('input', function() {
        if (this.value.trim() !== '') {
            this.classList.remove('input-error');
            document.getElementById(fieldId + 'Error').style.display = 'none';
        }
    });
});