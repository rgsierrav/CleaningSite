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

document.addEventListener('DOMContentLoaded', function() {
    var flipButtons = document.querySelectorAll('.learn-more-btn');

    flipButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Find the closest ancestor which is a flip-card
            var flipCardInner = this.closest('.flip-card').querySelector('.flip-card-inner');
            flipCardInner.classList.toggle('flipped');
        });
    });
});