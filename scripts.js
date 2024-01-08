// A placeholder for reviews
const reviews = [
    {
        name: "Jane Doe",
        review: "The service was fantastic! My house is sparkling clean with all natural products."
    },
    {
        name: "John Smith",
        review: "Very professional and environmentally conscious. Highly recommend!"
    }
];

// Function to load reviews
function loadReviews() {
    const container = document.getElementById('reviews-container');
    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.innerHTML = `<h3>${review.name}</h3><p>${review.review}</p>`;
        container.appendChild(reviewDiv);
    });
}

// Call the function to load reviews
window.onload = loadReviews;
