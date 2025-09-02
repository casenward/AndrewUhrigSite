// Photo carousel functionality
let currentPhotoIndex = 0;
let autoRotateInterval;

const home_carousel = [
    'images/home_carousel/Photo_1.jpg',
    'images/home_carousel/Photo_2.jpg',
    'images/home_carousel/Photo_3.jpg',
    'images/home_carousel/Photo_4.png',
    'images/home_carousel/Photo_5.png',
    'images/home_carousel/Photo_6.png',
    'images/home_carousel/Photo_7.png',
    'images/home_carousel/Photo_8.png',
    'images/home_carousel/Photo_9.png'
    //'images/home_carousel/Photo_10.jpg'
];

/**
const sports_carousel = [
    'images/sports_carousel/S_Photo_1.jpg',
    'images/sports_carousel/S_Photo_2.jpg',
    'images/sports_carousel/S_Photo_3.jpg',
    'images/sports_carousel/S_Photo_4.jpg',
    'images/sports_carousel/S_Photo_5.jpg',
    'images/sports_carousel/S_Photo_6.jpg',
    'images/sports_carousel/S_Photo_7.jpg',
    'images/sports_carousel/S_Photo_8.jpg',
    'images/sports_carousel/S_Photo_9.jpg',
    'images/sports_carousel/S_Photo_10.jpg'
];

const seniorPortraits_carousel = [
    'images/senior_portraits/SP_Photo_1.jpg',
    'images/senior_portraits/SP_Photo_2.jpg',
    'images/senior_portraits/SP_Photo_3.jpg',
    'images/senior_portraits/SP_Photo_4.jpg',
    'images/senior_portraits/SP_Photo_5.jpg',
    'images/senior_portraits/SP_Photo_6.jpg',
    'images/senior_portraits/SP_Photo_7.jpg',
    'images/senior_portraits/SP_Photo_8.jpg',
    'images/senior_portraits/SP_Photo_9.jpg',
    'images/senior_portraits/SP_Photo_10.jpg'
];

const couples_carousel = [
    'images/couples/C_Photo_1.jpg',
    'images/couples/C_Photo_2.jpg',
    'images/couples/C_Photo_3.jpg',
    'images/couples/C_Photo_4.jpg',
    'images/couples/C_Photo_5.jpg',
    'images/couples/C_Photo_6.jpg',
    'images/couples/C_Photo_7.jpg',
    'images/couples/C_Photo_8.jpg',
    'images/couples/C_Photo_9.jpg',
    'images/couples/C_Photo_10.jpg'
];

const events_carousel = [
    'images/family/E_Photo_1.jpg',
    'images/family/E_Photo_2.jpg',
    'images/family/E_Photo_3.jpg',
    'images/family/E_Photo_4.jpg',
    'images/family/E_Photo_5.jpg',
    'images/family/E_Photo_6.jpg',
    'images/family/E_Photo_7.jpg',
    'images/family/E_Photo_8.jpg',
    'images/family/E_Photo_9.jpg',
    'images/family/E_Photo_10.jpg'
];

*/

let currentCarousel = home_carousel;

function selectCategory(category) {
    switch (category) {
        case 'Sports':
            currentCarousel = sports_carousel;
            break;
        case 'Senior Pictures':
            currentCarousel = seniorPortraits_carousel;
            break;
        case 'Couples':
            currentCarousel = couples_carousel;
            break;
        case 'Events':
            currentCarousel = events_carousel;
            break;
        default:
            currentCarousel = home_carousel;
    }
    currentPhotoIndex = 0;
    updatePhoto();
    startAutoRotate();
}

function startAutoRotate() {
    // Clear any existing interval
    if (autoRotateInterval) {
        clearInterval(autoRotateInterval);
    }
    // Start new interval
    autoRotateInterval = setInterval(nextPhoto, 5000);
}

function previousPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + currentCarousel.length) % currentCarousel.length;
    updatePhoto();
    startAutoRotate(); // Restart the interval
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % currentCarousel.length;
    updatePhoto();
    startAutoRotate(); // Restart the interval
}

function updatePhoto() {
    const currentPhoto = document.getElementById('current-photo');
    const previousPhoto = document.getElementById('previous-photo');
    const nextPhoto = document.getElementById('next-photo');
    
    // Update current photo
    currentPhoto.src = currentCarousel[currentPhotoIndex];

    // Update previous photo
    const previousIndex = (currentPhotoIndex - 1 + currentCarousel.length) % currentCarousel.length;
    previousPhoto.src = currentCarousel[previousIndex];

    // Update next photo
    const nextIndex = (currentPhotoIndex + 1) % currentCarousel.length;
    nextPhoto.src = currentCarousel[nextIndex];
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
    updatePhoto();
    // Start auto-rotation
    startAutoRotate();
});
