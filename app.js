document.addEventListener('contextmenu', event => {
    event.preventDefault(); // Prevent right-click context menu
});

document.onkeydown = function (e) {
    // Prevent F12 (Developer Tools)
    if (e.keyCode == 123) {
        return false;
    }

    // Prevent Ctrl + E
    if (e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) {
        return false;
    }

    // Prevent Ctrl + Shift + I (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }

    // Prevent Ctrl + Shift + J (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }

    // Prevent Ctrl + U (View Page Source)
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }

    // Prevent Ctrl + S (Save Page)
    if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
        return false;
    }

    // Prevent Ctrl + H (History)
    if (e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)) {
        return false;
    }

    // Prevent Ctrl + A (Select All)
    if (e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)) {
        return false;
    }

    // Prevent Ctrl + F (Find)
    if (e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)) {
        return false;
    }

    // Prevent Ctrl + Shift + C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }

    // Prevent Ctrl + E again (double check)
    if (e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) {
        return false;
    }
};

// JavaScript solution for GitHub Pages
if (window.location.pathname.endsWith('.html')) {
    let newUrl = window.location.pathname.replace('.html', '');

    // If it's index.html, remove it completely and show the base URL
    if (newUrl.endsWith('/index')) {
        newUrl = '/';
    }

    // Update the browser's URL without reloading the page
    window.history.replaceState(null, '', newUrl);
}



