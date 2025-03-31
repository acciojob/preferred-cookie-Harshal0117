// Function to get cookie value by name
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [cookieName, value] = cookie.split("=");
        if (cookieName === name) return value;
    }
    return null;
}

// Function to apply saved preferences
function applyPreferences() {
    const savedFontSize = getCookie("fontsize");
    const savedFontColor = getCookie("fontcolor");

    if (savedFontSize) {
        document.documentElement.style.setProperty("--fontsize", `${savedFontSize}px`);
        document.getElementById("fontsize").value = savedFontSize;
    }

    if (savedFontColor) {
        document.documentElement.style.setProperty("--fontcolor", savedFontColor);
        document.getElementById("fontcolor").value = savedFontColor;
    }
}

// Function to save preferences to cookies
document.getElementById("font-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const fontSize = document.getElementById("fontsize").value;
    const fontColor = document.getElementById("fontcolor").value;

    document.cookie = `fontsize=${fontSize}; path=/`;
    document.cookie = `fontcolor=${fontColor}; path=/`;

    applyPreferences();
});

// Apply preferences when the page loads
applyPreferences();


