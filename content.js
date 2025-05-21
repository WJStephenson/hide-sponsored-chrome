// Function to hide Google sponsored results
function hideGoogleSponsored() {
    // Hide sponsored search results
    const sponsoredElements = document.querySelectorAll('div[data-text-ad="1"], div[data-ads]');
    sponsoredElements.forEach(element => {
        element.style.display = 'none';
    });

    // Hide sponsored shopping results
    const sponsoredShopping = document.querySelectorAll('div[data-ads]');
    sponsoredShopping.forEach(element => {
        element.style.display = 'none';
    });
}

// Function to hide Amazon sponsored results
function hideAmazonSponsored() {
    // Hide sponsored products
    const sponsoredProducts = document.querySelectorAll('div[data-component-type="sp-sponsored-result"]');
    sponsoredProducts.forEach(element => {
        element.style.display = 'none';
    });

    // Hide sponsored carousel items
    const sponsoredCarousel = document.querySelectorAll('div[data-component-type="sp-sponsored-carousel"]');
    sponsoredCarousel.forEach(element => {
        element.style.display = 'none';
    });
}

// Function to check current URL and apply appropriate hiding
function hideSponsoredContent() {
    const currentUrl = window.location.href;
    
    if (currentUrl.includes('google.com/search')) {
        hideGoogleSponsored();
    } else if (currentUrl.includes('amazon.com') || 
               currentUrl.includes('amazon.co.uk') || 
               currentUrl.includes('amazon.de') || 
               currentUrl.includes('amazon.fr')) {
        hideAmazonSponsored();
    }
}

// Run the hiding function when the page loads
hideSponsoredContent();

// Create a MutationObserver to watch for dynamic content
const observer = new MutationObserver((mutations) => {
    hideSponsoredContent();
});

// Start observing the document with the configured parameters
observer.observe(document.body, {
    childList: true,
    subtree: true
});
