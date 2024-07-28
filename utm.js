// scripts.js

console.log('Script loaded')

// Function to safely get a URL parameter
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to safely set the value of a hidden input field
function setHiddenFieldValue() {
    const utmSource = getQueryParam('utm_source');
    const hiddenField = document.querySelector('input[name="sursa trafic"]');
    
    if (hiddenField && utmSource) {
        hiddenField.value = decodeURIComponent(utmSource); // Ensure value is properly decoded
    } else {
        console.error('Hidden field not found or URL parameter is missing');
    }
}

// Execute the function to set the hidden field value when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setHiddenFieldValue);
