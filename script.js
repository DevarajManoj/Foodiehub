// Initial Data Setup
const restaurants = [
    { name: "Pizza Palace", cuisine: "Italian", rating: 4.5 },
    { name: "Sushi Sensation", cuisine: "Japanese", rating: 4.7 },
    { name: "Burger Bonanza", cuisine: "American", rating: 4.2 },
    { name: "Tandoori Treats", cuisine: "Indian", rating: 4.8 },
    { name: "Taco Town", cuisine: "Mexican", rating: 4.6 }
];

// DOM Elements
const restaurantList = document.getElementById('restaurant-list');
const searchInput = document.getElementById('search');

// Load Restaurants Function
function loadRestaurants() {
    restaurantList.innerHTML = '';
    restaurants.forEach(restaurant => {
        const card = document.createElement('div');
        card.classList.add('restaurant-card');
        card.innerHTML = `
            <h3>${restaurant.name}</h3>
            <p>Cuisine: ${restaurant.cuisine}</p>
            <p>Rating: ${restaurant.rating} ⭐</p>
            <button onclick="orderNow('${restaurant.name}')">Order Now</button>
        `;
        restaurantList.appendChild(card);
    });
}

// Search Filtering
searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchText) ||
        restaurant.cuisine.toLowerCase().includes(searchText)
    );
    displayFilteredRestaurants(filteredRestaurants);
});

function displayFilteredRestaurants(filteredList) {
    restaurantList.innerHTML = '';
    filteredList.forEach(restaurant => {
        const card = document.createElement('div');
        card.classList.add('restaurant-card');
        card.innerHTML = `
            <h3>${restaurant.name}</h3>
            <p>Cuisine: ${restaurant.cuisine}</p>
            <p>Rating: ${restaurant.rating} ⭐</p>
            <button onclick="orderNow('${restaurant.name}')">Order Now</button>
        `;
        restaurantList.appendChild(card);
    });
}

// Simulate Ordering Function
function orderNow(restaurantName) {
    alert(`You have ordered from ${restaurantName}!`);
}

// Event Listener for Document Ready
document.addEventListener('DOMContentLoaded', () => {
    loadRestaurants();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add Restaurant Dynamically
function addRestaurant(name, cuisine, rating) {
    const newRestaurant = { name, cuisine, rating };
    restaurants.push(newRestaurant);
    loadRestaurants();
}

// Example Usage of Dynamic Addition
addRestaurant("Pasta Paradise", "Italian", 4.3);

// Carousel Effect (Placeholder Function)
function createCarousel() {
    const carouselImages = [
        'https://source.unsplash.com/featured/?pizza',
        'https://source.unsplash.com/featured/?sushi',
        'https://source.unsplash.com/featured/?burger',
        'https://source.unsplash.com/featured/?tacos'
    ];
    let index = 0;
    setInterval(() => {
        document.querySelector('.hero').style.backgroundImage = `url(${carouselImages[index]})`;
        index = (index + 1) % carouselImages.length;
    }, 5000);
}

// Call Carousel on Page Load
createCarousel();

// Form Validation Example
function validateContactForm() {
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return false;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    alert('Form submitted successfully!');
    return true;
}

// Infinite Scroll Example (Placeholder Logic)
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreRestaurants();
    }
});

function loadMoreRestaurants() {
    // Simulate loading new restaurants
    const additionalRestaurants = [
        { name: "Dim Sum Delight", cuisine: "Chinese", rating: 4.4 },
        { name: "BBQ Bliss", cuisine: "American", rating: 4.6 }
    ];
    additionalRestaurants.forEach(rest => restaurants.push(rest));
    loadRestaurants();
}

// Toggle Dark Mode Example
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Sample Data Storage in LocalStorage
function saveData() {
    localStorage.setItem('restaurants', JSON.stringify(restaurants));
}

function loadData() {
    const storedData = localStorage.getItem('restaurants');
    if (storedData) {
        restaurants = JSON.parse(storedData);
        loadRestaurants();
    }
}

// Call Functions
saveData();

// Utility Functions
function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

// Fetch Data Example
async function fetchRestaurantData() {
    try {
        const response = await fetch('https://api.example.com/restaurants');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Timer for Promotional Popup (Placeholder)
setTimeout(() => {
    alert('Check out our daily deals!');
}, 10000); // 10 seconds

// User Greeting Based on Time
function greetUser() {
    const hour = new Date().getHours();
    if (hour < 12) {
        alert('Good Morning! Ready for some food?');
    } else if (hour < 18) {
        alert('Good Afternoon! Let’s grab a bite?');
    } else {
        alert('Good Evening! Hungry for dinner?');
    }
}

greetUser();

// End of Script
