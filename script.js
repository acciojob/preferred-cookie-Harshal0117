//your JS code here. If required.
// Function to set font preferences from cookies
function applyPreferences() {
    const fontsize = getCookie("fontsize") || "16px";
    const fontcolor = getCookie("fontcolor") || "#000000";

    document.documentElement.style.setProperty("--fontsize", fontsize);
    document.documentElement.style.setProperty("--fontcolor", fontcolor);

    // Update input fields to match the saved values
    document.getElementById("fontsize").value = parseInt(fontsize);
    document.getElementById("fontcolor").value = fontcolor;
}

// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Function to get a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return "";
}

// Save font preferences when the form is submitted
document.getElementById("font-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const fontsize = document.getElementById("fontsize").value + "px";
    const fontcolor = document.getElementById("fontcolor").value;

    setCookie("fontsize", fontsize, 30);
    setCookie("fontcolor", fontcolor, 30);

    applyPreferences(); // Apply changes immediately
});

// Apply saved preferences on page load
applyPreferences();
