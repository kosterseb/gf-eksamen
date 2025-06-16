function changeImage(thumbnail, description) {
    // Få fat i main image elementet
    const mainImage = document.getElementById('mainImage');
    const imageDescription = document.getElementById('imageDescription');
    
    // Remove active class from all thumbnails
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    
    // Add active class to clicked thumbnail
    thumbnail.classList.add('active');
    
    // Update main image with fade effect
    mainImage.style.opacity = '0.5';
    
    setTimeout(() => {
        mainImage.src = thumbnail.src.replace('w=400&h=300', 'w=800&h=600');
        mainImage.alt = thumbnail.alt;
        imageDescription.textContent = description;
        mainImage.style.opacity = '1';
    }, 150);
}

