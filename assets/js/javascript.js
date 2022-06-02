const options = {
    // root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.7
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const timelineHeading = entry.target.querySelector('.timeline-heading');
        const timelineCircle = entry.target.querySelector('.center-dot');
        const timelineContent = entry.target.querySelector('.timeline-text');
    
        if (entry.isIntersecting) {
            timelineHeading.classList.add('animated');
            timelineCircle.classList.add('animated');
            timelineContent.classList.add('animated');
            return; 
        }
    
        
        timelineHeading.classList.remove('animated');
        timelineCircle.classList.remove('animated');
        timelineContent.classList.remove('animated')
    });
}, options);
  
const items = document.querySelectorAll(".roadmap-item")

items.forEach(item => observer.observe(item));
