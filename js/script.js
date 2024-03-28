// js/settings.js

function filterPosts(tag) {
    const cards = document.querySelectorAll('.card-container');

    cards.forEach(card => {
        const tags = card.getAttribute('data-tags').split(' ');

        if (tags.includes(tag) || tag === 'all') {
            card.style.display = 'inline-block';
        } else {
            card.style.display = 'none';
        }
    });
}
function redirect() {
    window.location.href = "https://www.pinterest.com/vikkijaku/birbberry/";
}