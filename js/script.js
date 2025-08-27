// Photo carousel functionality
let currentPhotoIndex = 0;
let autoRotateInterval;
const photos = [
    'images/home_carousel/Photo_1.jpg',
    'images/home_carousel/Photo_2.jpg',
    'images/home_carousel/Photo_3.jpg',
    'images/home_carousel/Photo_4.png',
    'images/home_carousel/Photo_5.png',
    'images/home_carousel/Photo_6.png',
    'images/home_carousel/Photo_7.png',
    'images/home_carousel/Photo_8.png',
    'images/home_carousel/Photo_9.png'
];

function startAutoRotate() {
    // Clear any existing interval
    if (autoRotateInterval) {
        clearInterval(autoRotateInterval);
    }
    // Start new interval
    autoRotateInterval = setInterval(nextPhoto, 5000);
}

function previousPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updatePhoto();
    startAutoRotate(); // Restart the interval
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updatePhoto();
    startAutoRotate(); // Restart the interval
}

function updatePhoto() {
    const currentPhoto = document.getElementById('current-photo');
    const previousPhoto = document.getElementById('previous-photo');
    const nextPhoto = document.getElementById('next-photo');
    
    // Update current photo
    currentPhoto.src = photos[currentPhotoIndex];
    
    // Update previous photo
    const previousIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    previousPhoto.src = photos[previousIndex];
    
    // Update next photo
    const nextIndex = (currentPhotoIndex + 1) % photos.length;
    nextPhoto.src = photos[nextIndex];
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
    updatePhoto();
    
    // Start auto-rotation
    startAutoRotate();
});
