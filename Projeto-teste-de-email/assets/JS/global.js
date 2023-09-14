document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const validationMessage = document.getElementById('mensagemValidacao');
    const toggleButton = document.getElementById('toggleElement');

    emailInput.addEventListener('input', function () {
        const email = emailInput.value;
        if (!email) {
            validationMessage.textContent = 'O campo de email não pode ficar em branco.';
            toggleButton.setAttribute('disabled', 'true');
        } else if (validarEmail(email)) {
            validationMessage.textContent = '';
            toggleButton.removeAttribute('disabled');
        } else {
            validationMessage.textContent = 'Email inválido.';
            toggleButton.setAttribute('disabled', 'true');
        }
    });

    toggleButton.addEventListener('click', function () {
        const email = emailInput.value;
        if (validarEmail(email)) {
            // Email válido, redirecionar para a nova página
            window.location.href = '../mensagem.html';
        }
    });

    function validarEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }
});