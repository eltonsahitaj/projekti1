let currentIndex = 0;
const images = document.querySelectorAll('.section img');
const interval = 3000; // Change image every 3 seconds

function changeImage() {
    images[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = 1;
}

setInterval(changeImage, interval);