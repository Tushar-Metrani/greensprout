const Form_Validate = () => {
    const form = document.getElementById("booking-form");
    const elements = form.elements;
    let isValid = true;
    let errors = [];

    // Example validation: check required fields
    for (let i = 0; i < elements.length; i++) {
        const el = elements[i];

        // Skip buttons
        if (el.type === "submit" || el.type === "button") continue;

        // Check if required and empty
        if (el.hasAttribute("required") && !el.value.trim()) {
            isValid = false;
            errors.push(`${el.name || el.id} is required.`);
        }

        // Example: check email format if type=email
        if (el.type === "email" && el.value) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(el.value)) {
                isValid = false;
                errors.push(`Please enter a valid email address.`);
            }
        }
    }

    // Show errors or submit form
    if (!isValid) {
        alert(errors.join("\n"));
        return false; // prevent form submission
    }
    return true; // allow form submission
};

