window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    // Shrink the header only after scrolling down a good bit (200px)
    if (window.scrollY > 200) {
        header.classList.add('scrolled');
    } 
    // Bring the header back ONLY when they scroll almost to the very top (< 50px)
    else if (window.scrollY < 50) {
        header.classList.remove('scrolled');
    }
});
