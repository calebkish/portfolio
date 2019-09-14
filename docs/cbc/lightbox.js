
var photos = [
    'shoes/cbc1.jpg',
    'shoes/cbc2.jpg',
    'shoes/cbc3.jpg',
    'shoes/cbc4.jpg',
    'shoes/cbc5.jpg',
    'shoes/cbc6.jpg',
    'shoes/cbc7.jpg',
    'shoes/cbc8.jpg',
    'shoes/cbc9.jpg'
];
var photoElements = document.getElementsByClassName('photo');
var lightbox = document.getElementById('lightbox');
var lightboxImage = document.getElementById('lightbox__image');

lightbox.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

for (var i=0; i < photoElements.length; i++) {
    


    (function() {
        var photo = photos[i];
        var photoEl = photoElements[i];

        photoEl.style.backgroundImage = 'url(' + photo + ')';

        photoEl.addEventListener('click', function() {
            console.log(photoEl)
            
            lightboxImage.src = window.getComputedStyle(photoEl).getPropertyValue('background-image').split('"')[1];
            lightbox.style.display = 'block';
        });
    })();
}



for (var i=0; i < photoElements.length; i++) {
    (function() {
        var photo = photos[i];
        var photoEl = photoElements[i];

        photoEl.addEventListener('click', function() {
            console.log(photoEl)
            
            lightboxImage.src = window.getComputedStyle(photoEl).getPropertyValue('background-image').split('"')[1];
            lightbox.style.display = 'block';
        });
    })();
    
    
}