// scripts.js

// Function to safely get a URL parameter
function getQueryParam(param) {
    console.log(`Getting query parameter: ${param}`);
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to safely set the value of a hidden input field
function setHiddenFieldValue() {
    console.log('Setting hidden field value');
    const utmSource = getQueryParam('utm_source');
    console.log(`UTM Source: ${utmSource}`);
    
    // Use a more specific selector if needed
    const hiddenField = document.querySelector('input[name="sursa trafic"]');
    
    if (hiddenField && utmSource) {
        hiddenField.value = decodeURIComponent(utmSource); // Ensure value is properly decoded
        console.log(`Hidden field value set to: ${hiddenField.value}`);
    } else {
        console.error('Hidden field not found or URL parameter is missing');
    }
}

// Ensure that the DOMContentLoaded event is properly set up
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    setHiddenFieldValue();
});
