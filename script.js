document.body.addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'flex';
    setTimeout(() => {
        document.querySelector('.table-container').style.opacity = 1;
    }, 10); // Slight delay to ensure CSS transition takes effect
});

function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
    document.querySelector('.table-container').style.opacity = 0;
}