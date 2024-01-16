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
        var flipToBackButton = card.querySelector('.flip-back-btn');

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
