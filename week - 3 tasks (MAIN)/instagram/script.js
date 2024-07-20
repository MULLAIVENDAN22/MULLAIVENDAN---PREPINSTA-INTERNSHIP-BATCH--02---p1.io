const uploadBtn = document.getElementById('upload-btn');
const imageUploadInput = document.getElementById('image-upload');
const galleryGrid = document.querySelector('.gallery-grid');

uploadBtn.addEventListener('click', () => {
    imageUploadInput.click();
});

imageUploadInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        const imageData = event.target.result;
        const img = document.createElement('img');
        img.src = imageData;
        galleryGrid.appendChild(img);
    };

    reader.readAsDataURL(file);
});