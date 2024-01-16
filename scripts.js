// document.addEventListener('DOMContentLoaded', function() {
//     var learnMoreButtons = document.querySelectorAll('.learn-more-btn');
//     learnMoreButtons.forEach(function(button) {
//         button.addEventListener('click', function(event) {
//             var flipCardInner = this.closest('.flip-card').querySelector('.flip-card-inner');
//             flipCardInner.classList.toggle('flipped');
//             console.log('Button clicked!');
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    var flipButtons = document.querySelectorAll('.flip-card .learn-more-btn, .flip-card .flip-button-back');
    var flipCardInner = document.querySelector('.flip-card-inner');

    flipButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            flipCardInner.classList.toggle('flipped');
            console.log('Button clicked!');
        });
    });
});