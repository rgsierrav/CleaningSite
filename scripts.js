// document.addEventListener('DOMContentLoaded', function() {
//     var flipButtons = document.querySelectorAll('.flip-card .learn-more-btn, .flip-card .flip-button-back');
//     var flipCardInner = document.querySelector('.flip-card-inner');

//     flipButtons.forEach(function(button) {
//         button.addEventListener('click', function() {
//             flipCardInner.classList.toggle('flipped');
//             console.log('Button clicked!');
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var flipButtons = document.querySelectorAll('.learn-more-btn');

//     flipButtons.forEach(function(button) {
//         button.addEventListener('click', function() {
//             // Find the closest ancestor which is a flip-card
//             var flipCardInner = this.closest('.flip-card').querySelector('.flip-card-inner');
//             flipCardInner.classList.toggle('flipped');
//         });
//     });
// });

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
        const headerImage = document.getElementById('header-image'); // Assuming your header image has this ID
        if (window.scrollY > headerBottom) {
            nav.classList.add('fixed-nav');
            headerImage.classList.add('fixed-nav-hidden');
            document.body.classList.add('fixed-nav-padding');
        } else {
            nav.classList.remove('fixed-nav');
            headerImage.classList.remove('fixed-nav-hidden');
            document.body.classList.remove('fixed-nav-padding');
        }
    });    
});

