document.addEventListener('DOMContentLoaded', function() {
    const qrInput = document.getElementById('qr-input');
    const generateButton = document.getElementById('generate-qr');
    const qrCodeDiv = document.getElementById('qr-code');

    generateButton.addEventListener('click', function() {
        const inputValue = qrInput.value;

        if (inputValue) {
            qrCodeDiv.innerHTML = '';
            const qrcode = new QRCode(qrCodeDiv, {
                text: inputValue,
                width: 128,
                height: 128
            });
        }
    });
});
