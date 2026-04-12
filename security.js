// Basic Frontend Security Protections

// Disable right click
document.addEventListener('contextmenu', e => e.preventDefault());

// Disable inspect shortcuts
document.onkeydown = function(e) {
if(e.keyCode == 123) return false;
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
}

// Anti iframe protection
if (window.top !== window.self) {
window.top.location = window.self.location;
}

// Basic anti phishing message
console.clear();
console.log("Qazi Mobile Shop - Protected Website");

// HTTPS redirect
if (location.protocol !== 'https:') {
location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
