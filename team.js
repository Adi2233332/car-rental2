const animatedImages = document.querySelectorAll('.animated-img');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as per your requirement

animatedImages.forEach(img => {
    observer.observe(img);
});
