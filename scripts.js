document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.learn-more-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const flipCardInner = this.closest('.flip-card').querySelector('.flip-card-inner');
            flipCardInner.classList.toggle('flipped');
        });
    });
});
