document.addEventListener('DOMContentLoaded', function() {
    var learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    learnMoreButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var flipCardInner = this.closest('.flip-card').querySelector('.flip-card-inner');
            flipCardInner.classList.toggle('flipped');
            console.log('Button clicked!');
        });
    });
});
