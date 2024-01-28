document.addEventListener('DOMContentLoaded', function() {
    var flipCards = document.querySelectorAll('.flip-card');

    flipCards.forEach(function(card) {
        // Select both buttons in the card
        var flipToFrontButton = card.querySelector('.learn-more-btn');
        var flipToBackButton = card.querySelector('.flip-button-back');

        // Flip to back side
        flipToFrontButton.addEventListener('click', function() {
            card.querySelector('.flip-card-inner').classList.add('flipped');
        });

        // Flip to front side
        flipToBackButton.addEventListener('click', function() {
            card.querySelector('.flip-card-inner').classList.remove('flipped');
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    let headerBottom = header.offsetTop + header.offsetHeight;

    // Function to update headerBottom if the header changes size on resize
    const updateHeaderBottom = () => {
        headerBottom = header.offsetTop + header.offsetHeight;
    };

    // Add resize event listener to update headerBottom value
    window.addEventListener('resize', updateHeaderBottom);

    window.addEventListener('scroll', function() {
        if (window.scrollY > headerBottom) {
            nav.classList.add('fixed-nav');
            // Apply animations or style changes only on desktop screens
            if (window.innerWidth > 768) {
                // Add any class or style changes for desktop screens here
                // e.g., nav.classList.add('shrink');
            }
        } else {
            nav.classList.remove('fixed-nav');
            // Revert changes for desktop screens when not scrolled past headerBottom
            if (window.innerWidth > 768) {
                // Revert any class or style changes for desktop screens here
                // e.g., nav.classList.remove('shrink');
            }
        }
    });    
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('/path/to/reviews.json') // Update the path to where your JSON file is located
        .then(response => response.json())
        .then(reviews => {
            const reviewsContainer = document.getElementById('reviews-container');
            reviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.className = 'review';
                reviewElement.innerHTML = `
                    <p class="client-name">${review.name}</p>
                    <div class="rating">${'&#9733;'.repeat(review.rating)}</div>
                    <p class="review-content">"${review.comment}"</p>
                `;
                reviewsContainer.appendChild(reviewElement);
            });
        })
        .catch(error => console.error('Error loading reviews:', error));
});