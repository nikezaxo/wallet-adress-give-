function connectWallet() {
    var gifContainer = document.querySelector('.gif-container');
    var gif = document.getElementById('wallet-gif');
    var walletAddress = document.getElementById('wallet-address').value;

    if (walletAddress) {
        gifContainer.style.display = 'block';
        gif.src = '1.gif';

        // Freezing the GIF at the last frame after 5 seconds
        setTimeout(() => {
            gif.style.display = 'none'; // Hide the original GIF
            gifContainer.innerHTML = '<img src="1.gif" style="display: block;">'; // Freeze the GIF by replacing it
        }, 5000); // Adjust according to your GIF's length
    }
}
