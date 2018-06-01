var img = document.getElementById('pfp');
var images = ['glitches.gif', 'profile.jpg'];
img.src = images[Math.floor((Math.random() * images.length))];