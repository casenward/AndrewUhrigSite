// Photo carousel functionality
let currentPhotoIndex = 0;
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

function previousPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updatePhoto();
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updatePhoto();
}

function updatePhoto() {
    const currentPhoto = document.getElementById('current-photo');
    currentPhoto.src = photos[currentPhotoIndex];
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
    updatePhoto();
    
    // Auto-rotate photos every 5 seconds
    setInterval(nextPhoto, 5000);
});
