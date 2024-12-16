const quantityInput = document.getElementById('quantity');

function changeImage(image) {
    document.getElementById('main-image').src = image;
}

function increaseQuantity() {
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity() {
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// WebSocket for real-time updates (example URL)
const socket = new WebSocket('wss://example.com/socket');

socket.onopen = function() {
    console.log('WebSocket connection established');
};

socket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    updateContent(data);
};

function updateContent(data) {
    const contentArea = document.getElementById('content');
    contentArea.innerHTML += `<p>${data.message}</p>`;
}