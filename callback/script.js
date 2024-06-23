document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    
    const messageElement = document.getElementById('message');
    
    if (code) {
        messageElement.textContent = `Code: ${code}`;
    } else {
        messageElement.textContent = 'No code found.';
    }
});
