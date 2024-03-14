document.addEventListener('DOMContentLoaded', function() {
    const captureButtons = document.querySelectorAll('.capture-button');

    captureButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetInputId = this.getAttribute('data-target');
            const targetInput = document.getElementById(targetInputId);

            if (targetInput) {
                targetInput.click();
            }
        });
    });
});