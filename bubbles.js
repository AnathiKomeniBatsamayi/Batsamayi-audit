document.addEventListener("DOMContentLoaded", function() {
    // Function to generate random number between min and max
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Create style element to append keyframes
    var style = document.createElement('style');
    document.head.appendChild(style);
    var sheet = style.sheet;

    // Loop through each particle
    for (let i = 1; i <= 30; i++) {
        // Generate random values
        let size = getRandom(5, 10);
        let opacity = Math.random();
        let animationDelay = -i * 0.2;
        let vw = getRandom(10,90);
        let delay = getRandom(30,40);

        // Create keyframes
        let keyframes = `@keyframes particle-animation-${i} {
            100% {
                transform: translate3d(${getRandom(5,95)}vw, ${getRandom(5,95)}vh, ${getRandom(5,95)}px);
            }
        }`;

        // Append keyframes to style sheet
        sheet.insertRule(keyframes, sheet.cssRules.length);

        // Create a new particle element
        let particle = document.createElement("div");
        particle.className = "particle";

        // Apply styles
        particle.style.opacity = opacity;
        particle.style.height = size + "px";
        particle.style.width = size + "px";
        particle.style.animation = `particle-animation-${i} ${delay}s infinite`;
        particle.style.animationDelay = animationDelay + "s";
        particle.style.transform = `translate3d(${getRandom(5,95)}vw, ${getRandom(5,95)}vh, ${getRandom(5,95)}px)`;
        particle.style.background = "hsl(200, 70%, 50%)";

        // Append particle to the body
        document.body.appendChild(particle);
    }
});