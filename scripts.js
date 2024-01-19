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

    // Debounce function to optimize performance
    const debounce = (func, delay) => {
        let inDebounce;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(inDebounce);
            inDebounce = setTimeout(() => func.apply(context, args), delay);
        };
    };

    // Add resize event listener with debounce
    window.addEventListener('resize', debounce(updateHeaderBottom, 100));

    window.addEventListener('scroll', debounce(function() {
        const headerImage = document.getElementById('header-image'); // Assuming your header image has this ID
        if (window.scrollY > headerBottom) {
            nav.classList.add('fixed-nav');
            if (headerImage) {
                headerImage.classList.add('fixed-nav-hidden');
            }
            document.body.classList.add('fixed-nav-padding');
        } else {
            nav.classList.remove('fixed-nav');
            if (headerImage) {
                headerImage.classList.remove('fixed-nav-hidden');
            }
            document.body.classList.remove('fixed-nav-padding');
        }
    }, 100));    
});