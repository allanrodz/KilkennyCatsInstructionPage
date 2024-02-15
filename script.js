document.body.addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'flex';
    setTimeout(() => {
        document.querySelector('.table-container').style.opacity = 1;
    }, 10); // Slight delay to ensure CSS transition takes effect
});

document.body.addEventListener('click', function() {
    var message = document.getElementById('click-message');
    if (message) {
        message.style.display = 'none'; // Hide the message
    }
    // You can also add your code here to show the overlay if it's part of the interaction
});


function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
    document.querySelector('.table-container').style.opacity = 0;
}