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
        const headerImage = document.getElementById('header-image');
        if (window.scrollY > headerBottom) {
            nav.classList.add('fixed-nav');
            // headerImage.classList.add('fixed-nav-hidden'); // Remove if you don't want to hide the header image
            // document.body.classList.add('fixed-nav-padding'); // Adjust if you don't want extra padding
        } else {
            nav.classList.remove('fixed-nav');
            // headerImage.classList.remove('fixed-nav-hidden'); // Remove if you don't want to hide the header image
            // document.body.classList.remove('fixed-nav-padding'); // Adjust if you don't want extra padding
        }
    });    
});

